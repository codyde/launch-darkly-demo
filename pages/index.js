import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Info from "../components/info.js";
import Nav from "../components/Nav.js";
import Grids from "../components/grid.js";
import "semantic-ui-css/semantic.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <Info />
        <Grids />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
