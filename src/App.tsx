import styles from "./App.module.css";
import { Header } from "./components/Header.js";
import { Post, PostType } from "./components/Post.tsx";
import { Sidebar } from "./components/Sidebar.js";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sspacecoding.png",
      name: "Giulia Bordigon",
      role: "backend 💖",
    },
    content: [
      { type: "paragraph", content: "Oiê genteee! 🦄🌈🍭" },
      {
        type: "paragraph",
        content:
          "Neste espaço, compartilho não apenas conhecimento, mas também paixão pela arte da programação. Cada algoritmo, cada arquitetura, é uma oportunidade para explorar novas fronteiras, desafiando os limites do que é possível alcançar.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jovemcleb.png",
      name: "Caleb",
      role: "fullstack 🛸🚀",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Se você é apaixonado por programação e tem curiosidade sobre o mundo por trás das telas, este post é para você!! 😝🥳",
      },
      {
        type: "paragraph",
        content:
          "Vamos explorar o emocionante universo da programação, onde cada linha de código dá vida a mundos fantásticos e experiências inesquecíveis. Hoje, mergulharemos em tópicos como a física de jogo, inteligência artificial, renderização gráfica e muito mais. Descubra como os desenvolvedores criam personagens cativantes, cenários deslumbrantes e mecânicas de jogo envolventes.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-05 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/rafaballerini.png",
      name: "Rafa Ballerini  ",
      role: "developer 💖 💖 💖",
    },
    content: [
      { type: "paragraph", content: "Fala devs! 🤯🚀👩🏼‍🚀" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-19 07:00:00"),
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/AdrianoRdg.png",
      name: "Adriano ",
      role: "back-end 🛼🚀",
    },
    content: [
      { type: "paragraph", content: "Fala galera!!" },
      {
        type: "paragraph",
        content: "esse é o link da live de hoje, ensinando sobre API. ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-19 08:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
