import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  console.log("[TwitterFollowCard] render with userName: ", userName);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "followCard__button isFollowing"
    : "followCard__button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="followCard">
      <header className="followCard__header">
        <img
          className="followCard__header--avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="followCard__header--info">
          <strong>{children}</strong>
          <span className="followCard__header--info--userName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="followCard__button--text">{text}</span>
          <span className="followCard__button--stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
