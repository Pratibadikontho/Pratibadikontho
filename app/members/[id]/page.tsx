import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  User,
  MapPin,
  CalendarDays,
  Briefcase,
  Quote,
  ClipboardList,
  Shield,
} from "lucide-react";
import { members } from "@/data/members";
import ProfileQRCode from "@/components/profile-qr-code";

/**
 * Member Profile Page (Dynamic Route)
 * ------------------------------------
 * Displays a single member's full profile when you visit /members/[id].
 * For example: /members/haji-md-azim-mia
 *
 * HOW IT WORKS:
 * 1. Next.js passes the "id" from the URL as a parameter
 * 2. We search the members array in /data/members.js for that id
 * 3. If found, we display the member's detailed profile
 * 4. If not found, we show a 404 page
 */

/* Generate static pages for all members at build time */
export function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}

/* Dynamic metadata for SEO */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);
  if (!member) return { title: "Member Not Found" };
  return {
    title: `${member.name} — প্রতিবাদী কন্ঠ`,
    description: member.bio
      ? `${member.name} — ${member.position}. ${member.bio}`
      : `${member.name} — ${member.position} at প্রতিবাদী কন্ঠ`,
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
  const profileUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/members/${member.id}`
    : `/members/${member.id}`;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back button */}
      <Link
        href="/members"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Members
      </Link>

      {/* ---- Hero Card ---- */}
      <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
          {/* Avatar */}
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <User className="h-14 w-14 text-primary" />
          </div>

          {/* Name, position, category, location, joined */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {member.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-primary">
              {member.position}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                <Shield className="h-3.5 w-3.5" />
                {member.category}
              </span>

              {member.joinedDate && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {"Joined " + member.joinedDate}
                </span>
              )}

              {member.address && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {member.address}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---- Content Grid ---- */}
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {/* Left column — bio, responsibilities, quote */}
        <div className="flex flex-col gap-8 md:col-span-2">
          {/* Bio Section */}
          {member.bio && (
            <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-foreground">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{"পরিচিতি"}</h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </section>
          )}

          {/* Responsibilities Section */}
          {member.responsibilities && member.responsibilities.length > 0 && (
            <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-foreground">
                <ClipboardList className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{"দায়িত্বসমূহ"}</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {member.responsibilities.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* Quote Section */}
          {member.quote && (
            <section className="rounded-2xl border border-border bg-primary/5 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 shrink-0 text-primary/40" />
                <div>
                  <p className="font-serif text-lg italic leading-relaxed text-foreground">
                    {'"' + member.quote + '"'}
                  </p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    {"— " + member.name}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Right column — QR code */}
        <div className="flex flex-col gap-8">
          <ProfileQRCode url={profileUrl} memberName={member.name} />

          {/* Quick Info Card */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {"সংক্ষিপ্ত তথ্য"}
            </h3>
            <dl className="flex flex-col gap-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {"পদবি"}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {member.position}
                </dd>
              </div>
              <div className="h-px bg-border" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {"বিভাগ"}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {member.category}
                </dd>
              </div>
              {member.joinedDate && (
                <>
                  <div className="h-px bg-border" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {"যোগদান"}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {member.joinedDate}
                    </dd>
                  </div>
                </>
              )}
              {member.address && (
                <>
                  <div className="h-px bg-border" />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {"অবস্থান"}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {member.address}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
