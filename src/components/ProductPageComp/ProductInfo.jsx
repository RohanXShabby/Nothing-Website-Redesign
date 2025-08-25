"use client";
import { useContext, useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shopcontext } from "/src/context/Shopcontext.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../globalComp/ScrollToTop";
import "../../style/productinfo.scss";

gsap.registerPlugin(ScrollTrigger);

const ColorSelector = ({ colors, selectedImage, onSelect }) => (
  <div className="color-options flex gap-2 justify-center mt-4 z-10">
    {colors.map((color, index) => (
      <button
        key={index}
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: color.colorHex.toLowerCase(),
          border: selectedImage === color.image ? "2px solid white" : "1px solid gray",
        }}
        onClick={() => onSelect(color.image, color.colorName)}
      />
    ))}
  </div>
);

const ProductInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const headingRefs = useRef([]);
  const brandRef = useRef(null);
  const imgRef = useRef(null);
  const pointsRef = useRef([]);
  const colorNameRef = useRef(null);
  const pointingLineRef = useRef(null);
  const highlightsRef = useRef(null);

  const { AllDeviceDetails } = useContext(shopcontext);
  const product = AllDeviceDetails.find((item) => item.id == params.id);
  const isAudioDevice = product.searchKeywords.includes("audio");

  const [selectedVariant, setSelectedVariant] = useState(
    isAudioDevice ? { price: product?.variants?.[0]?.price || product.price || "N/A" } : product?.variants?.[0]
  );
  const [selectedImage, setSelectedImage] = useState(product.defaultImage);
  const [selectedColorName, setSelectedColorName] = useState(product.colors[0].colorName);

  const handleColorClick = (img, colorName) => {
    setSelectedImage(img);
    setSelectedColorName(colorName);
  };

  // Reset scroll on product change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [params.id]);

  // Initial entry animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(headingRefs.current, { y: -100, opacity: 0, stagger: 0.1, duration: 1 })
        .from(brandRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.6")
        .from(imgRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(pointsRef.current, { opacity: 0, y: 10, stagger: 0.1, duration: 0.5 }, "-=0.4")
        .from(colorNameRef.current, { opacity: 0, y: 10, duration: 0.5 }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  // Scroll-based animations
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: ".section-two-product-features",
          start: "top bottom",     // start when section enters viewport
          end: "bottom top",       // end when section leaves viewport
          scrub: true,             // fully tied to scroll
          markers: false,          // set to true for debugging
        },
        position: "fixed",
        top: "45%",
        left: isMobile ? "50%" : "80%",
        x: "-50%",
        y: "-50%",
        xPercent: isMobile ? 0 : 2,
        yPercent: 10,
        scale: isMobile ? 0.8 : 1.8,
        zIndex: 19,
        ease: "none",             // no easing when scrubbed
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <>
      <ScrollToTop />
      <div className="maincontainer-productinfo">
        <div className="container-productinfo w-screen h-screen">
          <div className="section-one-header">
            <div className="header-div">
              {"NOTHING".split("").map((char, i) => (
                <h1 key={i} ref={(el) => (headingRefs.current[i] = el)}>{char}</h1>
              ))}
            </div>

            <div ref={brandRef} className="brand-name-div">
              <h1>{product.name}</h1>
            </div>

            <div ref={imgRef} className="product-img-div">
              <img src={selectedImage} alt={product.name} />
            </div>

            <ColorSelector colors={product.colors} selectedImage={selectedImage} onSelect={handleColorClick} />

            <small ref={colorNameRef} className="colorName text-white">{selectedColorName}</small>

            <ul className="description-div">
              {product.highlights.map((point, i) => (
                <li key={i} ref={(el) => (pointsRef.current[i] = el)}>{point}</li>
              ))}
            </ul>

            <div className="button-group">
              {isAudioDevice ? (
                <div>
                  <span>Standard Model</span>
                  <span>{product?.variants?.[0]?.price || product.price || "N/A"}</span>
                </div>
              ) : (
                <div>
                  <select
                    className="select"
                    onChange={(e) => {
                      const variant = product.variants.find(
                        (v) => `${v.ram}GB/${v.storage}GB` === e.target.value
                      );
                      setSelectedVariant(variant);
                    }}
                  >
                    {product.variants.map((v, i) => (
                      <option key={i} value={`${v.ram}GB/${v.storage}GB`}>
                        {v.ram}GB / {v.storage}GB
                      </option>
                    ))}
                  </select>
                  <span>{selectedVariant?.price}</span>
                </div>
              )}
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="section-two-product-features">
            <div ref={pointingLineRef} className="pointing-lines-parent">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`pointing-line pointing-line-${i + 1}`} />
              ))}
            </div>

            <div ref={highlightsRef} className="highlights text-white w-screen">
              {product.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className={`highlight-${i + 1}`}>{h}</div>
              ))}
            </div>

            <div className="footer-details w-screen flex justify-end items-center">
              <div>
                <ColorSelector colors={product.colors} selectedImage={selectedImage} onSelect={handleColorClick} />
                <h3 className="text-white">{selectedColorName}</h3>
              </div>
              <h3>{product.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
