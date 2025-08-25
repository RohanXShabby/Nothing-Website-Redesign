import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCanvas from "./Home_GlassCanvas";

gsap.registerPlugin(ScrollTrigger);

// Centralized animation config
const animations = [
  { selector: ".image:nth-child(1)", startZ: -1500, start: "0% top", end: "25% top", scrub: 2 },
  { selector: ".image:nth-child(2)", startZ: -800, start: "0% top", end: "50% top", scrub: 2 },
  { selector: ".image:nth-child(3)", startZ: -1200, start: "0% top", end: "10% top", scrub: 2 },
  { selector: ".image:nth-child(4)", startZ: -2000, start: "0% top", end: "15% top", scrub: 2 },
  { selector: ".image:nth-child(5)", startZ: -1100, start: "0% top", end: "20% top", scrub: 2 },
  { selector: ".image:nth-child(6)", startZ: -900, start: "0% top", end: "30% top", scrub: 2 },
  { selector: ".image:nth-child(7)", startZ: -1600, start: "0% top", end: "35% top", scrub: 2 },
  { selector: ".image:nth-child(8)", startZ: -1000, start: "0% top", end: "15% top", scrub: 2 },
  { selector: ".image:nth-child(9)", startZ: -1400, start: "0% top", end: "50% top", scrub: 2 },
  { selector: ".image:nth-child(10)", startZ: -1300, start: "0% top", end: "30% top", scrub: 2 },
];

const HeroSection = () => {
  const exploreRef = useRef(null);
  const nothingRef = useRef(null);
  const imageRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline();
      tl.from(exploreRef.current, {
        duration: 1,
        delay: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
        .from(nothingRef.current, {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .fromTo(
          paraRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "power3.out" }
        );

      // 🚀 Page load animation for images
      const images = imageRef.current.querySelectorAll(".image");
      gsap.fromTo(
        images,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // 🚀 Scroll-based z-depth animations
      animations.forEach(({ selector, startZ, start, end, scrub }) => {
        gsap.fromTo(
          selector,
          { z: startZ },
          {
            z: 1500,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "body",
              start,
              end,
              scrub,
            },
          }
        );
      });
    });

    return () => ctx.revert(); // cleanup GSAP
  }, []);

  return (
    <>
      <div className="section-one-home">
        <video autoPlay muted loop playsInline preload="none" id="heroVideo">
          <source src="/video/introVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <GlassCanvas />

      <div className="hero-title">
        <h1>
          <span ref={exploreRef} className="explore-text">
            EXPLORE
          </span>
          <br />
          <span ref={nothingRef} className="nothing-text text-[#cc3628]">
            NOTHING
          </span>
        </h1>
      </div>

      <div ref={paraRef} className="middlePara">
        <p className="instruction">SCRATCH ME</p>
        <p className="para-1">We Believe in Creativity and transparency</p>
        <p className="para-2">Come to play</p>
      </div>

      {/* Image Container */}
      <div ref={imageRef} className="container">
        <div className="image img-1">
          <img src="https://res.cloudinary.com/drwfctvfs/image/upload/v1756057536/Home_orangeNewspaper_wtfbir.jpg" alt="img1" />
        </div>
        <div className="image img-2">
          <img src="https://res.cloudinary.com/drwfctvfs/image/upload/v1756057536/CmfGirlOrange_elkwl6.jpg" alt="img2" />
        </div>
        <div className="image img-3">
          <img src="https://res.cloudinary.com/drwfctvfs/image/upload/v1756057538/orangeBoy_f8svpy.jpg" alt="img3" />
        </div>
        <div className="image img-4">
          <img src="https://res.cloudinary.com/drwfctvfs/image/upload/v1756057537/CmfPeopleGroup_f0oxi4.jpg" alt="img4" />
        </div>
        <div className="image img-5">
          <img src="https://res.cloudinary.com/drwfctvfs/image/upload/v1756057544/Cmf2Person_k0ipgx.jpg" alt="img5" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
