import Header from "./components/Header";
import { Layout } from "./components/layout";

function App() {
  return <Layout HeaderComponent={<Header />} MainComponent={null} />;
}

export default App;
