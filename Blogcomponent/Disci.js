"use client";
import { useSearchParams } from "next/navigation";
import style from "./Disci.module.css";

const Discomp = () => {
  const searchparams = useSearchParams();
  const img = searchparams.get("img");
  const name = decodeURIComponent(searchparams.get("title"));
  const des = decodeURIComponent(searchparams.get("des"));

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.imageSection}>
          <img src={img} alt={name} />
        </div>
        <div className={style.content}>
          <h1>{name}</h1>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Discomp;
