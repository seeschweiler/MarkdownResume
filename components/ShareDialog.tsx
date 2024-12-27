"use client";

import React, { useState, useRef, useEffect } from "react";
import { Share2, Copy, Mail, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import siteConfig from "@/config/site.config";

export function ShareDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("link");
  const [copied, setCopied] = useState(false);
  const [qrCopied, setQrCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const resumeUrl = typeof window !== "undefined" ? window.location.href : "";
  const qrCodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resumeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      siteConfig.texts.shareDialogEmailSubject
    )}&body=${encodeURIComponent(
      `${siteConfig.texts.shareDialogEmailBody} ${resumeUrl}`
    )}`;
  };

  const copyQRCode = () => {
    if (qrCodeRef.current) {
      const svg = qrCodeRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            navigator.clipboard.write([
              new ClipboardItem({
                "image/png": blob,
              }),
            ]);
            setQrCopied(true);
            setTimeout(() => setQrCopied(false), 2000);
          }
        });
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgData);
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-[var(--theme-bg-secondary)] text-theme-text-primary transition-colors duration-200"
        aria-label="Share resume"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div ref={dialogRef} className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-theme-bg-primary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-theme-bg-primary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <h2 className="text-lg font-semibold text-theme-text-primary flex-1">
                      {siteConfig.texts.shareDialogHeadlineText}
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-theme-text-secondary hover:text-theme-text-primary transition-colors ml-4"
                      aria-label="Close dialog"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex mb-4">
                    <button
                      onClick={() => setActiveTab("link")}
                      className={`flex-1 py-2 text-sm font-medium ${
                        activeTab === "link"
                          ? "text-theme-text-accent border-b-2 border-theme-text-accent"
                          : "text-theme-text-secondary"
                      }`}
                    >
                      Link
                    </button>
                    <button
                      onClick={() => setActiveTab("qr")}
                      className={`flex-1 py-2 text-sm font-medium ${
                        activeTab === "qr"
                          ? "text-theme-text-accent border-b-2 border-theme-text-accent"
                          : "text-theme-text-secondary"
                      }`}
                    >
                      QR Code
                    </button>
                    <button
                      onClick={() => setActiveTab("email")}
                      className={`flex-1 py-2 text-sm font-medium ${
                        activeTab === "email"
                          ? "text-theme-text-accent border-b-2 border-theme-text-accent"
                          : "text-theme-text-secondary"
                      }`}
                    >
                      Email
                    </button>
                  </div>

                  {activeTab === "link" && (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={resumeUrl}
                        readOnly
                        className="flex-1 px-3 py-2 text-sm bg-[var(--theme-bg-secondary)] text-theme-text-primary rounded-md"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="px-3 py-2 bg-[var(--theme-bg-secondary)] text-theme-text-primary rounded-md transition-colors duration-200"
                      >
                        {copied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {activeTab === "qr" && (
                    <div className="flex flex-col items-center space-y-4">
                      <QRCodeSVG value={resumeUrl} size={200} ref={qrCodeRef} />
                      <button
                        onClick={copyQRCode}
                        className="w-[200px] py-2 bg-[var(--theme-bg-secondary)] text-theme-text-primary rounded-md transition-colors duration-200 flex items-center justify-center"
                      >
                        {qrCopied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}

                  {activeTab === "email" && (
                    <button
                      onClick={shareViaEmail}
                      className="w-full py-2 bg-[var(--theme-bg-secondary)] text-theme-text-primary rounded-md transition-colors duration-200 flex items-center justify-center text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
