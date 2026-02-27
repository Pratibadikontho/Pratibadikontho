"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useRef, useCallback } from "react";
import { Download } from "lucide-react";

/**
 * ProfileQRCode Component
 * -----------------------
 * Generates a QR code for a member's profile URL.
 * When scanned, the QR code redirects to the member's profile page.
 *
 * HOW IT WORKS:
 * 1. It receives the profile URL as a prop
 * 2. It renders a QR code canvas using qrcode.react
 * 3. The "Download QR Code" button grabs the canvas and saves it as a PNG
 *
 * PROPS:
 * - url: The full URL to encode in the QR code (e.g., "https://yoursite.com/members/john-doe")
 * - memberName: The member's name (used for the downloaded file name)
 */
export default function ProfileQRCode({
  url,
  memberName,
}: {
  url: string;
  memberName: string;
}) {
  /* Reference to the QR code wrapper div so we can find the canvas element */
  const qrRef = useRef<HTMLDivElement>(null);

  /**
   * handleDownload
   * Finds the <canvas> element inside the wrapper,
   * converts it to a PNG data URL, and triggers a download.
   */
  const handleDownload = useCallback(() => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    /* Convert canvas to a downloadable PNG link */
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${memberName.toLowerCase().replace(/\s+/g, "-")}-qr-code.png`;
    link.href = dataUrl;
    link.click();
  }, [memberName]);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
        Profile QR Code
      </h3>

      {/* QR Code canvas — this is what gets scanned */}
      <div ref={qrRef} className="rounded-lg bg-card p-3">
        <QRCodeCanvas
          value={url}
          size={160}
          level="H" /* High error correction so it scans reliably */
          includeMargin={true}
        />
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Scan to visit this profile
      </p>

      {/* Download button */}
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Download className="h-4 w-4" />
        Download QR Code
      </button>
    </div>
  );
}
