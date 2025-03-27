import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[url('/images/school.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full p-2">
      <div className="flex flex-col items-center justify-evenly h-full min-h-[400px] md:justify-center md:gap-10 lg:flex-row lg:justify-around">
        <div className="bg-white/70 p-4 rounded-xl w-11/12 border border-blue-950 shadow-md lg:w-1/2">
          <h1 className="text-2xl font-semibold uppercase text-blue-950">
            Bem vindo à E. E. João Paulo II
          </h1>
          <p className="text-sm mt-2 text-justify md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            laborum molestias sit dignissimos consequuntur tenetur dolorem
            deleniti odio. Maiores atque quam in libero animi ut voluptatum ea,
            omnis provident excepturi?
          </p>
          <div className="flex flex-col items-end mt-4 lg:flex-row lg:gap-4 lg:items-center">
            <p>Para fazer login clique aqui</p>
            <Link
              href="/login"
              className="text-white bg-blue-950 py-2 px-4 uppercase rounded-md active:scale-95 active:bg-white active:text-blue-950 hover:bg-blue-800 hover:scale-101 transition-all duration-75 cursor-pointer"
            >
              Entrar
            </Link>
          </div>
        </div>

        <div className="bg-white/70 text-blue-950 p-4 rounded-xl w-11/12 border border-blue-950 shadow-md lg:w-1/2 flex flex-col gap-4 items-end xl:w-fit">
          <h2 className="text-2xl font-semibold">
            Nos siga nas nossas redes sociais!
          </h2>
          <div className="flex gap-4">
            <span>
              <Link
                href="https://www.instagram.com/eejoaopaulo2/"
                target="_blank"
              >
                <InstagramLogo size={32} color="#162456" />
              </Link>
            </span>
            <span>
              <Link
                href="https://www.facebook.com/eejoaopaulo2/"
                target="_blank"
              >
                <FacebookLogo size={32} color="#162456" />
              </Link>
            </span>
            <span>
              <Link
                href="https://www.instagram.com/eejoaopaulo2/"
                target="_blank"
              >
                <XLogo size={32} color="#162456" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
