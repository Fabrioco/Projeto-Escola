export type ScheduleProps = {
  id: number;
  time: string;
};

export type SchedulesContextType = {
  addSchedule: (e: React.FormEvent) => void;
  fetchAllSchedules: () => void;
  fetchSchedulesById: (id: string) => void;
  updateSchedule: (e: React.FormEvent) => void;
  deleteSchedule: (id: number) => void;
  schedules: ScheduleProps[];
  setSchedules: React.Dispatch<React.SetStateAction<ScheduleProps[]>>;
  scheduleId: number;
  setScheduleId: React.Dispatch<React.SetStateAction<number>>;
  selectedScheduleId: string;
  setSelectedScheduleId: React.Dispatch<React.SetStateAction<string>>;
  initialTime: string;
  setInitialTime: React.Dispatch<React.SetStateAction<string>>;
  endTime: string;
  setEndTime: React.Dispatch<React.SetStateAction<string>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ScheduleProviderProps = {
  children: React.ReactNode;
};
