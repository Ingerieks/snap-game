import Image from "next/image";
import Cards from "./components/getCards";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <div className="">
          <Cards />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
