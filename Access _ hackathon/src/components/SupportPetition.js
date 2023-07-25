import React, { useState } from "react";
import "../Styles/SupportPetition.css";

function SupportPetition() {
  // Dummy data for the story and supporters count
  const [supporters, setSupporters] = useState(8790); // Initial number of supporters
  const story = `
  Meet Jane, a resilient NYCHA resident living in Brooklyn. Jane has been a part of her community for over a decade, and during this time, she has witnessed both the struggles and the strength of her fellow neighbors. Living conditions in her NYCHA building have been a constant challenge. Broken elevators, leaky roofs, and heating issues are just some of the problems Jane and her neighbors face regularly. Despite these difficulties, Jane and her community have come together to support each other, forming a close-knit bond that thrives on hope and perseverance. As an advocate for change, Jane has been tirelessly collecting signatures for a petition demanding better living conditions in NYCHA buildings. Her passion for creating a safe and healthy environment for her fellow residents has gained immense support from her neighbors and even people beyond her community.

  The petition has now gathered over a thousand signatures, and it continues to grow every day. The strength of the community's unity and determination has caught the attention of local leaders and media, sparking discussions about the urgent need for improvements in NYCHA housing across the city.

  Jane's story has inspired many, and her determination to bring change is a testament to the power of collective action. With every signature, she moves one step closer to a brighter future for all NYCHA residents.

  Join Jane and show your support by signing the petition today. Together, we can make a difference and create lasting change for NYCHA residents.
`;

  // Function to handle the button click and update the number of supporters
  const handleSupportClick = () => {
    setSupporters((prevSupporters) => prevSupporters + 1);
  };

  return (
    <div className="container">
      <div className="petition-box">
        <h2>Support Our Petition</h2>
        <p className="story">{story}</p>
        <div className="supporters-count">{supporters} supporters</div>
        <button className="btn btn-primary" onClick={handleSupportClick}>
          Support Now
        </button>
      </div>
    </div>
  );
}

export default SupportPetition;
