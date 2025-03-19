export function KeepLogged() {
  return (
    <div className="flex flex-row items-center justify-between gap-2 w-full">
      <label htmlFor="remember">Manter Conectado?</label>
      <input
        type="radio"
        name="remember"
        id="remember"
        className="cursor-pointer w-7 h-7"
      />
    </div>
  );
}
