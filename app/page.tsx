import GameTable from "./components/gameTable";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col">
        <div className="">
          <GameTable />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
