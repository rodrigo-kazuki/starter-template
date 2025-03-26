"use client";

import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevelAnimation from "@/hooks/useTextRevelAnimation";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scope, entranceAnimation } = useTextRevelAnimation()
  const inView = useInView(scope, {
    once: true,
  })
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation])

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[90%]" ref={scope}>
          We craft high-quality wooden furniture and custom pieces with precision and care. Our expertise ensures durable, functional, and elegant designs for residential and commercial projects. Let us bring your ideas to life.
        </h2>
      </div>;
    </section>

  )

};

export default Intro;
