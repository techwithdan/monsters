import "./card.styles.css";
export const Card = (props) => {
  const { name, id, email, username } = props;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 key={id}>{name}</h2>
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
  );
};
