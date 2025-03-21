export function DisciplineForm() {
  return (
    <div>
      <h1>Matérias</h1>

      <form action="">
        <div>
          <label htmlFor="nameDiscipline">Nome</label>
          <input type="text" id="nameDiscipline" name="nameDiscipline" />
        </div>

        <div>
          <label htmlFor="grade">Serie</label>
          <input type="text" id="grade" name="grade" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
