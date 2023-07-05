import bg from "/public/bg.webp";
import { Notable } from "next/font/google";

const notable = Notable({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div
      className="relative w-screen h-full bg-no-repeat bg-cover before:content-[''] before:w-full before:h-full before:bg-black before:absolute before:left-0 before:opacity-30 before:-z-5"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* online store */}
        <h1 className={`${notable.className} text-9xl text-center mt-20`}>
          Online Store
        </h1>

        {/* catchphrase */}
        <h2 className="w-3/5 relative text-3xl text-center mt-20 text-white">
          Discover. Shop. Thrive. Your Ultimate Shopping
          Destination!
        </h2>
        {/* cta */}
        <button className="mt-20 p-5 pl-7 pr-7 outline-8 bg-red-300 rounded-2xl" >Browse</button>
      </div>
    </div>
  );
}
