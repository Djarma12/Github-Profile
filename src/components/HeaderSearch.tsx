import { FormEvent, useRef } from "react";
import search from "../assets/SVG/Search.svg";

import Input from "./Input";
import { useGithub } from "../context/GithubProvider";

function HeaderSearch() {
  const { setSearch } = useGithub();
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchRef.current) return;
    setSearch(searchRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit} className="header__search">
      <img src={search} alt="Search icon" />
      <Input placeholder="username" searchRef={searchRef} />
    </form>
  );
}

export default HeaderSearch;
