"use client";

import { useState } from "react";
import styles from "./Chat.module.scss";

type Message = {
  id: string;
  from: "user" | "bot";
  text: string;
};

interface ChatForm extends HTMLFormElement {
  message: HTMLInputElement;
}

const EXAMPLES = [
  { label: "presentacion", text: "Quien sos?" },
  { label: "presentacion", text: "Como estas?" },
  { label: "presentacion", text: "Hola" },
  { label: "presentacion", text: "Hola, como estas?\n\n" },
  { label: "ocupacion", text: "A que te dedicas?" },
  { label: "ocupacion", text: "de que trabajas?" },
  { label: "ocupacion", text: "cual es tu ocupacion?" },
  { label: "presentacion", text: "buenos dias" },
  { label: "presentacion", text: "buenas tardes" },
  { label: "presentacion", text: "buenas noches" },
  { label: "identidad", text: "sos real?" },
  { label: "identidad", text: "sos un bot?" },
  { label: "identidad", text: "sos una IA?" },
  { label: "identidad", text: "de verdad sos joaquin?" },
  { label: "hobbies", text: "que te gusta hacer en tu tiempo libre?" },
  { label: "ocupacion", text: "que tecnologias sabes?" },
  { label: "ocupacion", text: "en que programas?" },
  { label: "ocupacion", text: "que haces de tu vida?" },
  { label: "contacto", text: "como te puedo contactar?" },
  { label: "contacto", text: "donde te puedo encontrar?" },
  { label: "contacto", text: "como me comunico con vos?" },
  { label: "contacto", text: "cuales son tus redes?" },
  { label: "contacto", text: "tenes redes sociales?" },
  { label: "contacto", text: "como es tu linkedin?" },
  { label: "contacto", text: "como es tu twitter?" },
  { label: "contacto", text: "como es tu email?" },
  { label: "hobbies", text: "que te gusta hacer?" },
  { label: "ocupacion", text: "que estudias?" },
  { label: "ocupacion", text: "estudiaste algo?" },
  { label: "hobbies", text: "haces deporte?" },
  { label: "hobbies", text: "que deporte te gusta?" },
  { label: "detalles", text: "contame mas sobre vos" },
  { label: "detalles", text: "que otra cosa podes decirme" },
  { label: "detalles", text: "quiero saber algo mas" },
  { label: "detalles", text: "cual es tu comida favorita?" },
  { label: "detalles", text: "te gustan los animales?" },
  { label: "ooc", text: "que hora es?" },
  { label: "ooc", text: "va a llover" },
  { label: "ooc", text: "decime tu numero de telefono" },
  { label: "ooc", text: "sos campeon del mundo?" },
  { label: "detalles", text: "te gusta la musica?" },
  { label: "detalles", text: "te gusta cantar?" },
  { label: "detalles", text: "de que signo sos?" },
  { label: "ocupacion", text: "a que te dedicas" },
  { label: "presentacion", text: "que lenguajes conoces?" },
  { label: "presentacion", text: "que lenguajes manejas?" },
  { label: "detalles", text: "te gusta el arte?" },
  { label: "presentacion", text: "de donde sos?" },
  { label: "presentacion", text: "donde naciste?" },
  { label: "detalles", text: "cuantos años tenes" },
  { label: "detalles", text: "que edad tenes" },
  { label: "contacto", text: "donde te encuentro" },
  { label: "presentacion", text: "donde vivis" },
  { label: "ocupacion", text: "sos programador?" },
  { label: "ocupacion", text: "sos estudiante?" },
  { label: "futuro", text: "cuales son tus metas?" },
  { label: "futuro", text: "como te imaginas en el futuro?" },
  { label: "futuro", text: "que queres lograr?" },
  { label: "futuro", text: "quien queres ser?" },
  { label: "futuro", text: "como te ves en 10 años?" },
  { label: "futuro", text: "quien te gustaria ser?" },
  { label: "futuro", text: "que esperas de la vida?" },
  { label: "ocupacion", text: "de que te gustaria trabajar?" },
  { label: "ocupacion", text: "estas buscando trabajo?" },
  { label: "ocupacion", text: "recibis ofertas laborales?" },
  { label: "ocupacion", text: "te gustaria trabajar?" },
  { label: "ocupacion", text: "estas abierto a propuestas de trabajo" },
  { label: "ocupacion", text: "te gusta la programacion?" },
  { label: "identidad", text: "sos una inteligencia artificial?" },
  { label: "identidad", text: "con quien estoy hablando?" },
  { label: "identidad", text: "quien esta del otro lado?" },
  { label: "identidad", text: "quien me esta respondiendo esto?" },
  { label: "presentacion", text: "que onda?" },
  { label: "ooc", text: "decime la hora" },
  { label: "ooc", text: "cuanto es 10+10?" },
  { label: "ooc", text: "quien descubrio America?" },
  { label: "ooc", text: "sabes las vocales?" },
  { label: "ooc", text: "que dia es hoy" },
  { label: "ooc", text: "cual es la capital " },
  { label: "presentacion", text: "que tal?" },
  { label: "presentacion", text: "todo bien?" },
  { label: "ooc", text: "los autos vuelan?" },
  { label: "detalles", text: "cual es tu edad?" },
  { label: "detalles", text: "decime tu edad" },
  { label: "detalles", text: "cuando naciste?" },
  { label: "detalles", text: "fecha de nacimiento" },
];

const API_KEY = "JCI4tM0Dt2qYdH2FvC4rAL3sMc5j4oYx1WWpMING";

const ENDPOINT = "https://api.cohere.ai/classify";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", from: "bot", text: "Hola, escribeme tu mensaje!" },
    { id: "2", from: "user", text: "hola, todo bien?" },
  ]);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<ChatForm>) => {
    e.preventDefault();
    const userMessage = e.currentTarget.message.value;
    e.currentTarget.message.value = "";

    if (isLoading) return;

    setLoading(true);
    const req = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [userMessage],
        examples: EXAMPLES,
      }),
    });

    const response = await req.json();
    setLoading(false);
    console.log(response.classifications[0].prediction);

    setMessages([
      ...messages,
      {
        id: crypto.randomUUID(),
        from: "user",
        text: userMessage,
      },
    ]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div key={message.id} className={styles[`${message.from}-msg`]}>
            {message.text}
          </div>
        ))}
      </div>

      <form className={styles.inputsForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputChat}
          name="message"
          type="text"
          placeholder="Ask me anything! (about me) "
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
