import Header from "./Header";

export function Layout({ HeaderComponent, MainComponent }) {
  return (
    <div className="px-24 h-screen flex">
      <header className="lg:sticky gitborder-2 border-red-500 w-1/2 px-5">
        {HeaderComponent}
      </header>
      <main className="border-2 border-yellow-500 w-1/2 px-5">
        {MainComponent}
      </main>
    </div>
  );
}
