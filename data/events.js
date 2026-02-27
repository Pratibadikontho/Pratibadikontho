/**
 * ==============================================
 * EVENTS DATA FILE
 * ==============================================
 *
 * HOW TO ADD A NEW EVENT:
 * 1. Copy one of the event objects below
 * 2. Paste it at the end of the array (before the closing bracket)
 * 3. Change the values to match the new event
 * 4. Add the event banner image to /public/images/ folder
 * 5. Add any gallery images to /public/images/ folder
 * 6. Update the "image" and "gallery" fields accordingly
 *
 * IMPORTANT:
 * - The "id" must be unique and URL-friendly (use lowercase and hyphens)
 * - The "id" is used in the URL: /events/[id]
 * - Image paths start with /images/
 * - Set "upcoming" to true for future events, false for past events
 * ==============================================
 */

export const events = [
  {
    id: "leadership-workshop-2025",
    title: "Leadership Workshop 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium, Building A",
    image: "/images/event-workshop.jpg",
    upcoming: true,
    category: "Workshop",
    description: "Join us for an intensive leadership workshop designed to develop your skills as a student leader. This full-day event features interactive sessions led by industry professionals, group activities, and networking opportunities. Whether you are a seasoned leader or just getting started, this workshop will equip you with the tools and knowledge to make a real impact on campus and beyond.",
    highlights: [
      "Keynote speech by CEO of GlobalTech",
      "Interactive breakout sessions on communication and teamwork",
      "Networking lunch with industry professionals",
      "Certificate of completion for all attendees"
    ],
    gallery: [
      "/images/event-workshop.jpg",
      "/images/event-gala.jpg"
    ]
  },
  {
    id: "annual-charity-gala",
    title: "Annual Charity Gala",
    date: "April 20, 2025",
    time: "6:00 PM - 11:00 PM",
    location: "Grand Ballroom, University Hotel",
    image: "/images/event-gala.jpg",
    upcoming: true,
    category: "Gala",
    description: "The Annual Charity Gala is our flagship event that brings together students, faculty, alumni, and community leaders for an evening of elegance and giving. This year, all proceeds will go towards the Student Emergency Fund, which provides financial assistance to students in need. Enjoy a gourmet dinner, live entertainment, and silent auction while supporting a great cause.",
    highlights: [
      "Gourmet three-course dinner",
      "Live music performance by the University Jazz Band",
      "Silent auction with premium items",
      "All proceeds go to the Student Emergency Fund"
    ],
    gallery: [
      "/images/event-gala.jpg",
      "/images/event-cultural.jpg"
    ]
  },
  {
    id: "inter-university-sports-tournament",
    title: "Inter-University Sports Tournament",
    date: "May 10-12, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "University Sports Complex",
    image: "/images/event-sports.jpg",
    upcoming: true,
    category: "Sports",
    description: "Get ready for three days of competitive fun and school spirit! The Inter-University Sports Tournament brings together teams from 10 universities to compete in basketball, volleyball, badminton, and track events. Whether you are playing or cheering from the stands, this is the most exciting sporting event of the year. Come support your team and be part of the action!",
    highlights: [
      "Teams from 10 universities competing",
      "Events: basketball, volleyball, badminton, track & field",
      "Opening ceremony with marching band",
      "Trophies and medals for top performers"
    ],
    gallery: [
      "/images/event-sports.jpg",
      "/images/event-workshop.jpg"
    ]
  },
  {
    id: "cultural-night-2025",
    title: "Cultural Night 2025",
    date: "June 5, 2025",
    time: "5:00 PM - 10:00 PM",
    location: "Open Air Theatre, Central Campus",
    image: "/images/event-cultural.jpg",
    upcoming: true,
    category: "Cultural",
    description: "Cultural Night is a celebration of the diverse cultures represented in our university community. Students showcase traditional dances, songs, fashion, and cuisine from around the world. This beloved annual event fosters cross-cultural understanding and brings the entire campus together in a vibrant display of unity and creativity. Food stalls, art exhibitions, and live performances make this an unforgettable evening.",
    highlights: [
      "Traditional dance performances from 15+ cultures",
      "International food court with 20+ stalls",
      "Art and photography exhibition",
      "Fashion show featuring traditional attire"
    ],
    gallery: [
      "/images/event-cultural.jpg",
      "/images/event-gala.jpg"
    ]
  }
];
