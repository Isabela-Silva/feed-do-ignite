import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import { useState } from "react";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: string;
  deleteComment: (comment: string) => void;
}
export function Comment({ comment, deleteComment }: CommentProps) {
  const [linkCount, setLikeCount] = useState(0);

  function handleDelete() {
    deleteComment(comment);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Isabela-Silva.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Isabela Regina</strong>
            </div>
            <button onClick={handleDelete} title="deletar comentários">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{linkCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
