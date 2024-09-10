"use client";
import Image from "next/image";
import { CarouselLarge } from "./CharacterCarousel/CarouselLarge";
import { useState } from "react";
import { CenteredText } from "../text/CenteredText";

export function CharacterCarousel() {
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  const characters: {
    src: string;
    alt: string;
    descriptionTitle: string;
    description: string;
  }[] = [
    {
      src: "/characters/character-klaus.png",
      alt: "Klaus",
      descriptionTitle: "He stand",
      description: "He stand motherfucker. You move him. Show me",
    },
    {
      src: "/characters/character-sarraq.png",
      alt: "Sarraq",
      descriptionTitle: "He stab",
      description: "He stab motherfucker. Stab, stab. You die",
    },
    {
      src: "/characters/character-septos.png",
      alt: "Sarraq",
      descriptionTitle: "He stink",
      description: "He stink motherfucker. Fuck me. Stinky boy",
    },
  ];
  const next = () => {
    setSelectedCharacterIndex(selectedCharacterIndex + 1);
  };
  const prev = () => {
    setSelectedCharacterIndex(selectedCharacterIndex - 1);
  };
  return (
    <div className="carousel relative snap-mandatory snap-center">
      <Image
        className="relative"
        width={"1024"}
        height={"280"}
        src={"/black.png"}
        alt={""}
      />
      <div className="carousel-images">
        {characters.map((c, i) => (
          <div key={i}>
            <CarouselLarge
              src={c.src}
              alt={c.alt}
              selected={i === selectedCharacterIndex}
              index={i}
            />
          </div>
        ))}
      </div>
      <div className="carousel-descriptions absolute left-1/2 top-1/4 ">
        {characters.map((c, i) => (
          <div
            className={`absolute w-[240px] ${
              i !== selectedCharacterIndex
                ? "carousel-text-hidden animate-fade-out-1"
                : "animate-fade-in-4"
            }`}
            key={i}
          >
            <p className="description-title text-4xl">{c.descriptionTitle}</p>
            <p className="description-title text-xl">{c.description}</p>
          </div>
        ))}
      </div>
      <button
        className={`carousel-prev absolute top-1/2 left-0 transform -translate-y-1/2`}
        onClick={prev}
      >
        &lt;
      </button>
      <button
        className="carousel-next absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={next}
      >
        &gt;
      </button>
    </div>
  );
}
