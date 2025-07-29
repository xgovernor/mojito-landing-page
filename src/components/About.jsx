import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function About() {
  useGSAP(() => {
    const titleSplit = new SplitText(".content h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: { target: "#about", start: "top center" },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.2,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.4,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div id="about" className="">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <div className="badge">Best Cocktails</div>
            <h2>
              Where every details matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              details from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <p className="md:text-3xl text-xl font-bold">
              <span>4.5</span>/5
            </p>
            <p className="text-sm text-white-100">More than 12000 customers</p>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
