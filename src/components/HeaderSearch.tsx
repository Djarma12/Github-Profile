import { FormEvent, useRef } from "react";

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
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="#97A3B6" strokeWidth="2" />
        <path
          d="M20 20L17 17"
          stroke="#97A3B6"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg> */}
      <Input placeholder="username" searchRef={searchRef} />
    </form>
  );
}

export default HeaderSearch;
