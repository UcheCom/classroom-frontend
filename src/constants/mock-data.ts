import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "An introductory course covering the fundamental concepts of computing and programming.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced study of integration, series, and multivariable calculus.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS101",
    name: "General Physics I",
    department: "Physics",
    description: "Mechanics, heat, and sound for students in science and engineering.",
    createdAt: new Date().toISOString(),
  },
];
