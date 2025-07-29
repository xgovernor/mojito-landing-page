import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create(".content h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from(".content h3, .content p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
      })
      .to("#f-left-leaf", { y: "-50", duration: 1, ease: "power.inOut" })
      .to("#f-right-leaf", { y: "-50", duration: 1, ease: "power.inOut" }, "<");
  }, []);

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" id="f-right-leaf" alt="" />
      <img src="/images/footer-left-leaf.png" id="f-left-leaf" alt="" />

      <div className="content">
        <h2 className="">Where to Find Us</h2>

        <div className="">
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd,. #404, Los Angles, CA 90210</p>
        </div>
        <div className="">
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmocktail.com</p>
        </div>

        <div className="">
          <h3>Open Everyday</h3>
          {openingHours.map((time, index) => (
            <p key={index}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>

        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
