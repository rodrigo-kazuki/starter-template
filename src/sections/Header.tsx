"use client";
import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from 'motion/react'
import { div, nav } from "motion/react-client";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current, {
            translateY: 4
          },
        ],
        [
          topLineScope.current, {
            rotate: 45
          }
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current, {
            translateY: -4
          }
        ],
        [
          bottomLineScope.current, {
            rotate: -45
          }
        ]
      ]);
      navAnimate(navScope.current, {
        height:"100%",
      },{
        duration: 0.7,
      },
    );
    } else {
      topLineAnimate([
        [
          topLineScope.current, {
            rotate: 0,
          }
        ],
        [
          topLineScope.current, {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current, {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current, {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, {
        height:0,
      },
    );
    }
  }, [isOpen, topLineScope, topLineAnimate, bottomLineScope, bottomLineAnimate, navScope, navAnimate]);
  return (
    <header className="">
      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a href={href} key={label} className="text-stone-200 border-t last:border-b border-stone-800 py-8">
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl">{label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
        <div className="container max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="/">
                <span className="text-xl font-bold uppercase text-white">AOC</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full ">
        <div className="container max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200" onClick={() => setIsOpen(!isOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: '12px 8px',
                    }} />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: '12px 16px',
                    }} />
                </svg>
              </div>
              <Button
                variant='primary'
                className="hidden md:inline-flex items-center">
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

};

export default Header;
