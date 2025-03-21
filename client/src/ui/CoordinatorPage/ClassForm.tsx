export function ClassForm() {
  return (
    <div>
      <h1>Turmas</h1>
      <div>
        <input type="text" placeholder="Pesquisar" />
        <button>Adicionar</button>
        <button>Editar</button>
        <button>Remover</button>
      </div>

      <form>
        <div>
          <label htmlFor="nameClass">Nome da sala</label>
          <input type="text" id="nameClass" name="nameClass" required />
        </div>

        <div>
          <label htmlFor="grade">Serie</label>
          <input type="text" id="grade" name="grade" required />
        </div>

        <div>
          <label htmlFor="period">Período</label>
          <input type="text" id="period" name="period" required />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
