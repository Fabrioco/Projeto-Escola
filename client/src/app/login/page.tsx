import { Eye } from "@phosphor-icons/react/dist/ssr";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-around bg-white w-11/12 min-h-[400px] rounded-xl border border-blue-950 shadow-md">
        <h1 className="text-2xl font-semibold uppercase">Bem vindo de volta</h1>
        <form action="" className="w-full flex flex-col gap-2 items-center">
          <div className="w-10/12 flex relative border border-blue-950 rounded-2xl group">
            <label
              htmlFor="email"
              className="absolute top-3 left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-full focus:outline-none px-2 py-4"
            />
          </div>

          <div className="w-10/12 flex relative border border-blue-950 rounded-2xl group">
            <label
              htmlFor="password"
              className="absolute top-3 left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm"
            >
              Senha
            </label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full h-full focus:outline-none px-2 py-4"
              />
              <Eye size={30} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
