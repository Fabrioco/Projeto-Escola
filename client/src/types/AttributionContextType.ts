export type AttributionContextType = {
  fetchAllAttributions: () => Promise<void>;
  allAttributions: AttributionPropsType[];
  addAttribution: (e: React.FormEvent) => Promise<void>;
  fetchAttribution: (id: number) => Promise<void>;
  updateAttribution: (e: React.FormEvent) => Promise<void>;
  deleteAttribution: (id: number) => Promise<void>;
  teacherId: string;
  setTeacherId: React.Dispatch<React.SetStateAction<string>>;
  classId: string;
  setClassId: React.Dispatch<React.SetStateAction<string>>;
  disciplineId: string;
  setDisciplineId: React.Dispatch<React.SetStateAction<string>>;
  timeId: string;
  setTimeId: React.Dispatch<React.SetStateAction<string>>;
  edit: boolean;
};

export type AttributionProviderType = {
  children: React.ReactNode;
};

export type AttributionPropsType = {
  id: number;
  teacher_id: number;
  class_id: number;
  discipline_id: number;
  time_id: number;
};
