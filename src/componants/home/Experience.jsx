import React from "react";
import experience from "../data/experience.json";
import "../styles/Experience.css";

function Experience() {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imgSrc}`} alt="img" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <span style={{ color: "yellowgreen" }}>
                    <h4>
                      {data.Organisation}, {data.Location}
                    </h4>
                  </span>
                  <span style={{ color: "yellow" }}>
                    <h5>{data.Experience}</h5>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
