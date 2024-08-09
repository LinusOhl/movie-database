import Image from "react-bootstrap/Image";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <Image
        className="notfound-image"
        fluid
        src="https://media.tenor.com/vMvR0gEolCEAAAAC/nothing-to-see-here-explosion.gif"
      />

      <h1>404 Not found</h1>
      <p>The page does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
