import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users, Star, User } from "lucide-react";
import { members } from "@/data/members";
import { events } from "@/data/events";

/**
 * Home Page
 * ---------
 * The main landing page of the University Club website.
 * Sections: Hero, Stats, Upcoming Events Preview, Members Preview, CTA.
 */
export default function HomePage() {
  /* Show only the first 3 upcoming events */
  const upcomingEvents = events.filter((e) => e.upcoming).slice(0, 3);
  /* Show only the first 4 members */
  const featuredMembers = members.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* =================== HERO SECTION =================== */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="প্রতিবাদী কন্ঠ group photo"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            {'প্রতিবাদী কন্ঠ'}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            {'প্রতিবাদী কন্ঠ গুলো বাঁধবে জোট, অন্যায় হবে প্রতিরোধ'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Events
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Members
            </Link>
          </div>
        </div>
      </section>

      {/* =================== STATS SECTION =================== */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { label: "Members", value: `${members.length}+`, icon: Users },
            { label: "Events", value: `${events.length}+`, icon: Calendar },
            { label: "Departments", value: "6+", icon: Star },
            { label: "Years Active", value: "3+", icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon className="h-6 w-6 text-accent" />
              <span className="font-serif text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =================== UPCOMING EVENTS PREVIEW =================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Events
              </h2>
              <p className="mt-2 text-muted-foreground">
                Don&apos;t miss out on our latest activities
              </p>
            </div>
            <Link
              href="/events"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                    {event.category}
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {event.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/events"
            className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =================== FEATURED MEMBERS =================== */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Members
              </h2>
              <p className="mt-2 text-muted-foreground">
                The people behind the club
              </p>
            </div>
            <Link
              href="/members"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {featuredMembers.map((member) => (
              <Link
                key={member.id}
                href={`/members/${member.id}`}
                className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
              >
                {member.image ? (
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.position}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/members"
            className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden"
          >
            View All Members
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =================== CTA SECTION =================== */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Ready to Join Us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            {'প্রতিবাদী কন্ঠ গুলো বাঁধবে জোট, অন্যায় হবে প্রতিরোধ'}
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
