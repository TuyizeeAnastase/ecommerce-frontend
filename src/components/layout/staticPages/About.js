import "./css/about.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About us</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src="https://res.cloudinary.com/depljf8uc/image/upload/v1664960935/banner3_biypzg.jpg"
              alt=""
            />
          </div>
          <div className="column right">
            <div className="text">
              System Bussines Group <span className="typing-2"></span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="shops">
            <a href="/#">Industrial equipment</a>
            <a href="/#">Tanker shop</a>
            <a href="/#">Maintainance services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
