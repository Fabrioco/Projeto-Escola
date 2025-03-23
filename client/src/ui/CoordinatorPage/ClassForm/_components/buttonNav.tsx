type ButtonNavProps = {
  title: string;
  onclick?: (e: React.MouseEvent) => void;
};

export function ButtonNav({ title, onclick }: ButtonNavProps) {
  return (
    <button
      className={`bg-blue-950 text-white px-4 py-2 rounded-md border border-blue-950 hover:bg-blue-800 hover:scale-101 transition-all active:scale-95 duration-75 active:bg-white active:text-blue-950 cursor-pointer`}
      type="button"
      onClick={onclick}
    >
      {title}
    </button>
  );
}


// onClick={() => {
    
//   }}

// onClick={() => {
//     setEdit({ add: false, edit: false, delete: true });
//     selectClassRef.current?.focus();
//   }}
