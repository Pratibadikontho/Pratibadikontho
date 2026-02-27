import Link from "next/link";
import { GraduationCap } from "lucide-react";

/**
 * Footer Component
 * ----------------
 * Displayed at the bottom of every page.
 * Contains quick links, contact info, and copyright notice.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold text-foreground">
                {'প্রতিবাদী কন্ঠ'}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'প্রতিবাদী কন্ঠ গুলো বাঁধবে জোট, অন্যায় হবে প্রতিরোধ'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/events", label: "Events" },
                { href: "/members", label: "Members" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>123 University Avenue</li>
              <li>Campus Building B, Room 204</li>
              <li>club@university.edu</li>
              <li>+1 234 567 890</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {'© '}{new Date().getFullYear()}{' প্রতিবাদী কন্ঠ. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}
