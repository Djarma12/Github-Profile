import { Ref } from "react";

type InputType = {
  searchRef?: Ref<HTMLInputElement>;
  placeholder: string;
};

function Input({ searchRef, placeholder }: InputType) {
  return (
    <input
      className="input"
      type="text"
      ref={searchRef}
      placeholder={placeholder}
    />
  );
}

export default Input;
