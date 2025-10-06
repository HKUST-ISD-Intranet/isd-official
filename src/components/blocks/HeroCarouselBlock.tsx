'use client';

import DotPattern from '@/assets/hero-dot-pattern.svg';
import Carousel1 from '@/assets/carousel-1.jpg';
import Carousel2 from '@/assets/carousel-2.jpg';
import Carousel3 from '@/assets/carousel-3.jpg';
import Carousel4 from '@/assets/carousel-4.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarouselBlock() {
    const images = [Carousel1, Carousel2, Carousel3, Carousel4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute -z-1 w-full h-full">
                <Image
                    src={images[currentIndex]}
                    alt="Carousel Image 1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute -z-1 w-full h-full bg-gradient-to-b via-transparent to-black"></div>
            <div className="absolute z-0 w-full h-full flex items-center justify-between px-12 pointer-events-none">
                <button
                    className="pointer-events-auto cursor-pointer"
                    onClick={() =>
                        setCurrentIndex(
                            (prevIndex) =>
                                (prevIndex - 1 + images.length) % images.length
                        )
                    }
                >
                    <ChevronLeft color="white" size={48} strokeWidth={1} />
                </button>
                <button
                    className="pointer-events-auto cursor-pointer"
                    onClick={() =>
                        setCurrentIndex(
                            (prevIndex) => (prevIndex + 1) % images.length
                        )
                    }
                >
                    <ChevronRight color="white" size={48} strokeWidth={1} />
                </button>
            </div>
            <div className="absolute z-0 w-full h-full pb-3 flex items-end justify-center gap-2 px-12 pointer-events-none">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="pointer-events-auto cursor-pointer py-2"
                        onClick={() => setCurrentIndex(index)}
                    >
                        <div
                            className={`h-0.5 w-8 ${
                                index === currentIndex
                                    ? 'bg-white'
                                    : 'bg-white/50'
                            }`}
                        />
                    </button>
                ))}
            </div>
            <div className="container z-1 text-white flex flex-col justify-end py-[64px] h-[612px]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-h1 text-[36px]">Welcome to</h1>
                        <h1 className="text-h1">
                            Division of Integrative Systems and Design
                        </h1>
                    </div>
                    <Image
                        src={DotPattern}
                        alt="Dot Pattern"
                        className="pointer-events-none select-none"
                    />
                </div>
            </div>
        </div>
    );
}
