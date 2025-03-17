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

export interface SignUpTeacherProps {
  name: string;
  email: string;
  password: string;
}

export interface SignInTeacherProps {
  email: string;
  password: string;
  keepLogged: boolean;
}
