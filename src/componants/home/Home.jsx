import React, { useEffect, useRef } from "react";
import pdf from "../../pdf/MANISHA_WEBDESIGN_CV.pdf";
import hero from "../data/hero.json";
import "../styles/Home.css";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Manisha Gondaliya",
        "I am Frontend-Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
