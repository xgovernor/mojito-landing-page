import { useState } from "react";
import { sliderLists } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = sliderLists.length;

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  useGSAP(() => {
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    leafTimeline
      .to("#m-left-leaf", { y: -200 }, 0)
      .to("#m-right-leaf", { y: 200 }, 0);
  }, []);

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const previousCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" area-labelledby="menu-title" className="">
      <img src="/images/slider-left-leaf.png" alt="" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="" id="m-right-leaf" />

      <h1 id="menu-heading" className="sr-only">
        Cocktail menu
      </h1>

      <nav className="cocktail-tabs" area-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`cocktail-tab ${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{previousCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="" area-hidden="true" />
          </button>
          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="" area-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail?.image} alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail?.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
