import { LoginForm } from "@/ui/LoginPage/forms";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-around items-center gap-4 justify-center w-full h-full py-4">
      <Image
        src="/login.png"
        alt="logo"
        width={300}
        height={300}
        className="mb-4 drop-shadow-2xl shadow-blue-950 xl:w-1/3"
      />
      <div className="flex flex-col items-center justify-around bg-white w-11/12 md:w-1/2 xl:w-1/3 min-h-[400px] rounded-xl border border-blue-950 shadow-md">
        <h1 className="text-2xl font-semibold uppercase text-blue-950">
          Bem vindo de volta
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
