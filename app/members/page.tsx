import Link from "next/link";
import { User } from "lucide-react";
import { members } from "@/data/members";

/**
 * Members Page
 * ------------
 * Displays all club members grouped by category (Advisors, Executive Committee).
 * Each card links to the member's individual profile page at /members/[id].
 */
export default function MembersPage() {
  /* Group members by category */
  const advisors = members.filter((m) => m.category === "Advisors");
  const executive = members.filter((m) => m.category === "Executive Committee");

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Page header */}
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground">
          Our Members
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Meet the dedicated team that drives our community forward. Click on any
          member to learn more about them.
        </p>
      </div>

      {/* ===== ADVISORS ===== */}
      <div className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Advisors
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              {/* Avatar placeholder */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>

              {/* Member info */}
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.position}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== EXECUTIVE COMMITTEE ===== */}
      <div className="mt-14">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Executive Committee
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executive.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              {/* Avatar placeholder */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <User className="h-6 w-6 text-accent" />
              </div>

              {/* Member info */}
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.position}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
