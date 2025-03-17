export interface signInStudentsProps {
  email: string;
  password: string;
  keepLogged: boolean;
}

export interface SignUpStudentProps {
  name: string;
  email: string;
  password: string;
  class_id: number;
  period: string;
}
