import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { StudentsModule } from "./students/students.module";
import { ClassesModule } from "./classes/classes.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoordinatorsModule } from './coordinators/coordinators.module';
import { AuthModule } from './auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';
import { AttributionModule } from './attribution/attribution.module';
import { SchedulesModule } from './schedules/schedules.module';
import { DisciplineModule } from './discipline/discipline.module';
import { NotesModule } from './notes/notes.module';
import { PresencesModule } from './presences/presences.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT !== undefined ? parseInt(process.env.DB_PORT) : 5000,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ["dist/**/*.entity\.ts"],
    }),
    StudentsModule,
    ClassesModule,
    CoordinatorsModule,
    AuthModule,
    TeachersModule,
    AttributionModule,
    SchedulesModule,
    DisciplineModule,
    NotesModule,
    PresencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
