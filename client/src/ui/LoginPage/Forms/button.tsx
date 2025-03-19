type ButtonProps = {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
};
export function Button({ type, children }: ButtonProps) {
  return (
    <button
      className="w-full rounded-2xl border border-blue-950 bg-blue-950 text-white py-2 cursor-pointer hover:bg-blue-800 hover:scale-101 transition-all active:scale-95 active:bg-white active:text-blue-950 font-semibold text-md uppercase"
      type={type}
    >
      {children}
    </button>
  );
}
