"use client"

const YouTube = ({latestVideo}) => {
    return (  
        <div  >
             {latestVideo && (
        <div>
          <h2>{latestVideo.title}</h2>
          <iframe
            src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
            title={latestVideo.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
        </div>
    );
}
 
export default YouTube;