import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";

/**
 * About Us Page
 * -------------
 * Tells visitors about the University Club — mission, vision, values, and history.
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden">
        <Image
          src="/images/Banner.png"
          alt="University Club team group photo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            {'প্রতিবাদী কন্ঠ'}
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
            {'প্রতিবাদী কন্ঠ গুলো বাঁধবে জোট, অন্যায় হবে প্রতিরোধ'}
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Our Story
          </h2>
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              {'প্রতিবাদী কণ্ঠ–এর যাত্রা শুরু হয়েছিল আমাদের এলাকার কিশোর গ্যাংয়ের অপতৎপরতা ও সামাজিক অবক্ষয়ের বিরুদ্ধে দৃঢ় অবস্থান নেওয়ার মধ্য দিয়ে। সমাজকে নিরাপদ ও সুশৃঙ্খল করার প্রত্যয় থেকেই এই সংগঠনের জন্ম।'}
            </p>
            <p>
              {'সংগঠনটির প্রতিষ্ঠাতা, সমাজসচেতন ব্যবসায়ী মোঃ আজিম মিঞা, বিশ্বাস করতেন—অন্যায়ের বিরুদ্ধে শুধু সমালোচনা নয়, প্রয়োজন সংগঠিত প্রতিরোধ ও ইতিবাচক উদ্যোগ। তার নেতৃত্বে একদল উদ্যমী তরুণ একত্রিত হয়ে গড়ে তোলে \'প্রতিবাদী কণ্ঠ\'।'}
            </p>
            <p>
              {'সময়ের পরিক্রমায় \'প্রতিবাদী কণ্ঠ\' শুধু একটি প্রতিবাদী সংগঠন হিসেবে সীমাবদ্ধ থাকেনি; এটি পরিণত হয়েছে একটি পূর্ণাঙ্গ মানবিক ও সামাজিক সংগঠনে। আমরা বিশ্বাস করি, সমাজ পরিবর্তনের জন্য প্রতিবাদের পাশাপাশি প্রয়োজন সহমর্মিতা ও সেবামূলক কার্যক্রম।'}
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION, VISION, VALUES ===== */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground">
            What We Stand For
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Mission */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {'অন্যায়, অপরাধ ও সামাজিক অবক্ষয়ের বিরুদ্ধে দৃঢ় অবস্থান গ্রহণ করা এবং মানবিক সেবার মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনা—এটাই আমাদের মূল লক্ষ্য।\nআমরা কিশোর গ্যাংসহ সকল ধরনের সামাজিক অপরাধ প্রতিরোধে সচেতনতা সৃষ্টি করি এবং তরুণদের নৈতিকতা, শৃঙ্খলা ও নেতৃত্বগুণে উদ্বুদ্ধ করি।\nখাদ্য কর্মসূচি, বস্ত্র বিতরণ, স্বাস্থ্য সেবা, বাসস্থান সহায়তা, শিক্ষা কার্যক্রম, ধর্মীয় উদ্যোগ, যাকাত ব্যবস্থাপনা এবং খেলাধুলার মাধ্যমে আমরা সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে প্রতিশ্রুতিবদ্ধ।\nআমাদের বিশ্বাস—প্রতিবাদের পাশাপাশি কার্যকর সেবাই পারে একটি সুন্দর ও মানবিক সমাজ গড়ে তুলতে।'}
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {'একটি ন্যায়ভিত্তিক, নিরাপদ ও মানবিক সমাজ গড়ে তোলা—যেখানে অন্যায়ের কোনো স্থান থাকবে না এবং প্রতিটি মানুষ সম্মান ও সহযোগিতা পাবে।\nআমরা এমন একটি সমাজ কল্পনা করি, যেখানে তরুণ প্রজন্ম ইতিবাচক কর্মকাণ্ডে সম্পৃক্ত থাকবে, অপরাধ ও সহিংসতা থেকে দূরে থাকবে এবং নৈতিক মূল্যবোধে সমৃদ্ধ হবে।\nপ্রতিবাদ ও মানবিক উদ্যোগের সমন্বয়ের মাধ্যমে আমরা দীর্ঘমেয়াদী সামাজিক পরিবর্তন আনতে চাই এবং ভবিষ্যৎ প্রজন্মের জন্য একটি শক্তিশালী, সচেতন ও দায়িত্বশীল বাংলাদেশ গড়ে তুলতে অঙ্গীকারবদ্ধ।'}
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                Our Values
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {'১. ন্যায় ও সাহস (Justice & Courage)\nআমরা অন্যায়, অপরাধ ও সামাজিক অবক্ষয়ের বিরুদ্ধে নির্ভয়ে কথা বলি এবং সত্যের পক্ষে দৃঢ় থাকি।\n२. মানবিকতা (Humanity)\nমানুষের দুঃখে পাশে দাঁড়ানো আমাদের প্রধান দায়িত্ব। খাদ্য, বস্ত্র, চিকিৎসা ও সহায়তার মাধ্যমে আমরা মানবিকতার চর্চা করি।\n३. সততা ও স্বচ্ছতা (Integrity & Transparency)\nসংগঠনের প্রতিটি কার্যক্রমে সততা, জবাবদিহিতা ও স্বচ্ছতা বজায় রাখা আমাদের অঙ্গীকার।\n४. ঐক্য ও সহযোগিতা (Unity & Teamwork)\nসমাজ পরিবর্তনের জন্য সম্মিলিত প্রচেষ্টা প্রয়োজন। আমরা একসাথে কাজ করি এবং পারস্পরিক সহযোগিতাকে গুরুত্ব দিই।\n५. দায়িত্বশীল নেতৃত্ব (Responsible Leadership)\nতরুণদের নৈতিক, সামাজিক ও নেতৃত্বগুণে গড়ে তোলা আমাদের অন্যতম লক্ষ্য।\n६. ধর্মীয় ও নৈতিক মূল্যবোধ (Moral & Spiritual Values)\nআমরা নৈতিকতা, শৃঙ্খলা ও ধর্মীয় মূল্যবোধকে সম্মান করি এবং সমাজে ইতিবাচক প্রভাব তৈরিতে কাজ করি।\n७. সেবা ও ত্যাগের মানসিকতা (Service & Sacrifice)\nব্যক্তিগত স্বার্থের ঊর্ধ্বে উঠে সমাজের কল্যাণে কাজ করাই আমাদের আদর্শ।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-3">
            <Users className="h-7 w-7 text-accent" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {'কেন প্রতিবাদী কন্ঠতে যোগ দেবেন?'}
            </h2>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "Develop real-world leadership and teamwork skills",
              "Build a professional network with students and industry leaders",
              "Gain hands-on experience in event planning and management",
              "Access exclusive workshops, seminars, and training sessions",
              "Be part of a diverse and welcoming community",
              "Create lasting friendships and unforgettable memories",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Get Involved
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Ready to be part of something meaningful? Check out our upcoming
            events or reach out to one of our team members to learn how to join.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Events
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
