import { UserProps } from "@/types/AuthContextType";
import { Trash } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";

export function CoordinatorForm() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [allCoordinator, setAllCoordinator] = React.useState<UserProps[]>([]);
  const [edit, setEdit] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);

  const addCoordinator = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/create/coordinator", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
        clearForm();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const fetchAllCoordinator = async () => {
    await axios
      .get("http://localhost:5000/api/coordinator")
      .then((res) => {
        console.log(res.data);
        setAllCoordinator(
          res.data.sort((a: UserProps, b: UserProps) => a.id - b.id)
        );
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const fetchCoordinator = async (id: number) => {
    setId(id);
    await axios
      .get(`http://localhost:5000/api/coordinator/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setEdit(true);
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const updateCoordinator = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/coordinator/${id}`, {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
        setEdit(false);
        clearForm();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const deleteCoordinator = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/coordinator/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        }
      });
  };

  React.useEffect(() => {
    fetchAllCoordinator();
  }, []);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setEdit(false);
  };
  return (
    <div>
      <h1>Coordenadores</h1>
      <form action="" onSubmit={edit ? updateCoordinator : addCoordinator}>
        <div>
          <label htmlFor="nameCoordinator">Nome</label>
          <input
            type="text"
            id="nameCoordinator"
            name="nameCoordinator"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailCoordinator">Email</label>
          <input
            type="email"
            id="emailCoordinator"
            name="emailCoordinator"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordCoordinator">Senha</label>
          <input
            type="password"
            id="passwordCoordinator"
            name="passwordCoordinator"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={edit}
            className="disabled:cursor-not-allowed"
          />
        </div>

        <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>
      </form>
      <button type="button" onClick={clearForm}>
        limpar
      </button>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allCoordinator &&
            allCoordinator.map((coordinator) => (
              <tr key={coordinator.id}>
                <td onClick={() => fetchCoordinator(coordinator.id)}>
                  {coordinator.name}
                </td>
                <td>{coordinator.email}</td>
                <td>
                  <Trash
                    size={20}
                    weight="bold"
                    onClick={() => deleteCoordinator(coordinator.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
