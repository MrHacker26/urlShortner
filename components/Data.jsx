import Link from "next/link";
import React, { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
const Data = (props) => {
  let url = "";

  const [redirect, getRedirect] = useState(false);
  const urlRedirector = () => {
    getRedirect(true);
    setTimeout(() => {
      getRedirect(false);
    }, 3000);
  };
  return (
    <div>
      <div className=" underline text-slate-200 font-bold text-center bg-green-600 mt-4 p-2 rounded shadow-2xl text-lg flex items-center justify-center space-x-1">
        <Link href={`https://www.short.ly/${props.Val}`} target="_blank">
          short.ly/{props.Val}
        </Link>
        <RiExternalLinkLine onClick={urlRedirector} size={24} />
      </div>
      {redirect && <div className="mt-4 text-lg">Redirecting to.....{props[props.Val]}</div>}
    </div>
  );
};

export default Data;
