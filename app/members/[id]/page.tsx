import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, Award, Sparkles } from "lucide-react";
import { members } from "@/data/members";
import ProfileQRCode from "@/components/profile-qr-code";

/**
 * Member Profile Page (Dynamic Route)
 * ------------------------------------
 * Displays a single member's full profile when you visit /members/[id].
 * For example: /members/john-doe
 *
 * HOW IT WORKS:
 * 1. Next.js passes the "id" from the URL as a parameter
 * 2. We search the members array in /data/members.js for that id
 * 3. If found, we display the member's full profile
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
    title: `${member.name} — UniClub`,
    description: member.bio.slice(0, 160),
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
   * The QR code will link to this URL when scanned.
   */
  const profileUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/members/${member.id}`
      : `/members/${member.id}`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Back button */}
      <Link
        href="/members"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Members
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* ===== LEFT COLUMN: Photo, Contact, QR Code ===== */}
        <div className="flex flex-col gap-6">
          {/* Profile picture */}
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl">
            <Image
              src={member.image}
              alt={`Photo of ${member.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {member.email}
            </a>
            <a
              href={`tel:${member.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {member.phone}
            </a>
          </div>

          {/* QR Code — scan to visit this profile */}
          <ProfileQRCode url={profileUrl} memberName={member.name} />
        </div>

        {/* ===== RIGHT COLUMN: Bio, Skills, Achievements ===== */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          {/* Name and position */}
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {member.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-primary">
              {member.position}
            </p>
            <p className="text-sm text-muted-foreground">{member.department}</p>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              About
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
              <Sparkles className="h-5 w-5 text-accent" />
              Skills
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
              <Award className="h-5 w-5 text-accent" />
              Achievements
            </h2>
            <ul className="mt-3 flex flex-col gap-3">
              {member.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
