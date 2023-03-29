import React from 'react'




function VideoCard({video}) {
    const snip = video.snippet
    const vid = video.snippet.resourceId.videoId
    //const thumbnail = video.snippet.thumbnails.standard.url
    const vidSrc = `https://www.youtube.com/embed/${vid}`

    // console.log(video.id)

return   (
    <div className="video-container">
        <div>
          {/* <img  alt={snip.title} onClick={playVideo} /> */}
      <h4 className='video-name'>{snip.title}</h4>
      </div>
      <iframe className="staffPick-img"  src={vidSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <div></div>
    </div>

)

}

export default VideoCard