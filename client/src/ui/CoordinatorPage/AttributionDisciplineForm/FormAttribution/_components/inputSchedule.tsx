import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { useScheduleContext } from "@/contexts/scheduleContext";

export function InputSchedule() {
  const { timeId, setTimeId } = useAttributionDisciplineContext();
  const { schedules } = useScheduleContext();
  return (
    <div>
      <label htmlFor="time">Horário</label>
      <select
        name="time"
        id="time"
        value={timeId}
        onChange={(e) => setTimeId(e.target.value)}
      >
        <option value="" disabled selected>
          Selecione
        </option>
        {schedules &&
          schedules.map((s) => (
            <option key={s.id} value={s.id}>
              {s.time}
            </option>
          ))}
      </select>
    </div>
  );
}
