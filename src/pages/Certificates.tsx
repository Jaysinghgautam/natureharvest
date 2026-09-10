import React, { useState } from "react";
import {
  Minus,
  Plus,
  RotateCcw,
  Download,
  Printer,
  FileText,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrub";
// import Breadcrumb from "../components/Breadcrumb";

const pdfDocuments = [
  {
    id: 1,
    url: "/pdfs/certificate-7.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 1",
  },
  {
    id: 2,
    url: "/pdfs/certificate-8.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },
  {
    id: 3,
    url: "/pdfs/certificate-9.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },
  {
    id: 4,
    url: "/pdfs/certificate-10.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },
  {
    id: 5,
    url: "/pdfs/certificate-11.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },
  {
    id: 6,
    url: "/pdfs/certificate-12.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },
  {
    id: 7,
    url: "/pdfs/certificate-13.pdf ",
    downloadUrl: "/certificate.pdf",
    title: "Certificate Page 2",
  },

];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* <Breadcrumb /> */}
      <Breadcrumb
        title="Certificates"
        items={[
          { label: "Certificates", path: "/about/Certificates" },
          { label: "Certificates" },
        ]}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Heading */}

        {/* ALAG ALAG DIVS (CSS Grid) */}
        <div className="grid gap-10 lg:grid-cols-2">
          {pdfDocuments.map((pdf) => (
            <CertificateCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- SEPARATE COMPONENT FOR EACH PDF ---
const CertificateCard = ({ pdf }) => {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const MAX_ZOOM = 200;
  const MIN_ZOOM = 50;
  const ZOOM_STEP = 10;

  const handleZoomIn = () =>
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  const handleZoomOut = () =>
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf.downloadUrl;
    link.download = `${pdf.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(pdf.downloadUrl, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Top Header of the Individual Card */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-4">
        <h3 className="font-semibold text-gray-800">{pdf.title}</h3>

        {/* Print & Download for this specific PDF */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-100 hover:text-green-600 transition-colors"
            title="Download"
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            onClick={handlePrint}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-100 hover:text-green-600 transition-colors"
            title="Print"
          >
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Toolbar for this specific PDF */}
      <div className="flex h-12 items-center justify-center gap-1 bg-[#2d2d2d] px-4 text-white">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="w-12 text-center text-xs font-medium text-gray-300">
          {zoom}%
        </span>

        <button
          onClick={handleZoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </button>

        <div className="mx-2 h-5 w-px bg-gray-600" />

        <button
          onClick={handleRotate}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-white/10"
          title="Rotate 90 degrees"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* PDF Viewing Area */}
      <div className="relative h-[550px] w-full overflow-auto bg-[#525659] custom-scrollbar">
        <div
          className="flex min-h-full min-w-max items-center justify-center p-6 transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "center center",
          }}
        >
          <div
            className="relative flex h-[842px] w-[595px] shrink-0 items-center justify-center bg-white shadow-2xl transition-transform duration-300 ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <object
              data={pdf.url}
              type="application/pdf"
              className="h-full w-full border-0 pointer-events-none"
              title={pdf.title}
            >
              <div className="flex flex-col items-center justify-center text-center p-6">
                <FileText className="mb-4 h-10 w-10 text-gray-400" />
                <p className="mb-2 text-sm text-gray-600">
                  Preview not available in this browser.
                </p>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};
