import React from "react";

const GoogleMapEmbed = ({ location, className = '' }) => {
    const apiKey = import.meta.env.VITE_Maps_API_KEY;
    const zoom = 20; // You can adjust the zoom level here

    let embedUrl = '';

    if (apiKey) {
        embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(location)}&zoom=${zoom}`;
        console.log('GoogleMapEmbed - Using Google Maps Embed API');
    } else {
        // Fallback to a simple Google Maps search URL if no API key is provided
        const latitude = -1.3073; // Approximate latitude for Freedom Heights Mall
        const longitude = 36.7807; // Approximate longitude for Freedom Heights Mall
        const placeName = "Freedom Heights Mall"; // Using the mall name for the fallback

        embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819983998748!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11999a40b0b9%3A0x5b8399b16b2d94c2!2s${encodeURIComponent(placeName)}!5e0!3m2!1sen!2ske!4v1636593348784!5m2!1sen!2ske"`;
        console.warn('GoogleMapEmbed - No API key found, using fallback URL with approximate coordinates. Consider adding a VITE_Maps_API_KEY for better functionality.');
    }

    console.log('GoogleMapEmbed - Embed URL:', embedUrl);

    return (
        <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={className}
        ></iframe>
    );
};

export default GoogleMapEmbed;