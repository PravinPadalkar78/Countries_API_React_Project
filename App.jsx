import CardList from "./components/CardList";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import SelectMenu from "./components/SelectMenu";
import { Outlet } from "react-router";
import Home from "./components/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
      <ThemeProvider>
      <Header/>
      <Outlet/>
      </ThemeProvider>
  );
}

export default App;
