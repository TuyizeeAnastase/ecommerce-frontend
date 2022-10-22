import { Fragment, useState } from "react";
import "./banner.css";

const photos = [
  {
    id: "p1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://res.cloudinary.com/duhetxdbs/image/upload/v1674923244/banner2_vs1njf.jpg",
  },
  {
    id: "p2",
    title: "Photo Two",
    url: "https://res.cloudinary.com/duhetxdbs/image/upload/v1674923242/banner_yd3nyf.avif",
  },
  {
    id: "p3",
    title: "Photo Three",
    url: "https://res.cloudinary.com/duhetxdbs/image/upload/v1674923242/banner3_jd5cla.jpg",
  },
  {
    id: "p4",
    title: "Photo Four",
    url: "https://res.cloudinary.com/duhetxdbs/image/upload/v1674923242/banner_yd3nyf.avif",
  },
];

const Banner = () => {
  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };
  return (
    <>
      {/* Render the carousel */}
      <div className="slider-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            // if the photo is the current photo, show it
            className={
              photos[currentIndex].id === photo.id ? "fade" : "slide fade"
            }
          >
            <img src={photo.url} alt={photo.title} className="photo" />
            {/* <div className="caption font-mono">{photo.title}</div> */}
            <div className="container">
              <p className="caption text-2xl text-gray-800 font-medium mb-4 capitalize">
                {photo.title}
              </p>
            </div>
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className="prev">
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className="dots">
        {photos.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              photos[currentIndex].id === photo.id ? "dot active" : "dot"
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Banner;
