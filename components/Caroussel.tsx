"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "@/lib/data";
import Image from "next/image";

export function Caroussel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mt-10 lg:mt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center">
              <span className="md:block flex-1 bg-[url('/fashion.webp')] bg-cover bg-no-repeat bg-left rounded-lg h-[400px] lg:h-[600px]"></span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center">
              <span className="md:block flex-1 bg-[url('/summer.jpg')] bg-cover bg-no-repeat bg-left rounded-lg h-[400px] lg:h-[600px]"></span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center">
              <span className="md:block flex-1 bg-[url('/woman.jpg')] bg-cover bg-no-repeat bg-left rounded-lg h-[400px] lg:h-[600px]"></span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
