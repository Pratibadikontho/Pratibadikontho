import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

/**
 * Events Page
 * -----------
 * Displays all events from /data/events.js in a responsive grid.
 * Each event card links to its detail page at /events/[id].
 */
export default function EventsPage() {
  /* Separate upcoming and past events */
  const upcomingEvents = events.filter((e) => e.upcoming);
  const pastEvents = events.filter((e) => !e.upcoming);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Page header */}
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground">
          Events
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Discover our upcoming activities and look back at past highlights.
        </p>
      </div>

      {/* ===== UPCOMING EVENTS ===== */}
      {upcomingEvents.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Events
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
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
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      {event.date} &middot; {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {event.location}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ===== PAST EVENTS ===== */}
      {pastEvents.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Past Events
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card opacity-80 transition-all hover:opacity-100 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
