export function CoordinatorForm() {
  return (
    <div>
      <h1>Coordenadores</h1>
      <form action="">
        <div>
          <label htmlFor="nameCoordinator">Nome</label>
          <input type="text" id="nameCoordinator" name="nameCoordinator" />
        </div>

        <div>
          <label htmlFor="emailCoordinator">Email</label>
          <input type="email" id="emailCoordinator" name="emailCoordinator" />
        </div>

        <div>
          <label htmlFor="passwordCoordinator">Senha</label>
          <input
            type="password"
            id="passwordCoordinator"
            name="passwordCoordinator"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
