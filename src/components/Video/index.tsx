import React from "react";

type VideoProps = {
  video_id: string;
};

const Video: React.FC<VideoProps> = ({ video_id }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${video_id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
