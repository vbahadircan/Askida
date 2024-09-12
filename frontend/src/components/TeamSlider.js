import React, { useState, useEffect } from 'react';
import './TeamSlider.css';

import image1 from '../cems_pp.jpeg';
import image2 from '../sena_pp.jpg';
import image3 from '../dodo_pp.jpg';
import image4 from '../pasa.jpg';

// Array of team members with their images and related information
const teamMembers = [
  {
    name: 'Ege Cem Sun',
    role: 'Ekip Lideri',
    description: 'İzmir Katip Çelebi Üniversitesinde Malzeme Metalurji Mühendisliği 3. sınıf öğrencisi',
    image: image1,
  },
  {
    name: 'Elif Sena Asana',
    role: 'Ekip Lideri',
    description: 'İzmir Katip Çelebi Üniversitesinde Biyomedikal Mühendisliği 4. sınıf öğrencisi',
    image: image2,
  },
  {
    name: 'Doğukan İşnel',
    role: 'Yazılımcı',
    description: 'İzmir Katip Çelebi Üniversitesinde Malzeme Metalurji Mühendisliği 3. sınıf öğrencisi',
    image: image3,
  },
  {
    name: 'Veli Bahadır Can',
    role: 'Yazılımcı',
    description: 'İzmir Katip Çelebi Üniversitesinde Bilgisayar Mühendisliği 3. sınıf öğrencisi',
    image: image4,
  },
];

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);
  const [showAllImages, setShowAllImages] = useState(true);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 480) {
        setVisibleImages(1);
        setShowAllImages(false);
      } else if (window.innerWidth <= 768) {
        setVisibleImages(2);
        setShowAllImages(false);
      } else {
        setVisibleImages(4);
        setShowAllImages(true); // Show all images on larger screens
      }
    };

    updateVisibleImages(); // Initial check
    window.addEventListener('resize', updateVisibleImages); // Update on resize

    return () => window.removeEventListener('resize', updateVisibleImages); // Cleanup
  }, []);

  // Automatically change the active image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Calculate the images to show based on current index and visible images count
  const imagesToShow = showAllImages
    ? teamMembers
    : teamMembers.slice(currentIndex, currentIndex + visibleImages);

  return (
    <div className="team-slider">
      <div className="image-gallery">
        {imagesToShow.map((member, index) => (
          <img
            key={index}
            src={member.image}
            alt={member.name}
            className={`team-image ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="member-info">
        <h2>{teamMembers[currentIndex].name}</h2>
        <h4>{teamMembers[currentIndex].role}</h4>
        <p>{teamMembers[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default TeamSlider;
