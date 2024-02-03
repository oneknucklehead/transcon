import React from "react";
// ********VIDEO IMPORT********* //
// import vid from "../assets/videos/videobackground.mp4";

const VideoSection = () => {
  return (
    <div className="w-full mx-auto">
      <div className="video-responsive">
        <iframe
          // width="853"
          // height="480"
          src={`https://www.youtube.com/embed/ux3_7U4Nb-U`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[640px] w-[90%] lg:w-[80%] mx-auto rounded-lg"
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default VideoSection;
