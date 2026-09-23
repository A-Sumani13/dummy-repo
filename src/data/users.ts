export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export const dummyUsers: User[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Senior Frontend Engineer",
    avatar: "https://i.pravatar.cc/150?u=alex",
    bio: "Passionate about creating accessible and visually stunning user interfaces. Specializes in React and WebGL.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    social: {
      twitter: "@alexrivera",
      github: "alexriv",
      linkedin: "in/alexrivera",
    },
  },
  {
    id: "2",
    name: "Samantha Chen",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?u=sam",
    bio: "Bridging the gap between design and engineering. Lover of typography and minimalist interfaces.",
    skills: ["Figma", "UI/UX", "CSS", "Design Systems"],
    social: {
      twitter: "@samchendesign",
      linkedin: "in/samanthachen",
    },
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Fullstack Developer",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    bio: "Building robust backend systems and connecting them to seamless frontend experiences. Open source contributor.",
    skills: ["Node.js", "PostgreSQL", "React", "Docker"],
    social: {
      github: "mjohnson1990",
      linkedin: "in/marcusj",
    },
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?u=elena",
    bio: "Automating all the things. Ensuring scalable and secure infrastructure for high-traffic applications.",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    social: {
      twitter: "@elenatech",
      github: "erodriguez",
    },
  },
];
