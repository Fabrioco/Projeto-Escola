import { PartialType } from "@nestjs/mapped-types";
import { CreateScheduleDto } from "./create-schedule.dto";

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
  startTime?: string | undefined;
  endTime?: string | undefined;
}
