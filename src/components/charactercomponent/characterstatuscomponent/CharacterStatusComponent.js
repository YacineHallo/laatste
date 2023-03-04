export const CharacterStatusComponent = ({ status }) => {
  return (
    <>
      {(() => {
        if (status === "Dead") {
          return (
            <li className="character-component__eigenschap dead hover">
              Status: {status}
            </li>
          );
        } else if (status === "Alive") {
          return (
            <li className="character-component__eigenschap alive hover ">
              Status: {status}
            </li>
          );
        } else {
          return (
            <li className="character-component__eigenschap unknown hover">
              Status: {status}
            </li>
          );
        }
      })()}
    </>
  );
};
