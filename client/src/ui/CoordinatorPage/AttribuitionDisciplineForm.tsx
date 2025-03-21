export function AttributionDisciplineForm() {
  return (
    <div>
      <h1>Atribuir disciplina</h1>

      <form action="">
        <div>
          <label htmlFor="nameTeacher">Professor</label>
          <select name="nameTeacher" id="nameTeacher">
            <option value="" disabled selected>
              Selecione
            </option>
            {/* AQUI EU VOU PEGAR OS PROFESSORES DO BANCO DE DADOS */}
          </select>
        </div>

        <div>
          <label htmlFor="nameClass">Turma</label>
          <select name="nameClass" id="nameClass">
            <option value="" disabled selected>
              Selecione
            </option>
            {/* AQUI EU VOU PEGAR AS SALAS DO BANCO DE DADOS */}
          </select>
        </div>

        <div>
          <label htmlFor="nameDiscipline">Disciplina</label>
          <select name="nameDiscipline" id="nameDiscipline">
            <option value="" disabled selected>
              Selecione uma disciplina
            </option>
            {/* AQUI EU VOU PEGAR AS DISCIPLINAS DO BANCO DE DADOS */}
          </select>
        </div>

        <div>
          <label htmlFor="time">Horário</label>
          <select name="time" id="time">
            <option value="" disabled selected>
              Selecione
            </option>
            {/* AQUI EU VOU PEGAR OS HORARIOS DO BANCO DE DADOS */}
          </select>
        </div>
      </form>
    </div>
  );
}
