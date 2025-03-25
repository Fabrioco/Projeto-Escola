"use client";

import { useClassContext } from "@/contexts/classContext";
import { UserProps } from "@/types/AuthContextType";
import { ClassesProps } from "@/types/ClassContextType";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import axios, { AxiosError } from "axios";
import React from "react";

export function StudentForm() {
  const { classes } = useClassContext();

  const [nameStudent, setNameStudent] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [classId, setClassId] = React.useState<string>("");
  const [period, setPeriod] = React.useState<string>("");

  const [students, setStudents] = React.useState<UserProps[]>([]);
  const [classesList, setClassesList] = React.useState<ClassesProps[]>([]);
  const [edit, setEdit] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<number>(0);

  const addStudent = async () => {
    if (!nameStudent || !email || !password || !classId || !period) {
      alert("Preencha todos os campos");
      return;
    }

    await axios
      .post("http://localhost:5000/api/create/student", {
        name: nameStudent,
        email,
        password,
        class_id: classId,
        period,
      })
      .then(() => {
        getAllStudents();
        cleanForm();
        alert("Estudante cadastrado com sucesso");
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const getAllStudents = async () => {
    await axios
      .get("http://localhost:5000/api/student")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const fetchClass = async () => {
    await axios
      .get(`http://localhost:5000/api/class`)
      .then((res) => {
        setClassesList(res.data);
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  React.useEffect(() => {
    getAllStudents();
    fetchClass();
  }, []);

  const handlePullData = async (id: number) => {
    setEdit(true);
    await axios.get(`http://localhost:5000/api/student/${id}`).then((res) => {
      console.log(res.data);
      setUserId(res.data.id);
      setNameStudent(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setClassId(res.data.class_id ? res.data.class_id : "");
      setPeriod(res.data.period);
    });
  };

  const updateStudent = async () => {
    await axios
      .put(`http://localhost:5000/api/student/${userId}`, {
        name: nameStudent,
        email,
        password,
        class_id: classId,
        period,
      })
      .then(() => {
        getAllStudents();
        cleanForm();
        alert("Estudante atualizado com sucesso");
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const deleteStudent = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/student/${id}`)
      .then(() => {
        getAllStudents();
        alert("Estudante deletado com sucesso");
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const cleanForm = () => {
    setNameStudent("");
    setEmail("");
    setPassword("");
    setClassId("");
    setPeriod("");
    setEdit(false);
  };

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
