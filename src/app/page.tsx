import { Rubik } from "@next/font/google";

import styles from "../../styles/home.module.scss";
import Nav from "../components/Nav/Nav";
import Project from "@/components/Project/Project";
import SocialLink from "@/components/SocialLink/SocialLink";
import Chat from "@/components/Chat/Chat";
import HoverImage from "@/components/HoverImage/HoverImage";
import staticProfileImg from "../../public/photos/profile-static.webp";
import hoverProfileImg from "../../public/photos/profile-hover.webp";

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
          <HoverImage src={staticProfileImg} hoverSrc={hoverProfileImg} />
          <div className={styles.heroText}>
            <h1>Hey! I&apos;m Joaquín Arlettaz</h1>
            <p>
              An Information Systems Engineering Student passionate about
              technology and teamwork. I&apos;m currently learning web
              technologies to become a better IT professional. You can{" "}
              <a data-content="know more about me" href="#knowMore">
                know more about me
              </a>{" "}
              or see my way to achieve my goal in{" "}
              <a data-content="my completed projects" href="#projects">
                my completed projects
              </a>
              .
            </p>
          </div>
        </section>

        <section id="knowMore" className={styles.projects}>
          <h2>Know something more</h2>
          <p>
            Chat with me (or maybe not really me? Who knows...) and get more
            details:
          </p>

          <Chat></Chat>
        </section>

        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <p>These are some of my projects:</p>

          <Project
            title="Informovies"
            desc="Movies & series: all the information you'd want to know."
            webUrl="https://informovies.vercel.app/"
            repoUrl="https://github.com/Joadevy/Informovies"
            img="/icons/movie.webp"
          />

          <Project
            title="Sintaxiscript Interpreter"
            desc="Interpreter for a custom programming language built in typescript."
            webUrl="https://joadevy.github.io/Interpreter-sintaxiscript/"
            repoUrl="https://github.com/Joadevy/Interpreter-sintaxiscript"
            img="/icons/interpreter.webp"
          />

          <Project
            title="Crowdfunding landing page"
            desc="Interface for an app to collect funds for a project."
            webUrl="https://crowdfunding-product-page-joadevy.vercel.app/"
            repoUrl="https://github.com/Joadevy/crowdfunding-product-page"
            img="/icons/landing.webp"
          />

          <Project
            title="Where in the world?"
            desc="Country searcher app to look for details of each one."
            webUrl="https://where-world-app.vercel.app/"
            repoUrl="https://github.com/Joadevy/where-world-app"
            img="/icons/search.webp"
          />

          <Project
            title="Adviency"
            desc="Christmas gift-list app with some extra features."
            webUrl="https://adviency-joadevy.vercel.app/"
            repoUrl="https://github.com/Joadevy/adviency"
            img="/icons/giftList.webp"
          />

          <Project
            title="Trader or Not?"
            desc="Higher or lower game with cryptocurrency prices."
            webUrl="https://joadevy.github.io/TraderOrNot/"
            repoUrl="https://github.com/Joadevy/TraderOrNot"
            img="/icons/bitcoin.webp"
          />

          <Project
            title="E-commerce product page"
            desc="UI for e-commerce with built-in cart features."
            webUrl="https://joadevy.github.io/FM-Ecommerce-ProductPage/"
            repoUrl="https://github.com/Joadevy/FM-Ecommerce-ProductPage"
            img="/icons/product.webp"
          />
        </section>

        <section id="code" className={styles.code}>
          <h2>Code</h2>
          <p>See more about my projects and experiments on:</p>
          <ul className={styles.linksContainer}>
            <SocialLink
              img="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              url="https://github.com/Joadevy"
              label="Github"
              content="@joadevy"
              viewBox="0 0 24 24"
            />

            <SocialLink
              img="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"
              url="https://codepen.io/joadevy"
              label="codepen"
              content="@joadevy"
              viewBox="0 0 100 100"
            />
          </ul>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <ul className={styles.linksContainer}>
            <SocialLink
              img="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
              url="mailto:jjoaquinarlettaz@gmail.com"
              label="email"
              content="jjoaquinarlettaz@gmail.com"
              viewBox="0 0 24 24"
            />

            <SocialLink
              img="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              url="https://www.linkedin.com/in/joaqu%C3%ADn-arlettaz/"
              label="LinkedIn:"
              formatedLabel={true}
              content="@joaquin-arlettaz"
              viewBox="0 0 24 24"
            />

            <SocialLink
              img="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574
            2.165-2.724-.951.564-2.005.974-3.127
            1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797
            6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108
            1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415
            3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6
            3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548
            2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562
            2.457-2.549z"
              url="https://twitter.com/JoaquinArlettaz"
              label="twitter"
              content="@joaquinArlettaz"
              viewBox="0 0 24 24"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
