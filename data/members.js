/**
 * ==============================================
 * MEMBERS DATA FILE
 * ==============================================
 *
 * HOW TO ADD A NEW MEMBER:
 * 1. Copy one of the member objects below
 * 2. Paste it at the end of the appropriate array (Advisors or Executive Committee)
 * 3. Change the values to match the new member
 * 4. The "id" must be unique and URL-friendly (use lowercase and hyphens)
 * 5. The "id" is used in the URL: /members/[id]
 *
 * FIELDS:
 * - id:               Unique URL-friendly identifier
 * - name:             Full name
 * - position:         Role / title
 * - category:         "Advisors" or "Executive Committee"
 * - bio:              Short biography (optional)
 * - phone:            Contact phone (optional)
 * - email:            Contact email (optional)
 * - joinedDate:       When they joined (optional)
 * - responsibilities: Array of duties (optional)
 * - quote:            A personal motto or quote (optional)
 * - address:          Home area / location (optional)
 * ==============================================
 */

export const members = [
  /* ===================== ADVISORS ===================== */
  {
    id: "mannan",
    name: "Mannan",
    position: "Advisor",
    category: "Advisors",
    bio: "একজন অভিজ্ঞ উপদেষ্টা যিনি সংগঠনকে সঠিক পথে পরিচালনা করতে সর্বদা সহায়তা করেন।",
    joinedDate: "2023",
    responsibilities: [
      "সংগঠনের কার্যক্রমে পরামর্শ প্রদান",
      "নীতিনির্ধারণী সিদ্ধান্তে সহায়তা",
      "তরুণ সদস্যদের দিকনির্দেশনা প্রদান",
    ],
    quote: "ঐক্যবদ্ধ জনতা অপরাজেয়।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "liton-advisor",
    name: "Liton",
    position: "Advisor",
    category: "Advisors",
    bio: "দীর্ঘদিনের অভিজ্ঞতা নিয়ে সংগঠনের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করছেন।",
    joinedDate: "2023",
    responsibilities: [
      "সাংগঠনিক কাঠামো উন্নয়নে পরামর্শ",
      "বিশেষ অনুষ্ঠান পরিকল্পনায় সহায়তা",
      "সদস্যদের মধ্যে সম্প্রীতি বজায় রাখা",
    ],
    quote: "প্রতিবাদই পরিবর্তনের প্রথম পদক্ষেপ।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "pintu-ahmed",
    name: "Pintu Ahmed",
    position: "Advisor",
    category: "Advisors",
    bio: "সমাজসেবায় নিবেদিতপ্রাণ একজন ব্যক্তি যিনি সংগঠনের প্রতিটি কাজে সক্রিয় অংশগ্রহণ করেন।",
    joinedDate: "2023",
    responsibilities: [
      "আর্থিক পরিকল্পনায় পরামর্শ প্রদান",
      "সামাজিক কর্মকাণ্ডে নেতৃত্ব",
      "বহিঃসংযোগ স্থাপনে সহায়তা",
    ],
    quote: "সমাজের জন্য কাজ করাই সবচেয়ে বড় ইবাদত।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "shahadat",
    name: "Shahadat",
    position: "Advisor",
    category: "Advisors",
    bio: "সংগঠনের প্রতিষ্ঠাকাল থেকেই যুক্ত, অভিজ্ঞতা ও প্রজ্ঞা দিয়ে সকলকে অনুপ্রাণিত করেন।",
    joinedDate: "2023",
    responsibilities: [
      "কৌশলগত পরিকল্পনা প্রণয়ন",
      "সদস্য উন্নয়ন কার্যক্রমে পরামর্শ",
      "সংগঠনের দীর্ঘমেয়াদী লক্ষ্য নির্ধারণ",
    ],
    quote: "জ্ঞানই শক্তি, ঐক্যই মুক্তি।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "joynal-molla",
    name: "Joynal Molla",
    position: "Advisor",
    category: "Advisors",
    bio: "একজন আদর্শবান ব্যক্তি যিনি তরুণ প্রজন্মকে সঠিক পথে পরিচালনা করতে সদা তৎপর।",
    joinedDate: "2023",
    responsibilities: [
      "যুব উন্নয়নে পরামর্শ",
      "সামাজিক সচেতনতা কার্যক্রমে সহায়তা",
      "সংগঠনের ভাবমূর্তি রক্ষায় সহায়তা",
    ],
    quote: "তরুণরাই দেশের ভবিষ্যৎ।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "md-ruhul-amin",
    name: "Md. Ruhul Amin",
    position: "Advisor",
    category: "Advisors",
    bio: "সমাজসেবা ও শিক্ষায় নিবেদিত, সংগঠনের উন্নয়নে সর্বদা অবদান রাখেন।",
    joinedDate: "2023",
    responsibilities: [
      "শিক্ষা বিষয়ক কার্যক্রমে পরামর্শ",
      "সংগঠনের অভ্যন্তরীণ শৃঙ্খলা রক্ষায় সহায়তা",
      "নতুন সদস্য অন্তর্ভুক্তিতে সহায়তা",
    ],
    quote: "শিক্ষার আলো ছড়িয়ে দিতে হবে সবার কাছে।",
    address: "ঢাকা, বাংলাদেশ",
  },

  /* ===================== EXECUTIVE COMMITTEE ===================== */
  {
    id: "haji-md-azim-mia",
    name: "Haji Md. Azim Mia",
    position: "President",
    category: "Executive Committee",
    image: "public/images/azim-mia.jpg",
    bio: "সংগঠনের সভাপতি হিসেবে সমগ্র কার্যক্রম পরিচালনা ও নেতৃত্ব প্রদান করেন। তাঁর দূরদর্শী নেতৃত্বে সংগঠন এগিয়ে যাচ্ছে।",
    joinedDate: "2023",
    responsibilities: [
      "সংগঠনের সকল কার্যক্রম পরিচালনা ও তত্ত্বাবধান",
      "সাধারণ সভা ও বিশেষ সভায় সভাপতিত্ব",
      "সংগঠনের নীতি ও কৌশল নির্ধারণ",
      "বাহ্যিক সংস্থাসমূহের সঙ্গে যোগাযোগ রক্ষা",
    ],
    quote: "ন্যায়ের পথে হাঁটলে পথ কখনো থামে না।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "ismail",
    name: "Ismail",
    position: "Senior Vice President",
    category: "Executive Committee",
    bio: "সভাপতির অনুপস্থিতিতে সংগঠন পরিচালনার দায়িত্ব পালন করেন এবং গুরুত্বপূর্ণ সিদ্ধান্ত গ্রহণে সহায়তা করেন।",
    joinedDate: "2023",
    responsibilities: [
      "সভাপতির অনুপস্থিতিতে দায়িত্ব পালন",
      "কার্যনির্বাহী কমিটির সভা সমন্বয়",
      "বিশেষ প্রকল্পসমূহ তত্ত্বাবধান",
      "সদস্যদের মধ্যে সমন্বয় সাধন",
    ],
    quote: "দায়িত্ব পালনই সত্যিকারের নেতৃত্ব।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "md-liton",
    name: "Md. Liton",
    position: "Vice President",
    category: "Executive Committee",
    bio: "সংগঠনের বিভিন্ন কমিটির কাজ সমন্বয় করেন এবং নেতৃত্বের দ্বিতীয় সারিতে গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
    joinedDate: "2023",
    responsibilities: [
      "উপ-কমিটিসমূহের কাজ সমন্বয়",
      "সদস্য উন্নয়ন কার্যক্রম পরিচালনা",
      "অনুষ্ঠান পরিকল্পনায় সহায়তা",
    ],
    quote: "একসাথে কাজ করলে অসম্ভবও সম্ভব।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "mamun-ahmed",
    name: "Mamun Ahmed",
    position: "General Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের প্রশাসনিক কার্যক্রমের মূল পরিচালক। সকল সভার কার্যবিবরণী সংরক্ষণ ও দৈনন্দিন কার্যক্রম পরিচালনা করেন।",
    joinedDate: "2023",
    responsibilities: [
      "সভার কার্যবিবরণী প্রস্তুত ও সংরক্ষণ",
      "দৈনন্দিন প্রশাসনিক কার্যক্রম পরিচালনা",
      "সদস্যদের সঙ্গে নিয়মিত যোগাযোগ",
      "সংগঠনের নথিপত্র সংরক্ষণ ও ব্যবস্থাপনা",
    ],
    quote: "সুশৃঙ্খল কাজই সাফল্যের চাবিকাঠি।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "md-ripon",
    name: "Md. Ripon",
    position: "Joint General Secretary",
    category: "Executive Committee",
    bio: "সাধারণ সম্পাদকের সহযোগী হিসেবে প্রশাসনিক কাজে গুরুত্বপূর্ণ সহায়তা প্রদান করেন।",
    joinedDate: "2023",
    responsibilities: [
      "সাধারণ সম্পাদকের সহযোগী হিসেবে কাজ",
      "বিশেষ অনুষ্ঠান সমন্বয়",
      "সদস্য তালিকা ব্যবস্থাপনা",
    ],
    quote: "সহযোগিতাই সাফল্যের মূলমন্ত্র।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "mainuddin-rasel",
    name: "Mainuddin Rasel",
    position: "Assistant General Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের বিভিন্ন কাজে সক্রিয়ভাবে অংশগ্রহণ করেন এবং প্রশাসনিক দলকে শক্তিশালী করেন।",
    joinedDate: "2023",
    responsibilities: [
      "প্রশাসনিক কাজে সহায়তা",
      "সদস্যদের অভিযোগ ও পরামর্শ গ্রহণ",
      "অনুষ্ঠান আয়োজনে সক্রিয় ভূমিকা",
    ],
    quote: "ছোট ছোট পদক্ষেপেই বড় পরিবর্তন আসে।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "mahbub-alam-rohan",
    name: "Mahbub Alam Rohan",
    position: "Organizational Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের কাঠামোগত উন্নয়ন ও সদস্য সংগ্রহে নেতৃত্ব প্রদান করেন। সাংগঠনিক শক্তি বৃদ্ধিতে তিনি সর্বদা তৎপর।",
    joinedDate: "2023",
    responsibilities: [
      "সাংগঠনিক কাঠামো পরিকল্পনা ও বাস্তবায়ন",
      "নতুন সদস্য সংগ্রহ ও অন্তর্ভুক্তি",
      "শাখা ও উপ-শাখা সমন্বয়",
      "সদস্যদের প্রশিক্ষণ কার্যক্রম পরিচালনা",
    ],
    quote: "সংগঠনই শক্তি, শক্তিই মুক্তি।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "md-maksud",
    name: "Md. Maksud",
    position: "Assistant Organizational Secretary",
    category: "Executive Committee",
    bio: "সাংগঠনিক সম্পাদকের সহযোগী হিসেবে সদস্য ব্যবস্থাপনা ও সংগঠন বিস্তারে কাজ করেন।",
    joinedDate: "2023",
    responsibilities: [
      "সাংগঠনিক সম্পাদকের সহযোগী হিসেবে কাজ",
      "সদস্য ডাটাবেজ ব্যবস্থাপনা",
      "মাঠ পর্যায়ে সংগঠন শক্তিশালীকরণ",
    ],
    quote: "জনগণের সেবাই আমাদের লক্ষ্য।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "noor-alam",
    name: "Noor Alam",
    position: "Publicity Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের প্রচার ও প্রকাশনা বিভাগ পরিচালনা করেন। সোশ্যাল মিডিয়া ও প্রচারমাধ্যমে সংগঠনের কার্যক্রম তুলে ধরেন।",
    joinedDate: "2023",
    responsibilities: [
      "সংগঠনের প্রচার ও প্রচারণা পরিচালনা",
      "সোশ্যাল মিডিয়া ব্যবস্থাপনা",
      "প্রেস রিলিজ ও বিবৃতি প্রস্তুতি",
      "মিডিয়ার সঙ্গে যোগাযোগ রক্ষা",
    ],
    quote: "সত্য প্রচারেই আসে প্রকৃত শক্তি।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "md-ohid-ullah",
    name: "Md. Ohid Ullah",
    position: "Office Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের অফিস ব্যবস্থাপনা ও দৈনন্দিন কার্যক্রম সুচারুভাবে পরিচালনার দায়িত্ব পালন করেন।",
    joinedDate: "2023",
    responsibilities: [
      "অফিস ব্যবস্থাপনা ও রক্ষণাবেক্ষণ",
      "চিঠিপত্র ও যোগাযোগ ব্যবস্থাপনা",
      "অফিস সরবরাহ ও সম্পদ ব্যবস্থাপনা",
    ],
    quote: "শৃঙ্খলাই সাফল্যের ভিত্তি।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "jasim-uddin",
    name: "Jasim Uddin",
    position: "Religious Affairs Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের ধর্মীয় ও নৈতিক কার্যক্রম পরিচালনা করেন। ধর্মীয় অনুষ্ঠান ও সামাজিক সেবামূলক কাজে নেতৃত্ব দেন।",
    joinedDate: "2023",
    responsibilities: [
      "ধর্মীয় অনুষ্ঠান আয়োজন ও পরিচালনা",
      "সামাজিক সেবা কার্যক্রম সমন্বয়",
      "নৈতিক শিক্ষা কার্যক্রম পরিচালনা",
      "দান ও সদকা কার্যক্রম ব্যবস্থাপনা",
    ],
    quote: "ধর্মের পথে চললে সমাজ হবে সুন্দর।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "hasibur",
    name: "Hasibur Rahman Hridoy",
    position: "Cultural Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের সাংস্কৃতিক কার্যক্রম পরিচালনা করেন। সাংস্কৃতিক অনুষ্ঠান ও সামাজিক সেবামূলক কাজে নেতৃত্ব দেন।",
    joinedDate: "2023",
    responsibilities: [
      "সাংস্কৃতিক অনুষ্ঠান আয়োজন ও পরিচালনা",
      "সামাজিক সেবা কার্যক্রম সমন্বয়",
      "সাংস্কৃতিক শিক্ষা কার্যক্রম পরিচালনা",
      "দান ও সদকা কার্যক্রম ব্যবস্থাপনা",
    ],
    quote: "ধর্মের পথে চললে সমাজ হবে সুন্দর।",
    address: "ঢাকা, বাংলাদেশ",
  },
  {
    id: "forruk",
    name: "Forrukh Ahmed Sumon",
    position: "Social Wellfare Secretary",
    category: "Executive Committee",
    bio: "সংগঠনের সাংস্কৃতিক কার্যক্রম পরিচালনা করেন। সাংস্কৃতিক অনুষ্ঠান ও সামাজিক সেবামূলক কাজে নেতৃত্ব দেন।",
    joinedDate: "2023",
    responsibilities: [
      "সাংস্কৃতিক অনুষ্ঠান আয়োজন ও পরিচালনা",
      "সামাজিক সেবা কার্যক্রম সমন্বয়",
      "সাংস্কৃতিক শিক্ষা কার্যক্রম পরিচালনা",
      "দান ও সদকা কার্যক্রম ব্যবস্থাপনা",
    ],
    quote: "ধর্মের পথে চললে সমাজ হবে সুন্দর।",
    address: "ঢাকা, বাংলাদেশ",
  },
];
