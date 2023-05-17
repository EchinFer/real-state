import React from 'react'

export const MapComponent = ({ latitude, longitude }) => {
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd`;
  
    return (
      <iframe
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    );
}