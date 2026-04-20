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
    title: "জাঁকজমকপূর্ণ আয়োজনে ‘প্রতিবাদী কন্ঠ’ মানবিক সংগঠনের উদ্বোধন",
    date: "December 19, 2021",
    time: "2:00 PM - 11:00 PM",
    location: "১০নং নরোত্তমপুর, ডাকঘর: পন্ডিত বাজার থানা: বেগমগঞ্জ, জেলা: নোয়াখালী। মৌলভী কলিম উল্যাহ ছাহেবের মসজিদ সংলগ্ন",
    image: "/images/pk1.jpeg",
    upcoming: true,
    category: "Workshop",
    description: "১৯ ডিসেম্বর ২০২১ তারিখে  ১০নং নরোত্তমপুর, ডাকঘর: পন্ডিত বাজার থানা: বেগমগঞ্জ, জেলা: নোয়াখালী।মৌলভী কলিম উল্যাহ ছাহেবের মসজিদ সংলগ্ন এ এক আনন্দঘন ও জাঁকজমকপূর্ণ আয়োজনের মধ্য দিয়ে প্রতিবাদী কন্ঠ মানবিক সংগঠনের উদ্বোধন অনুষ্ঠিত হয়।উদ্বোধনী অনুষ্ঠানে স্থানীয় গণ্যমান্য ব্যক্তিবর্গ, সমাজসেবক, তরুণ স্বেচ্ছাসেবক এবং বিভিন্ন শ্রেণিপেশার মানুষ উপস্থিত ছিলেন। অনুষ্ঠানে সংগঠনের লক্ষ্য, উদ্দেশ্য ও ভবিষ্যৎ পরিকল্পনা তুলে ধরা হয়।সংগঠনের প্রতিষ্ঠাতা ও দায়িত্বশীলরা জানান, ‘প্রতিবাদী কন্ঠ’ সবসময় অসহায়, সুবিধাবঞ্চিত ও দরিদ্র মানুষের পাশে দাঁড়াতে কাজ করবে। শিক্ষা, স্বাস্থ্য, মানবিক সহায়তা এবং সামাজিক সচেতনতা বৃদ্ধির মতো বিভিন্ন কার্যক্রম পরিচালনার পরিকল্পনাও তুলে ধরা হয়।অনুষ্ঠানে দোয়া ও মোনাজাতের মাধ্যমে সংগঠনের সফলতা কামনা করা হয় এবং সকলের সহযোগিতা ও সমর্থন প্রত্যাশা করা হয়.",
    highlights: [
      "প্রতিবাদী কন্ঠ’ মানবিক সংগঠনের জাঁকজমকপূর্ণ উদ্বোধন সম্পন্ন—মানবতার সেবায় নতুন পথচলা শুরু",
      "মানবতার সেবায় প্রতিশ্রুতিবদ্ধ ‘প্রতিবাদী কন্ঠ’—উদ্বোধনের মাধ্যমে আনুষ্ঠানিক যাত্রা শুরু",
      "সামাজিক উন্নয়ন ও মানবিক সহায়তায় এগিয়ে যেতে উদ্বোধন হলো ‘প্রতিবাদী কন্ঠ’ সংগঠনের",
      "প্রতিবাদী কন্ঠ’—মানবতার পথে নতুন যাত্রা"
    ],
    gallery: [
      "/images/pk2.jpeg",
      "/images/pk3.jpeg"
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
    title: "অসহায় পরিবারের পাশে ‘প্রতিবাদী কন্ঠ’ — মরহুম ওজিউল্লাহ’র মরদেহ পরিবহনে সহায়তা",
    date: "March 12, 2025",
    time: "5:00 PM - 10:00 PM",
    location: "প্রতিবাদী কন্ঠ প্রধান কার্যালয়, ৬৫/৩ ওয়াটার ওয়ার্কস রোড চকবাজার ঢাকা",
    image: "/images/onudan.jpeg",
    upcoming: true,
    category: "Cultural",
    description: "নোয়াখালী জেলার সোনাইমুড়ি থানাধীন বজরা ইউনিয়নের শাকেরপুর গ্রামের সাপরাশি বাড়ির বাসিন্দা মরহুম ওজিউল্লাহ ঢাকা মেডিকেল কলেজ হাসপাতালে ইন্তেকাল করেন। মরহুমের পরিবার আর্থিকভাবে অসচ্ছল হওয়ায় তাঁর মরদেহ নিজ গ্রামের বাড়িতে নেওয়ার জন্য প্রয়োজনীয় অ্যাম্বুলেন্স ভাড়া বহন করা তাদের পক্ষে সম্ভব হচ্ছিল না।এমন পরিস্থিতিতে ‘প্রতিবাদী কন্ঠ’ মানবিক সংগঠন এগিয়ে আসে এবং মরদেহ পরিবহনের জন্য অ্যাম্বুলেন্স ভাড়া বাবদ নগদ অর্থ সহায়তা প্রদান করে। .",
    highlights: [
      "সংগঠনের পক্ষ থেকে জানানো হয়, সমাজের অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানোই তাদের প্রধান লক্ষ্য",
      "ভবিষ্যতেও এ ধরনের মানবিক কার্যক্রম অব্যাহত রাখার প্রত্যয় ব্যক্ত করা হয়",
      "সংগঠনের এই মানবিক উদ্যোগ যেন অব্যাহত রাখা যায়, সে জন্য সকলের কাছে দোয়া কামনা করা হয়েছে",
      "মানবতার সেবায় আমরা সবসময় প্রস্তুত"
    ],
    gallery: [
      "/images/emer.jpeg",
      "/images/ambu.jpeg"
    ]
  }

];
