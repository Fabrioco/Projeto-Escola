export function StudentForm() {
  return (
    <div>
      <h1>Estudantes</h1>
      <form action="">
        <div>
          <label htmlFor="nameStudent">Nome</label>
          <input type="text" id="nameStudent" name="nameStudent" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>

        <div>
          <label htmlFor="class">Turma</label>
          <select name="class" id="class">
            <option value="" disabled selected>
              Selecione
            </option>
            {/* AQUI EU VOU PEGAR AS SALAS DO BANCO DE DADOS */}
          </select>
        </div>

        <div>
          <label htmlFor="period">Período</label>
          <select name="period" id="period">
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </div>
      </form>
    </div>
  );
}
