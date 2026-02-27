import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { events } from "@/data/events";

/**
 * Event Detail Page (Dynamic Route)
 * ----------------------------------
 * Displays full details for a single event when you visit /events/[id].
 * For example: /events/leadership-workshop-2025
 *
 * HOW IT WORKS:
 * 1. Next.js passes the "id" from the URL as a parameter
 * 2. We search the events array in /data/events.js for that id
 * 3. If found, we display the event details
 * 4. If not found, we show a 404 page
 */

/* Generate static pages for all events at build time */
export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

/* Dynamic metadata for SEO */
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — UniClub`,
    description: event.description.slice(0, 160),
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  /* Find the event by id */
  const event = events.find((e) => e.id === id);

  /* Show 404 if event not found */
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Back button */}
      <Link
        href="/events"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Events
      </Link>

      {/* ===== BANNER IMAGE ===== */}
      <div className="relative h-64 overflow-hidden rounded-2xl md:h-80 lg:h-96">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
          {event.category}
        </span>
      </div>

      {/* ===== EVENT INFO ===== */}
      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Main content */}
        <div className="flex flex-1 flex-col gap-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {event.title}
            </h1>
            {event.upcoming && (
              <span className="mt-2 inline-block rounded-md bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                Upcoming
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              About This Event
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Event Highlights
              </h2>
              <ul className="mt-3 flex flex-col gap-3">
                {event.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Gallery
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {event.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 overflow-hidden rounded-xl"
                  >
                    <Image
                      src={image}
                      alt={`${event.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar with event details */}
        <aside className="flex flex-col gap-4 lg:w-72">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Event Details
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Date</p>
                  <p>{event.date}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Time</p>
                  <p>{event.time}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>{event.location}</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
