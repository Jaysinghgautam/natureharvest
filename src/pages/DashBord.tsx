import React, { useState } from "react";

interface GalleryImage {
  id: string;
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !url.trim()) return;

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      name: name.trim(),
      url: url.trim(),
    };

    setImages((prev) => [...prev, newImage]);

    setName("");
    setUrl("");
  };

  const handleDelete = (id: string) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>

          <p className="text-gray-500 mt-1">Add and manage website images</p>
        </div>

        {/* Add Image */}
        {/* Add Image + Image Count */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Add Image */}
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
                type="text"
                placeholder="Image URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
              />

              <button
                type="submit"
                className="bg-black text-white rounded-lg px-5 py-3 font-medium hover:bg-gray-800 transition"
              >
                Add Image
              </button>
            </form>
          </div>

          {/* Image Count */}
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
              {images.map((image) => (
                <div
                  key={image.id}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold truncate">{image.name}</h3>

                    <button
                      onClick={() => handleDelete(image.id)}
                      className="mt-3 text-sm text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
