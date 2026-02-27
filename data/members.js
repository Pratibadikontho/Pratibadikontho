/**
 * ==============================================
 * MEMBERS DATA FILE
 * ==============================================
 *
 * HOW TO ADD A NEW MEMBER:
 * 1. Copy one of the member objects below
 * 2. Paste it at the end of the array (before the closing bracket)
 * 3. Change the values to match the new member
 * 4. Add the member's photo to /public/images/ folder
 * 5. Update the "image" field to point to the new photo
 *
 * IMPORTANT:
 * - The "id" must be unique and URL-friendly (use lowercase and hyphens)
 * - The "id" is used in the URL: /members/[id]
 * - The "image" path starts with /images/
 * ==============================================
 */

export const members = [
  {
    id: "john-doe",
    name: "John Doe",
    position: "President",
    department: "Tourism and Hospitality",
    email: "john@university.edu",
    phone: "+1 234 567 890",
    image: "/images/john.jpg",
    bio: "John is the founding president of the University Club. With a passion for leadership and community building, he has led numerous initiatives that have brought students together from all departments. His vision is to create a vibrant campus culture where every student feels welcomed and empowered to grow both personally and professionally.",
    skills: ["Leadership", "Event Management", "Public Speaking", "Strategic Planning"],
    achievements: [
      "Founded the University Club in 2023",
      "Organized the Annual University Gala with 500+ attendees",
      "Dean's List for Academic Excellence",
      "Best Student Leader Award 2024"
    ]
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    position: "Vice President",
    department: "Computer Science",
    email: "sarah@university.edu",
    phone: "+1 234 567 891",
    image: "/images/sarah.jpg",
    bio: "Sarah is the tech-savvy Vice President who bridges the gap between technology and community engagement. She spearheads the club's digital initiatives and ensures all events run smoothly behind the scenes. Her background in Computer Science brings a unique analytical perspective to the club's operations.",
    skills: ["Web Development", "Project Management", "Data Analysis", "Team Coordination"],
    achievements: [
      "Built the club's official website",
      "Managed a team of 20 volunteers",
      "Won the Hackathon Innovation Award",
      "Published research on student engagement"
    ]
  },
  {
    id: "michael-johnson",
    name: "Michael Johnson",
    position: "Secretary",
    department: "Business Administration",
    email: "michael@university.edu",
    phone: "+1 234 567 892",
    image: "/images/michael.jpg",
    bio: "Michael keeps the club organized and running like clockwork. As Secretary, he manages all documentation, meeting minutes, and communications. His attention to detail and organizational skills ensure that nothing falls through the cracks, making him an indispensable part of the team.",
    skills: ["Organization", "Communication", "Documentation", "Time Management"],
    achievements: [
      "Streamlined club communication channels",
      "Created the member onboarding program",
      "Maintained 100% meeting attendance record",
      "Scholarship recipient for Academic Excellence"
    ]
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    position: "Treasurer",
    department: "Finance and Accounting",
    email: "emily@university.edu",
    phone: "+1 234 567 893",
    image: "/images/emily.jpg",
    bio: "Emily manages the club's finances with precision and transparency. She handles budgeting, sponsorship management, and ensures every dollar is well-spent. Her financial expertise has helped the club secure record funding and organize events that are both impactful and cost-effective.",
    skills: ["Financial Management", "Budgeting", "Sponsorship Relations", "Excel & Analytics"],
    achievements: [
      "Secured $50,000 in sponsorships",
      "Reduced event costs by 30% through strategic planning",
      "Top scorer in Finance departmental exams",
      "Certified in Financial Planning"
    ]
  },
  {
    id: "david-patel",
    name: "David Patel",
    position: "Events Coordinator",
    department: "Marketing",
    email: "david@university.edu",
    phone: "+1 234 567 894",
    image: "/images/david.jpg",
    bio: "David is the creative force behind the club's events. From intimate workshops to large-scale galas, he designs experiences that leave lasting impressions. His marketing background helps him promote events effectively, ensuring maximum participation and engagement from the student body.",
    skills: ["Event Planning", "Marketing", "Creative Design", "Social Media Management"],
    achievements: [
      "Organized 20+ successful events in one year",
      "Grew social media following by 300%",
      "Best Event of the Year Award for Cultural Night",
      "Marketing Excellence Certificate"
    ]
  },
  {
    id: "lisa-wang",
    name: "Lisa Wang",
    position: "Public Relations Officer",
    department: "Communications",
    email: "lisa@university.edu",
    phone: "+1 234 567 895",
    image: "/images/lisa.jpg",
    bio: "Lisa is the voice of the University Club. She manages all external communications, media relations, and brand identity. Her work ensures the club maintains a professional and approachable image both on and off campus. She also coordinates with other university organizations for collaborative events.",
    skills: ["Public Relations", "Content Writing", "Media Relations", "Brand Management"],
    achievements: [
      "Featured the club in 5 media publications",
      "Established partnerships with 10+ organizations",
      "Created the club's brand guidelines",
      "Won Best PR Campaign at the Student Awards"
    ]
  }
];
