import { useCoordinatorContext } from "@/contexts/coordinatorContext";

export function InputGradeClass() {
  const { grade, setGrade } = useCoordinatorContext();
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numberMatch = inputValue.match(/\d+/g);
    const letterMatch = inputValue.match(/[A-Za-z]+/g);

    const number = numberMatch ? numberMatch[0] : "";
    const letter = letterMatch ? letterMatch[0].toUpperCase() : "";

    const formatted = number && letter ? `${number}° ${letter}` : inputValue;

    setGrade(formatted);
  };

  return (
    <div className="w-full flex relative group">
      <label
        htmlFor="grade"
        className={`absolute left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm cursor-pointer ${
          grade ? "top-0 text-gray-500 text-sm" : "top-3 text-base"
        }`}
      >
        Serie
      </label>
      <input
        type="text"
        id="grade"
        name="grade"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer focus:placeholder:text-gray-500 placeholder:text-gray-500/0"
        placeholder="Ex.: 1° A"
        required
        value={grade}
        onChange={handleGradeChange}
      />
    </div>
  );
}
