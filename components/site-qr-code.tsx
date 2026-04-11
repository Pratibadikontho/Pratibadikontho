"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useRef, useCallback } from "react";
import { Download } from "lucide-react";

/**
 * SiteQRCode Component
 * --------------------
 * Renders a single QR code that links to the website.
 * Placed in the footer so visitors can scan and share the site.
 */
export default function SiteQRCode() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://v0-protibadikontho.vercel.app/";
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "pratibadi-kontho-qr.png";
    link.href = dataUrl;
    link.click();
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
        {"ওয়েবসাইট QR কোড"}
      </h3>
      <div ref={qrRef} className="rounded-lg bg-background p-2">
        <QRCodeCanvas
          value={siteUrl}
          size={120}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="text-center text-xs text-muted-foreground">
        {"স্ক্যান করে ওয়েবসাইট ভিজিট করুন"}
      </p>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Download className="h-3.5 w-3.5" />
        Download QR
      </button>
    </div>
  );
}
