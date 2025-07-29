import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export default function Art() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? "top 80%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskedPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  }, [isMobile]);

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-change">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="" />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              className="abs-center masked-img size-full object-contain"
              alt=""
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="" />
                <p className="md:w-fit w-60">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
