import React, { useEffect, useState } from "react";
import "./Blackhole.scss";

function Blackhole({ onEnterClick }) {
  const [stars, setStars] = useState([]);
  const [showStars, setShowStars] = useState(true);
  const [blackHoleVisible, setBlackHoleVisible] = useState(true);

  useEffect(() => {
    // Fonction pour générer les coordonnées des étoiles en coordonnées polaires
    const generateStarCoordinates = () => {
      const radius = Math.random() * 100 + 10; // Rayon aléatoire
      const angle = Math.random() * 2 * Math.PI; // Angle aléatoire
      const x = radius * Math.cos(angle) + 50; // Centré sur 50% de la largeur
      const y = radius * Math.sin(angle) + 50; // Centré sur 50% de la hauteur
      return { x, y };
    };

    const initialStars = [];
    for (let i = 0; i < 500; i++) {
      initialStars.push(generateStarCoordinates());
    }
    setStars(initialStars);
  }, []);

  const handleEnterClick = () => {
    setShowStars(false); // Cacher les étoiles
    setTimeout(() => {
      setBlackHoleVisible(false); // Cacher le trou noir après un délai
      onEnterClick();
    }, 1000); // Vous pouvez ajuster le délai en millisecondes
  };

  return (
    <div className={`bh-container ${blackHoleVisible ? "" : "hidden"}`}>
      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className={`star ${showStars ? "" : "hidden"}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          ></div>
        ))}
      </div>
      <div className="bh-doppler"></div>
      <div className="bh-photon-ring"></div>
      <div className="bh-accretion"></div>
      <div className="bh-backdrop"></div>
      <div className="bh-shadow"></div>
      <p className="enter-button" onClick={handleEnterClick}>ENTRER</p>
    </div>
  );
}

export default Blackhole;
