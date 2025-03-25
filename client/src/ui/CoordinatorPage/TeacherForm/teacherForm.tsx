import { useTeacherContext } from "@/contexts/teacherContext";
import { Trash } from "@phosphor-icons/react";
import React from "react";

export function TeacherForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    allTeachers,
    edit,
    setEdit,
    addTeacher,
    fetchTeacher,
    deleteTeacher,
    updateTeacher,
    clearForm,
  } = useTeacherContext();

  return (
    <div>
      <h1>Professores</h1>
      <form action="" onSubmit={edit ? updateTeacher : addTeacher}>
        <div>
          <label htmlFor="nameAdd">Nome</label>
          <input
            type="text"
            id="nameTeacher"
            name="nameTeacher"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailAdd">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordAdd">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={edit}
            className="disabled:cursor-not-allowed"
          />
        </div>

        <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>
      </form>

      <div>
        <button onClick={clearForm} type="button">
          Limpar
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allTeachers &&
            allTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td
                  onClick={() => {
                    fetchTeacher(teacher.id);
                    setEdit(true);
                  }}
                >
                  {teacher.name}
                </td>
                <td>{teacher.email}</td>
                <td>
                  <Trash
                    onClick={() => deleteTeacher(teacher.id)}
                    size={20}
                    weight="bold"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
