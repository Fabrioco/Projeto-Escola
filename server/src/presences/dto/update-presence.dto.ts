import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenceDto } from './create-presence.dto';

export class UpdatePresenceDto extends PartialType(CreatePresenceDto) {
    student_id?: number | undefined;
    teacher_id?: number | undefined;
    discipline_id?: number | undefined;
    date?: Date | undefined;
    presence?: boolean | undefined;
}
