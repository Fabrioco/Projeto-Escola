import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  return (
    <div className="bg-[url('/school.webp')] bg-cover w-full h-full">
      <div>
        <div>
          <h1>Bem vindo à E. E. João Paulo II</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            laborum molestias sit dignissimos consequuntur tenetur dolorem
            deleniti odio. Maiores atque quam in libero animi ut voluptatum ea,
            omnis provident excepturi?
          </p>
        </div>
        <div>
          <h2>Nos siga nas nossas redes sociais!</h2>
          <div>
            <span>
              <InstagramLogo size={32} color="#162456" />
            </span>
            <span>
              <FacebookLogo size={32} color="#162456" />
            </span>
            <span>
              <XLogo size={32} color="#162456" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
