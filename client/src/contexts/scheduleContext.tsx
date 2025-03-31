import {
  ScheduleProps,
  ScheduleProviderProps,
  SchedulesContextType,
} from "@/types/SchedulesContextType";
import axios from "axios";
import React from "react";

const ScheduleContext = React.createContext<SchedulesContextType | null>(null);

export const ScheduleProvider: React.FC<ScheduleProviderProps> = ({
  children,
}) => {
  const [schedules, setSchedules] = React.useState<ScheduleProps[]>([]);
  const [scheduleId, setScheduleId] = React.useState<number>(0);
  const [selectedScheduleId, setSelectedScheduleId] =
    React.useState<number>(0);
  const [initialTime, setInitialTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");
  const [edit, setEdit] = React.useState<boolean>(false);

  const addSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = `${initialTime} - ${endTime}`;

    await axios
      .post("http://localhost:5000/api/schedule", { time })
      .then((res) => {
        console.log(res);
        fetchAllSchedules();
        setInitialTime("");
        setEndTime("");
      })
      .catch((error) => console.log(error));
  };

  const fetchAllSchedules = async () => {
    await axios
      .get("http://localhost:5000/api/schedule")
      .then((res) => {
        setSchedules(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchSchedulesById = async (id: number) => {
    await axios
      .get(`http://localhost:5000/api/schedule/${id}`)
      .then((res) => {
        const time = res.data.time.split(" - ");
        console.log(time[0], time[1]);
        setInitialTime(time[0]);
        setEndTime(time[1]);
        setEdit(true);
      })
      .catch((error) => console.log(error));
  };

  const updateSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = `${initialTime} - ${endTime}`;
    console.log(time);
    await axios
      .put(`http://localhost:5000/api/schedule/${scheduleId}`, { time })
      .then((res) => {
        console.log(res.data);
        fetchAllSchedules();
        setInitialTime("");
        setEndTime("");
        setEdit(false);
        fetchAllSchedules();
      })
      .catch((error) => console.log(error));
  };

  const deleteSchedule = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/schedule/${id}`)
      .then(() => fetchAllSchedules())
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchSchedulesById(selectedScheduleId);
    if (!selectedScheduleId) {
      setEdit(false);
    }
  }, [selectedScheduleId]);

  React.useEffect(() => {
    fetchAllSchedules();
  }, []);
  return (
    <ScheduleContext.Provider
      value={{
        schedules,
        scheduleId,
        selectedScheduleId,
        initialTime,
        endTime,
        edit,
        setScheduleId,
        setSelectedScheduleId,
        setInitialTime,
        setEndTime,
        addSchedule,
        updateSchedule,
        deleteSchedule,
        fetchAllSchedules,
        fetchSchedulesById,
        setEdit,
        setSchedules,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export const useScheduleContext = () => {
  const context = React.useContext(ScheduleContext);
  if (!context) {
    throw new Error(
      "useScheduleContext deve ser usado dentro do ScheduleProvider"
    );
  }
  return context;
};
