export interface Student {
  id: number;
  name: string;
  email: string;
  password: string;
  class_id: number;
  period: "Manhã" | "Tarde" | "Noite";
}

export interface StudentProps {
  student: Student;
  token: string;
}
