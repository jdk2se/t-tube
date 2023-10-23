import { formatTimeAgo, viewsFormatter } from "../utils/formater";
import logo from '../assets/logo.png';
import { useEffect, useRef, useState } from "react";

type VideoGridItemProps = {
    id: string;
    title: string;    
    thumbnailUrl: string;
    duration: string;
    uploadTime: string;
    views: string;
    author: string;
    videoUrl: string;
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {notation: "compact"});

export function VideoGridItem({
    id,
    title,
    author,
    views,
    uploadTime,
    duration,
    thumbnailUrl,
    videoUrl
}: VideoGridItemProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current === null) return;

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

    return <div 
        className="flex flex-col gap-2" 
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
    >
        <a href={`/watch?v=${id}`} className="relative aspect-video">
            <img 
                src={thumbnailUrl} 
                alt={title} 
                className={`block w-full h-full object-cover min-h-[230px] transition-[border-radius] duration-200
                    ${isVideoPlaying ? 'rounded-none': 'rounded-xl'}`} 
            />
            <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
                {duration}
            </div> 
            <video 
                className={`block h-full object-cover absolute inset-0 transition-opacity duration-200
                    ${isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'}`}
                ref={videoRef} 
                muted 
                playsInline 
                src={videoUrl} 
            />
        </a>
        <div className="flex gap-2">
            <a href={`/@${author}`} className="flex-shrink-0">
                <img src={logo} alt={author} className="w-12 h-12 rounded-full" />
            </a>
            <div className="flex flex-col">
                <a href={videoUrl} className="font-bold">
                    {title}
                </a>
                <a href={`/@${author}`} className="text-secondary-text text-sm">
                    {author}
                </a>
                <div className="text-secondary-text text-sm">
                    {VIEW_FORMATTER.format(viewsFormatter(views))} Views • {formatTimeAgo(uploadTime)}
                </div>
            </div>
        </div>
    </div>
}