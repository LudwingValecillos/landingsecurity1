import React, { useRef, useEffect } from 'react';
import videoSource from "../../assets/images/large.mp4";

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Reproducción automática no permitida:", error);
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden  " >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        
      >
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default AutoPlayVideo;