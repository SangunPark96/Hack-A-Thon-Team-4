import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto" style={{ color: "#000000" }}>
          <h3 className="text-center mb-4">
            Our Mission: Empowering Residents in Housing Society
          </h3>
          <div className="text-center" style={{ color: "#4d372d" }}>
            <p>
              Welcome, we are dedicated to empower NYCHA residents and fostering
              positive change within their communities. Our main objective is to
              provide a space for residents to voice their concerns, and
              aspirations. We believe that every individual's voice holds
              significance, and we aim to create a more inclusive and
              participatory society.
            </p>{" "}
            <br />
            <p>
              With this app, we encourage users to submit and manage petitions,
              engaging in community-driven initiatives. By collaborating and
              supporting one another, we can bring about positive
              transformations in our neighborhoods.
            </p>{" "}
            <br />
            <p>
              We envision a future where NYCHA residents are active participants
              in shaping their communities, making them safer, and cleaner to
              live. Join us on this journey of collective action as we work
              towards a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
