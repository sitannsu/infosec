import { useState } from "react";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = ({ content, name, title, img }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldTruncate = content.length > 300;

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
      <div className={styles.cardInner}>
        {/* Front Side */}
        <div className={styles.cardFront}>
          <img src="/img/quotes.svg" alt="double quotes" className={styles.quoteIcon} />
          <p className={styles.content}>

            {shouldTruncate ? ` ${content.slice(0, 200)}... ` : content}
          </p>
          {shouldTruncate && (
            <button onClick={toggleCard} className={styles.readMore}>
              Read More
            </button>
          )}
          <div className={styles.user}>
            {/* <img src={img} alt={name} className={styles.userImage} /> */}
            <div>
              <h4 className={styles.name}>{name}</h4>
              <p className={styles.title}>{title}</p>
            </div>
          </div>

        </div>
        {/* Back Side */}
        <div className={styles.cardBack}>
          <button onClick={toggleCard} className={styles.closeButton}>
            &times;
          </button>
          <p className={styles.fullContent}>{content}</p>
        </div>
      </div>
    </div >
  );
};

export default FeedbackCard;