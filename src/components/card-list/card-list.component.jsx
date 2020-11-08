import "./card-list.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map(({ name, id, email, username }) => (
        <Card name={name} id={id} email={email} username={username} />
      ))}
    </div>
  );
};
