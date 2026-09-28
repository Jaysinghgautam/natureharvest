import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface GalleryImage {
  _id?: string;
  id?: string;
  name?: string;
  url?: string;
  [key: string]: any; // backend ke alag field names (image, imageUrl, image1 ...) ke liye
}
 const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || "http://localhost:3000").replace(/\/+$/, "");
const API_BASE = `${BACKEND_URL}/api/gallery`;
const LOGIN_ROUTE = "/login"; // App.tsx wale login route se match hona chahiye
// Har request mein token apne aap lag jayega
const api = axios.create({ baseURL: API_BASE });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
    config.headers.set("token", token);
  }
  return config;
});

// Image load na ho toh ye grey placeholder dikhega
const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" fill="#9ca3af" font-family="sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle">Image not found</text></svg>`,
  );

// Backend chahe jis naam se image bheje, sahi src bana do
const getImageSrc = (img: GalleryImage): string => {
  let raw: any =
    img.url ||
    img.imageUrl ||
    img.image_url ||
    img.secure_url ||
    img.image1 ||
    img.image ||
    img.path ||
    img.src ||
    "";

  if (Array.isArray(raw)) raw = raw[0];
  if (raw && typeof raw === "object")
    raw = raw.url || raw.secure_url || raw.path || "";
  raw = String(raw || "").trim();
  if (!raw) return "";

  // Full URL / data / blob ho toh seedha use karo
  if (/^(https?:)?\/\//i.test(raw) || /^(data|blob):/i.test(raw)) return raw;

  // Relative path: "\" ko "/" karo aur server ka address lagao
  return `${BACKEND_URL}/${raw.replace(/\\/g, "/").replace(/^\.?\/+/, "")}`;
};

// Upload se pehle image chhoti karo -> upload tez hota hai
const compressImage = async (
  file: File,
  maxWidth = 1600,
  quality = 0.8,
): Promise<File> => {
  if (file.size < 300 * 1024) return file;
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(1, maxWidth / bmp.width);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);

    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.fillStyle = "#fff"; // PNG ka transparent hissa kala na ho
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    bmp.close();

    const blob = await new Promise<Blob | null>((res) =>
      canvas.toBlob(res, "image/jpeg", quality),
    );
    return blob && blob.size < file.size
      ? new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", {
          type: "image/jpeg",
        })
      : file;
  } catch {
    return file; // fail ho toh original bhejo
  }
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Ek hi jagah error handling: 401 pe login, baaki pe toast
  const handleError = (error: any, fallback: string) => {
    console.error(fallback, error.response?.data || error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      toast.error("Session expired. Please login again");
      navigate(LOGIN_ROUTE);
      return;
    }
    toast.error(
      error.response?.data?.message || error.response?.data?.error || fallback,
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out successfully");
    navigate(LOGIN_ROUTE);
  };

  const fetchImages = async () => {
    try {
      const { data } = await api.get("/listimage");
      if (data.success) {
        const list: GalleryImage[] =
          data.images || data.data || data.list || [];
        console.log("First image object from backend:", list[0]);
        setImages(list);
      }
    } catch (error) {
      handleError(error, "Images load nahi ho paayi");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) navigate(LOGIN_ROUTE);
    else fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!image) return void toast.error("Please select an image file");

    setLoading(true);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image1", await compressImage(image)); // backend: upload.single("image1")

      const { data } = await api.post("/addimage", formData, {
        onUploadProgress: (ev) =>
          ev.total && setProgress(Math.round((ev.loaded * 100) / ev.total)),
      });

      if (data.success) {
        toast.success("Image added successfully!");
        setName("");
        setImage(null);
        form.reset();
        fetchImages(); // await nahi, taaki button turant free ho
      } else {
        toast.error(data.message || "Failed to upload image");
      }
    } catch (error) {
      handleError(error, "Failed to upload image");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return void toast.error("Image id nahi mili");

    try {
      const { data } = await api.post("/removeimage", { id });
      if (data.success) {
        toast.success("Image deleted successfully");
        setImages((prev) => prev.filter((img) => (img._id || img.id) !== id));
      } else {
        toast.error(data.message || "Failed to delete image");
      }
    } catch (error) {
      handleError(error, "Failed to delete image");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
            <p className="text-gray-500 mt-1">Add and manage website images</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-white border border-gray-300 text-gray-800 rounded-lg px-5 py-2.5 font-medium hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>

        {/* Add Image + Image Count */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-5">Add Image</h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <input
                type="text"
                placeholder="Image name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white rounded-lg px-5 py-3 font-medium hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading
                  ? progress > 0 && progress < 100
                    ? `Uploading ${progress}%`
                    : "Please wait..."
                  : "Add Image"}
              </button>
            </form>

            {loading && (
              <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Total Images</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              {images.length}
            </h2>
            <p className="text-gray-400 text-sm mt-1">Images in gallery</p>
          </div>
        </div>

        {/* Image List */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Image List</h2>

          {images.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No images added yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {images.map((img, index) => {
                const imgId = img._id || img.id;
                return (
                  <div
                    key={imgId || index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <img
                      src={getImageSrc(img) || FALLBACK_IMG}
                      alt={img.name || "gallery image"}
                      loading="lazy"
                      onError={(e) => {
                        console.warn("Image load failed:", e.currentTarget.src);
                        e.currentTarget.onerror = null; // infinite loop se bachne ke liye
                        e.currentTarget.src = FALLBACK_IMG;
                      }}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="font-semibold truncate">{img.name}</h3>
                      <button
                        onClick={() => handleDelete(imgId)}
                        className="mt-3 text-sm text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
