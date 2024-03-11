import { FormEvent, useRef } from "react";
import search from "../assets/SVG/Search.svg";

import Input from "./Input";
import { useGithub } from "../context/GithubProvider";

function HeaderSearch() {
  const { setUserName } = useGithub();
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchRef.current) return;
    setUserName(searchRef.current?.value);
  }

  return (
    <div className="header__search">
      <form onSubmit={handleSubmit} className="header__form">
        <img src={search} alt="Search icon" />
        <Input placeholder="username" searchRef={searchRef} />
      </form>
    </div>
  );
}

export default HeaderSearch;
