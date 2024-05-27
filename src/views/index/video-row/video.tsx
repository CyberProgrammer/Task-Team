import React from "react";

interface VideoRowProps {
    id: string
    className?: string
    videoClassName?: string
    videoSrc?: string
}

const Video : React.FC<VideoRowProps> = (
    {
        id,
        className,
        videoClassName,
        videoSrc
    }) => {

    return (
        <div id={id} className={className}>
            <video className={videoClassName} autoPlay muted loop>
                <source src={videoSrc} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video;