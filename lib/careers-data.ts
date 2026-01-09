export interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  workArrangement: "Remote" | "On-site" | "Hybrid";
  description: string;
  requirements: string[];
  responsibilities: string[];
  qualifications?: string[];
  department?: string;
  experienceLevel?: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: "business-development-intern",
    title: "Business Development Intern",
    type: "Internship",
    location: "Ankara, Turkey",
    workArrangement: "Hybrid",
    description: "Drive growth through strategic partnerships and market development in autonomous systems.",
    requirements: [
      "Currently pursuing or recently completed a degree in Business Administration, Engineering, or related field",
      "Strong interest in defense technology and autonomous systems",
      "Excellent communication and presentation skills in English and Turkish",
      "Ability to analyze market trends and identify business opportunities",
      "Self-motivated with strong organizational skills"
    ],
    responsibilities: [
      "Identify and research potential strategic partners in defense, industrial, and agricultural sectors",
      "Support preparation of business proposals and partnership presentations",
      "Assist in market analysis and competitive landscape research",
      "Participate in client meetings and partnership discussions",
      "Contribute to business development strategy and planning",
      "Help maintain CRM systems and track partnership pipeline"
    ],
    qualifications: [
      "Previous internship experience in business development or sales is a plus",
      "Familiarity with the Turkish defense or aerospace industry preferred",
      "Proficiency in Microsoft Office Suite and data analysis tools"
    ],
    department: "Business Development",
    experienceLevel: "Entry Level"
  },
  {
    id: "software-engineering-intern",
    title: "Software Engineering Intern",
    type: "Internship",
    location: "Ankara, Turkey",
    workArrangement: "Hybrid",
    description: "Develop autonomous flight control algorithms and software for next-generation UAV platforms.",
    requirements: [
      "Currently pursuing or recently completed a degree in Computer Science, Electrical Engineering, Aerospace Engineering, or related field",
      "Strong programming skills in Python, C++, or similar languages",
      "Understanding of control systems, robotics, or autonomous systems",
      "Familiarity with software development best practices and version control (Git)",
      "Problem-solving mindset and ability to work in a fast-paced environment"
    ],
    responsibilities: [
      "Contribute to development of autonomous flight control software for MEDUSA and OSKİ platforms",
      "Implement and test guidance, navigation, and control algorithms",
      "Assist with ground station software development and mission planning tools",
      "Participate in hardware-in-the-loop testing and field trials",
      "Collaborate with aerospace engineers on system integration",
      "Document code and contribute to technical documentation"
    ],
    qualifications: [
      "Experience with ROS, PX4, ArduPilot, or similar robotics frameworks is a plus",
      "Knowledge of computer vision, sensor fusion, or machine learning preferred",
      "Previous project experience with drones, robotics, or embedded systems"
    ],
    department: "Engineering",
    experienceLevel: "Entry Level"
  }
];
