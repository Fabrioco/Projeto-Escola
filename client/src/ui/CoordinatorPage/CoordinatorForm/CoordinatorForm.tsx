import axios from "axios";
import React from "react";

export function CoordinatorForm() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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

  React.useEffect(() => {
    fetchAllCoordinator();
  });

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Coordenadores</h1>
      <form action="" onSubmit={addCoordinator}>
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
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
      <button type="button" onClick={clearForm}>
        limpar
      </button>
    </div>
  );
}
