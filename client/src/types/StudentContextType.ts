import { ReactNode } from "react";
import { UserProps } from "./AuthContextType";
import { ClassesProps } from "./ClassContextType";

export type StudentContextType = {
  nameStudent: string;
  setNameStudent: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  classId: string;
  setClassId: React.Dispatch<React.SetStateAction<string>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  students: UserProps[];
  setStudents: React.Dispatch<React.SetStateAction<UserProps[]>>;
  classesList: ClassesProps[];
  setClassesList: React.Dispatch<React.SetStateAction<ClassesProps[]>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  addStudent: () => void;
  getAllStudents: () => void;
  fetchClass: () => void;
  deleteStudent: (id: number) => void;
  handlePullData: (id: number) => void;
  updateStudent: () => void;
  cleanForm: () => void;
};

export type StudentProviderType = { children: ReactNode };
