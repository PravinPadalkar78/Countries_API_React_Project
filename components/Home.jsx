import {  useEffect, useState } from "react";
import CardList from "./CardList";
import SearchFilter from "./SearchFilter";
import SelectMenu from "./SelectMenu";
import { useWindowsize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme()
//  const [windowSize,setWindowSize]=useWindowsize()

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchFilter setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* <h1 style={{ textAlign: "center" }}>
        {windowSize.width}X{windowSize.height}{" "}
      </h1> */}
      <CardList query={query} />
    </main>
  );
}
