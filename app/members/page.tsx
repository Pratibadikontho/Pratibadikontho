import Image from "next/image";
import Link from "next/link";
import { members } from "@/data/members";

/**
 * Members Page
 * ------------
 * Displays all club members in a responsive grid.
 * Each card links to the member's individual profile page at /members/[id].
 */
export default function MembersPage() {
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

      {/* Members grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Link
            key={member.id}
            href={`/members/${member.id}`}
            className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-lg"
          >
            {/* Profile picture */}
            <div className="relative h-28 w-28 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Member info */}
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-card-foreground">
                {member.name}
              </h2>
              <p className="text-sm font-medium text-primary">
                {member.position}
              </p>
              <p className="text-xs text-muted-foreground">
                {member.department}
              </p>
            </div>

            {/* Skills preview */}
            <div className="flex flex-wrap justify-center gap-2">
              {member.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
