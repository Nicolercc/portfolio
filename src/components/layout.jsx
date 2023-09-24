import Header from "./Header";

export function Layout({ HeaderComponent, MainComponent }) {
  return (
    <div className="px-24 h-screen flex">
      <header className="border-2 border-red-500 grow">{<Header />}</header>
      <main className="border-2 border-yellow-500 grow">{MainComponent}</main>
    </div>
  );
}
