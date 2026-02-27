import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User } from "lucide-react";
import { members } from "@/data/members";
import ProfileQRCode from "@/components/profile-qr-code";

/**
 * Member Profile Page (Dynamic Route)
 * ------------------------------------
 * Displays a single member's profile when you visit /members/[id].
 * For example: /members/haji-md-azim-mia
 *
 * HOW IT WORKS:
 * 1. Next.js passes the "id" from the URL as a parameter
 * 2. We search the members array in /data/members.js for that id
 * 3. If found, we display the member's profile
 * 4. If not found, we show a 404 page
 */

/* Generate static pages for all members at build time */
export function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}

/* Dynamic metadata for SEO */
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);
  if (!member) return { title: "Member Not Found" };
  return {
    title: `${member.name} — প্রতিবাদী কন্ঠ`,
    description: `${member.name} — ${member.position} at প্রতিবাদী কন্ঠ`,
  };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  /* Find the member by id */
  const member = members.find((m) => m.id === id);

  /* Show 404 if member not found */
  if (!member) notFound();

  /**
   * Build the full profile URL for the QR code.
   * In production, replace this with your actual domain.
   */
  const profileUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/members/${member.id}`
      : `/members/${member.id}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Back button */}
      <Link
        href="/members"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Members
      </Link>

      <div className="flex flex-col items-center gap-8">
        {/* Avatar */}
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
          <User className="h-14 w-14 text-primary" />
        </div>

        {/* Name and position */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {member.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-primary">
            {member.position}
          </p>
          <span className="mt-1 inline-block rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            {member.category}
          </span>
        </div>

        {/* QR Code */}
        <div className="w-full max-w-xs">
          <ProfileQRCode url={profileUrl} memberName={member.name} />
        </div>
      </div>
    </div>
  );
}
