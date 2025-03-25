"use client";

import { useClassContext } from "@/contexts/classContext";
import { useStudentContext } from "@/contexts/studentContext";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export function StudentForm() {
  const { classes } = useClassContext();
  const {
    addStudent,
    nameStudent,
    setNameStudent,
    email,
    setEmail,
    password,
    setPassword,
    classId,
    setClassId,
    period,
    setPeriod,
    students,
    edit,
    deleteStudent,
    handlePullData,
    updateStudent,
    cleanForm,
    classesList,
  } = useStudentContext();

  return (
    <div>
      <h1>Estudantes</h1>
      <form action="">
        <div>
          <label htmlFor="nameStudent">Nome</label>
          <input
            type="text"
            id="nameStudent"
            name="nameStudent"
            value={nameStudent}
            onChange={(e) => setNameStudent(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailStudent">Email</label>
          <input
            type="email"
            id="emailStudent"
            name="emailStudent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordStudent">Senha</label>
          <input
            type="password"
            id="passwordStudent"
            name="passwordStudent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={edit}
            className="disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="classStudent">Turma</label>
          <select
            name="classStudent"
            id="classStudent"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          >
            <option value="">Selecione</option>
            {classes &&
              classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} - {c.grade}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="periodStudent">Período</label>
          <select
            name="periodStudent"
            id="periodStudent"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>

        <button
          type="button"
          onClick={edit ? () => updateStudent() : addStudent}
        >
          {edit ? "Editar" : "Cadastrar"}
        </button>
      </form>
      <div>
        <button onClick={cleanForm}>Limpar campos</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Turma</th>
            <th>Período</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((s) => (
              <tr key={s.id}>
                <td onClick={() => handlePullData(s.id)}>{s.name}</td>
                <td>{s.email}</td>
                <td>{classesList.find((c) => c.id === s.class_id)?.name}</td>
                <td>{s.period}</td>
                <td>
                  <span onClick={() => deleteStudent(s.id)}>
                    <Trash size={20} weight="bold" />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
