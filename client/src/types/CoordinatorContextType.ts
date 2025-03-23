export type CoordinatorContextProps = {
  fetchClasses: () => void;
  fetchClass: () => void;
  addClass: (e: React.FormEvent) => void;
  editClass: () => void;
  deleteClass: () => void;
  classes: ClassesProps[] | null;
  nameClassId: string;
  setNameClassId: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  grade: string;
  setGrade: React.Dispatch<React.SetStateAction<string>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  edit: {
    add: boolean;
    edit: boolean;
    delete: boolean;
  };
  setEdit: React.Dispatch<
    React.SetStateAction<{
      add: boolean;
      edit: boolean;
      delete: boolean;
    }>
  >;
  setClasses: React.Dispatch<React.SetStateAction<ClassesProps[] | null>>;
};

export type CoordinatorProviderProps = {
  children: React.ReactNode;
};

export type ClassesProps = {
  id: number;
  name: string;
  grade: string;
  period: string;
};
