export type TeacherUserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type TeacherProviderType = {
  children: React.ReactNode;
};

export type TeacherContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  allTeachers: TeacherUserProps[];
  setAllTeachers: React.Dispatch<React.SetStateAction<TeacherUserProps[]>>;
  teacherId: number;
  setTeacherId: React.Dispatch<React.SetStateAction<number>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  addTeacher: (e: React.FormEvent) => void;
  fetchAllTeachers: () => void;
  fetchTeacher: (id: number) => void;
  deleteTeacher: (id: number) => void;
  updateTeacher: (e: React.FormEvent) => void;
  clearForm: () => void;
};
