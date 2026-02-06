"use client"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image";
import { useCallback } from "react";

type CarouselProps = {
    imgs: string[]
}

const ImageCarousel = ({ imgs }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]) 

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]) 

    return (
        <div className="max-w-100">
            <div className="overflow-hidden bg-transparernt" ref={emblaRef}>
                <div className="flex">
                    {imgs.map((img, i)=> (
                        <Image className="flex-none basis-full min-w-0 bg-white" key={i} src={img} alt="lasd" width={300} height={300}/>
                    ))}
                </div>
            </div>
            <button onClick={scrollPrev}>Prev</button>
            <br />
            <button onClick={scrollNext}>Next</button>
        </div>
    )
}

export default ImageCarousel