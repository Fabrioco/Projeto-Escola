import { ScheduleProps } from "@/types/SchedulesContextType";
import axios from "axios";
import React from "react";

export function ScheduleForm() {
  const [schedules, setSchedules] = React.useState<ScheduleProps[]>([]);
  const [scheduleId, setScheduleId] = React.useState<number>(0);
  const [selectedScheduleId, setSelectedScheduleId] =
    React.useState<string>("");
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

  const fetchSchedulesById = async (id: string) => {
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
    <div>
      <h1>Agendamentos</h1>
      <select
        name="schedules"
        id="schedules"
        value={selectedScheduleId}
        onChange={(e) => setSelectedScheduleId(e.target.value)}
      >
        <option value="">Selecione o horário</option>
        {schedules.map((schedule) => (
          <option key={schedule.id} value={schedule.id}>
            {schedule.time}
          </option>
        ))}
      </select>

      <form onSubmit={addSchedule}>
        <div>
          <label htmlFor="initialTime">Inicio</label>
          <input
            type="time"
            id="initialTime"
            name="initialTime"
            onChange={(e) => setInitialTime(e.target.value)}
            value={initialTime}
          />
        </div>
        <div>
          <label htmlFor="endTime">Fim</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        {edit ? (
          <div>
            <button type="submit" onClick={updateSchedule}>
              Atualizar
            </button>
            <button type="button" onClick={() => deleteSchedule(scheduleId)}>
              Remover
            </button>
          </div>
        ) : (
          <button type="submit">Cadastrar</button>
        )}
      </form>
    </div>
  );
}
