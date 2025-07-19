"use client";
import { useRouter } from "next/navigation";
import style from "./Home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={style.home}>
      <div className={style.content}>
        <h1 className={style.title}>Discover the Magic of Cinema</h1>
      <p className={style.subtitle}>Choose your role to begin your journey</p>
        <div className={style.buttons}>
          <button onClick={() => router.push("/userlogin")}>User</button>
          <button onClick={() => router.push("/adminlogin")}>Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
