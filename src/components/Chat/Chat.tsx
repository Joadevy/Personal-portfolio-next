"use client";

import { getGreeting, getPrediction } from "helpers/helpers";
import { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import Message from "./Message/Message";

export type TMessage = {
  id: string;
  from: "user" | "bot";
  text: string;
};

export type Example = {
  label: string;
  text: string;
};

interface ChatForm extends HTMLFormElement {
  message: HTMLInputElement;
}

const EXAMPLES: Example[] = [
  { text: "Quien sos?", label: "presentacion" },
  { text: "Como estas?", label: "presentacion" },
  { text: "Hola", label: "presentacion" },
  { text: "Hola, como estas?\n\n", label: "presentacion" },
  { text: "A que te dedicas?", label: "ocupacion" },
  { text: "de que trabajas?", label: "ocupacion" },
  { text: "cual es tu ocupacion?", label: "ocupacion" },
  { text: "buenos dias", label: "presentacion" },
  { text: "buenas tardes", label: "presentacion" },
  { text: "buenas noches", label: "presentacion" },
  { text: "sos real?", label: "identidad" },
  { text: "sos un bot?", label: "identidad" },
  { text: "sos una IA?", label: "identidad" },
  { text: "de verdad sos joaquin?", label: "identidad" },
  { text: "que te gusta hacer en tu tiempo libre?", label: "hobbies" },
  { text: "que tecnologias sabes?", label: "ocupacion" },
  { text: "en que programas?", label: "ocupacion" },
  { text: "que haces de tu vida?", label: "ocupacion" },
  { text: "como te puedo contactar?", label: "contacto" },
  { text: "donde te puedo encontrar?", label: "contacto" },
  { text: "como me comunico con vos?", label: "contacto" },
  { text: "cuales son tus redes?", label: "contacto" },
  { text: "tenes redes sociales?", label: "contacto" },
  { text: "como es tu linkedin?", label: "contacto" },
  { text: "como es tu twitter?", label: "contacto" },
  { text: "como es tu email?", label: "contacto" },
  { text: "que te gusta hacer?", label: "hobbies" },
  { text: "que estudias?", label: "ocupacion" },
  { text: "estudiaste algo?", label: "ocupacion" },
  { text: "haces deporte?", label: "hobbies" },
  { text: "que deporte te gusta?", label: "hobbies" },
  { text: "contame mas sobre vos", label: "detalles" },
  { text: "que otra cosa podes decirme", label: "detalles" },
  { text: "quiero saber algo mas", label: "detalles" },
  { text: "cual es tu comida favorita?", label: "detalles" },
  { text: "te gustan los animales?", label: "detalles" },
  { text: "que hora es?", label: "ooc" },
  { text: "va a llover", label: "ooc" },
  { text: "decime tu numero de telefono", label: "ooc" },
  { text: "sos campeon del mundo?", label: "ooc" },
  { text: "te gusta la musica?", label: "detalles" },
  { text: "te gusta cantar?", label: "detalles" },
  { text: "de que signo sos?", label: "detalles" },
  { text: "a que te dedicas", label: "ocupacion" },
  { text: "que lenguajes conoces?", label: "presentacion" },
  { text: "que lenguajes manejas?", label: "presentacion" },
  { text: "te gusta el arte?", label: "detalles" },
  { text: "de donde sos?", label: "presentacion" },
  { text: "donde naciste?", label: "presentacion" },
  { text: "cuantos años tenes", label: "detalles" },
  { text: "que edad tenes", label: "detalles" },
  { text: "donde te encuentro", label: "contacto" },
  { text: "donde vivis", label: "presentacion" },
  { text: "sos programador?", label: "ocupacion" },
  { text: "sos estudiante?", label: "ocupacion" },
  { text: "cuales son tus metas?", label: "futuro" },
  { text: "como te imaginas en el futuro?", label: "futuro" },
  { text: "que queres lograr?", label: "futuro" },
  { text: "quien queres ser?", label: "futuro" },
  { text: "como te ves en 10 años?", label: "futuro" },
  { text: "quien te gustaria ser?", label: "futuro" },
  { text: "que esperas de la vida?", label: "futuro" },
  { text: "de que te gustaria trabajar?", label: "ocupacion" },
  { text: "estas buscando trabajo?", label: "ocupacion" },
  { text: "recibis ofertas laborales?", label: "ocupacion" },
  { text: "te gustaria trabajar?", label: "ocupacion" },
  { text: "estas abierto a propuestas de trabajo", label: "ocupacion" },
  { text: "te gusta la programacion?", label: "ocupacion" },
  { text: "sos una inteligencia artificial?", label: "identidad" },
  { text: "con quien estoy hablando?", label: "identidad" },
  { text: "quien esta del otro lado?", label: "identidad" },
  { text: "quien me esta respondiendo esto?", label: "identidad" },
  { text: "que onda?", label: "presentacion" },
  { text: "decime la hora", label: "ooc" },
  { text: "cuanto es 10+10?", label: "ooc" },
  { text: "quien descubrio America?", label: "ooc" },
  { text: "sabes las vocales?", label: "ooc" },
  { text: "que dia es hoy", label: "ooc" },
  { text: "cual es la capital ", label: "ooc" },
  { text: "que tal?", label: "presentacion" },
  { text: "todo bien?", label: "presentacion" },
  { text: "los autos vuelan?", label: "ooc" },
  { text: "cual es tu edad?", label: "detalles" },
  { text: "decime tu edad", label: "detalles" },
  { text: "cuando naciste?", label: "detalles" },
  { text: "fecha de nacimiento", label: "detalles" },
  { text: "que tecnologias usas?", label: "ocupacion" },
  { text: "can you speak in english?", label: "changeLenguage" },
  { text: "podes hablarme en ingles?", label: "changeLenguage" },
  { text: "could you speak in english?", label: "changeLenguage" },
  { text: "podes responder en ingles?", label: "changeLenguage" },
  { text: "can you answer in english?", label: "changeLenguage" },
  { text: "hablamos en ingles?", label: "changeLenguage" },
  { text: "let's talk in english", label: "changeLenguage" },
];

type Answer = {
  presentacion: string;
  changeLenguage: string;
  ocupacion: string;
  identidad: string;
  hobbies: string;
  contacto: string;
  detalles: string;
  futuro: string;
  ooc: string;
};

const ANSWERS_SPANISH: Answer = {
  presentacion: `Hola, soy Joaquin Arlettaz 🙂, espero estes teniendo un gran dia. Podes preguntarme lo que quieras acerca de mi e intentare responderte.`,
  ocupacion: `Actualmente soy estudiante de ingenieria en sistemas. Estoy constantemente aprendiendo nuevas tecnologias aunque, de momento, especialmente enfocado en desarrollo web (React/Node). Puedes ver algunos de mis proyectos aca debajo :).
    `,
  identidad:
    "En realidad soy un bot con inteligencia artificial entrenado para responder algunas preguntas acerca de Joaquin.",
  changeLenguage: "Ok, I'll change my speaking to English If you like to!",
  hobbies:
    "En general me gusta hacer cosas con tecnologia, entre ellas programar, pero tambien disfruto de los videojuegos, las series y las lecturas ocasionales. Ademas me gusta salir a correr para despejar la mente y mejorar mi salud.",
  contacto:
    "Puedes encontrarme en Twitter como @joaquinArlettaz y en LinkedIn como joaquín-arlettaz, tienes los enlaces en la seccion de contacto de esta pagina!",
  futuro:
    "Para mi futuro, me gustaria desarrollar mis habilidades en alguna rama de tecnologia, trabajar junto a un equipo agradable y conocer lugares y personas nuevas",
  detalles:
    "Mmmm que mas puedo contarte? Soy de Argentina, naci muy cerquita del cambio de siglo, mi signo del zodiaco es Sagitario, mi comida preferida son los sandwiches de miga y tengo preferencia musical hacia la musica electronica pero me gusta practicamente cualquier genero. ",
  ooc: "Lo siento, no tengo una respuesta para eso :(, porfavor intenta con algo mas especifico acerca de Joaquin.",
};

const ANSWERS_ENGLISH: Answer = {
  presentacion: `Hi, I'm Joaquin Arlettaz 🙂, I hope you are having a great day. You can ask me anything you want about me and I will try to answer you.`,
  ocupacion:
    "I am currently a student of systems engineering. I'm constantly learning new technologies although, at the moment, I'm specially focused on web development (React/Node). You can see some of my projects scrolling on this page :)",
  identidad:
    "Actually I'm a bot with Artificial Intelligence, trained to answer some questions about Joaquin",
  changeLenguage:
    "Ok, cambiare mi forma de hablarte a español si lo prefieres!",
  hobbies:
    "In general I like to do things with technology, including programming, but I also enjoy video games, series and casual reading. I also like to go running to clear my mind and improve my health",
  contacto:
    "You can find me on Twitter as @joaquinArlettaz and on LinkedIn as joaquin-arlettaz, you have the links in the contact section of this page!",
  detalles:
    "Mmmm what else can I tell you? I'm from Argentina, I was born very close to the turn of the century, my zodiac sign is Sagittarius, my favorite food is sandwiches de miga (argy type of sandwiches) and I have a musical preference towards electronic music but I like almost any genre. ",
  futuro:
    "For my future, I would like to develop my skills in some branch of technology, work together with a nice team and meet new places and people.",
  ooc: "Sorry, I don't have an answer for that :(, please try something more specific about Joaquin.",
};

const Chat = () => {
  const [messages, setMessages] = useState<TMessage[]>([
    {
      id: "1",
      from: "bot",
      text: `Hi, ${getGreeting()}, let's have a conversation! I'll answer you in Spanish by default but you can change it if you ask me..`,
    },
  ]);
  const [isLoading, setLoading] = useState(false);
  const [language, setLenguage] = useState<"en" | "es">("es");
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refContainer.current?.scrollTo(0, refContainer.current.scrollHeight);
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<ChatForm>) => {
    e.preventDefault();
    if (isLoading) return;

    const userMessage = e.currentTarget.message.value;
    e.currentTarget.message.value = "";

    setLoading(true);
    setMessages((messages) => [
      ...messages,
      {
        id: crypto.randomUUID(),
        from: "user",
        text: userMessage,
      },
    ]);

    setTimeout(
      () =>
        setMessages((messages) => [
          ...messages,
          {
            id: crypto.randomUUID(),
            from: "bot",
            text: "",
          },
        ]),
      600
    );

    const prediction: "ocupacion" | "presentacion" | "changeLenguage" =
      await getPrediction(userMessage, EXAMPLES);

    prediction === "changeLenguage" && language === "es"
      ? setLenguage("en")
      : prediction === "changeLenguage" && language === "en"
      ? setLenguage("es")
      : "";
    setLoading(false);

    setMessages((messages) => {
      const updatedMessages = [...messages];
      let answer: string;
      language === "es"
        ? (answer = ANSWERS_SPANISH[prediction])
        : (answer = ANSWERS_ENGLISH[prediction]);
      updatedMessages[updatedMessages.length - 1].text = answer;

      return updatedMessages;
    });
  };

  return (
    <div className={styles.chatContainer}>
      <div ref={refContainer} className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            isLoading={isLoading}
            isLast={index === messages.length - 1}
          />
        ))}
      </div>

      <form className={styles.inputsForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputChat}
          name="message"
          type="text"
          placeholder="Ask me anything!"
        />
        <input
          className={isLoading ? styles.inputLoading : styles.inputSubmit}
          type="submit"
          value={isLoading ? "…" : "↻"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Chat;
