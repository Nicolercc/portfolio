import Header from "./components/Header";
import { Layout } from "./components/Layout";
import { Main } from "./components/main";

function App() {
  return <Layout HeaderComponent={<Header />} MainComponent={<Main />} />;
}

export default App;
