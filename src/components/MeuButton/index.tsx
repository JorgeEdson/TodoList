import React from "react";
import { useState } from "react";
import { ReactNode, FocusEvent } from "react";

interface IMeuButton {
  children: ReactNode;
  MeuOnClick: () => void;
}

function MeuButton({ children, MeuOnClick }: IMeuButton) {
  return (
    <>
      <button
        className="p-[10px] w-20 font-bold rounded-md text-white bg-slate-600 hover:bg-slate-700 duration-150"
        onClick={MeuOnClick}
      >
        {children}
      </button>
    </>
  );
}

export default MeuButton;
