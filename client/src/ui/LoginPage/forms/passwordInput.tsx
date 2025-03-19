import { Eye } from "@phosphor-icons/react/dist/ssr";

type PasswordInputProps = {
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput({ password, setPassword }: PasswordInputProps) {
  return (
    <div className="w-full flex relative group">
      <label
        htmlFor="password"
        className="absolute top-3 left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm cursor-pointer"
      >
        Senha
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
        value={password}
        onChange={setPassword}
      />
      <Eye
        size={30}
        className="cursor-pointer absolute top-3 right-2"
        color="#162456"
      />
    </div>
  );
}
