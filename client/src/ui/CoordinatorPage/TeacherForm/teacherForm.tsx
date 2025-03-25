export function TeacherForm() {
  return (
    <div>
      <h1>Professores</h1>
      <form action="">
        <div>
          <label htmlFor="nameAdd">Nome</label>
          <input type="text" id="nameTeacher" name="nameTeacher" />
        </div>

        <div>
          <label htmlFor="emailAdd">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="passwordAdd">Senha</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
