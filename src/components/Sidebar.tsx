import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605188229483-fdfb7b2c489a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://avatars.githubusercontent.com/u/72450422?v=4"
        />

        <strong>Isabela Regina</strong>
        <span>Front-end</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="bold" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
