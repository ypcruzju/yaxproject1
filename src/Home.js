import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import VideoCard from "./VideoCard"

export default () => {
//this is the youtube fetch for the info//

const [video, setVideo] = useState([]) 


useEffect(() => {
  fetch (`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${process.env.REACT_APP_API_KEY}&playlistId=PLnuPM0B9haimXRxjAXuewZprKSGH5VzSV&maxResults=20`)
  .then ((r) => r.json())
  .then ((video)=> setVideo(video.items))

}, [])

const mapVideo = video.map((videoObj) => {
return <div>
    <VideoCard
key ={videoObj.id}
video = {videoObj}   
     />
     </div>


})
// console.log(mapVideo)

    // this is the slide bar //
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        
        <div ref={sliderRef} className="keen-slider">
        {/* <div className="keen-slider__slide number-slide1">
      {mapVideo}
  
    </div> */}
          <div className="keen-slider__slide number-slide3">Dinners</div>  
          <div className="keen-slider__slide number-slide2">{mapVideo[9]}</div>
          <div className="keen-slider__slide number-slide2">{mapVideo[10]}</div>
          <div className="keen-slider__slide number-slide2">{mapVideo[12]}</div>
          <div className="keen-slider__slide number-slide2">{mapVideo[13]}</div>
          <div className="keen-slider__slide number-slide2">{mapVideo[14]}</div>
          <div className="keen-slider__slide number-slide2">{mapVideo[6]}</div> 
          <div className="keen-slider__slide number-slide2">{mapVideo[7]}</div> 
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
