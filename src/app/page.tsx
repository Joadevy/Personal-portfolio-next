import Image from "next/image";
import { Rubik } from "@next/font/google";

import styles from "../../styles/home.module.scss";
import Nav from "../components/Nav/Nav";
import Project from "@/components/ Project/Project";

const rubik = Rubik({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={rubik.className}>
      <Nav />
      <main className={styles.main}>
        <section className={styles.welcomeSection} id="welcome-section">
          <div className={styles["img-container"]}></div>
          <h1>Hey! I&apos;m Joaquín Arlettaz</h1>
          <p>
            An Information Systems Engineering Student passionate about
            technology and teamwork. I&apos;m currently learning web
            technologies to become a better IT professional. You can see my way
            to achieve this goal in{" "}
            <a data-content="my completed projects" href="#projects">
              my completed projects
            </a>
          </p>
        </section>

        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <p>These are some of my projects:</p>

          <Project
            title="To-do por hacer"
            desc="A to-do list app with some extra features."
            webUrl="https://joadevy.github.io/todo-por-hacer/"
            repoUrl="https://github.com/Joadevy/todo-por-hacer"
            img="/icons/todo.webp"
          />

          <Project
            title="Trader or Not?"
            desc="Higher or lower game with cryptocurrency prices."
            webUrl="https://joadevy.github.io/TraderOrNot/"
            repoUrl="https://github.com/Joadevy/TraderOrNot"
            img="/icons/bitcoin.webp"
          />

          <Project
            title="Crowdfunding landing page"
            desc="Interface for an app to collect funds for a project."
            webUrl="https://crowdfunding-product-page-joadevy.vercel.app/"
            repoUrl="https://github.com/Joadevy/crowdfunding-product-page"
            img="/icons/landing.webp"
          />

          <Project
            title="Tic Tac Toe"
            desc="The traditional three-in-line game on the web."
            webUrl="https://joadevy.github.io/Tic-Tac-Toe/"
            repoUrl="https://github.com/Joadevy/Tic-Tac-Toe"
            img="/icons/tictactoe.webp"
          />

          <Project
            title="E-commerce product page"
            desc="UI for e-commerce with built-in cart features."
            webUrl="https://joadevy.github.io/FM-Ecommerce-ProductPage/"
            repoUrl="https://github.com/Joadevy/FM-Ecommerce-ProductPage"
            img="/icons/product.webp"
          />
        </section>
      </main>
      {/* <h2 id={styles["titulo"]}>Hey! Im Joaquin Arlettaz</h2> */}
    </div>
  );
}
