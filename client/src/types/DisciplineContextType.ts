export type DisciplineProps = {
  id: number;
  name: string;
  grade: string;
};

export type DisciplineContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  grade: string;
  setGrade: React.Dispatch<React.SetStateAction<string>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  disciplines: DisciplineProps[];
  setDisciplines: React.Dispatch<React.SetStateAction<DisciplineProps[]>>;
  addDiscipline: (e: React.FormEvent) => void;
  fetchAllDisciplines: () => void;
  fetchDiscipline: (id: number) => void;
  deleteDiscipline: (id: number) => void;
  updateDiscipline: (e: React.FormEvent) => void;
  clearForm: () => void;
};

export type DisciplineContextProviderProps = {
  children: React.ReactNode;
};
