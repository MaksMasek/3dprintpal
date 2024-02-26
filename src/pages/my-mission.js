import AnimatedText from "@/components/Animatedtext";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import drukarka1 from "../../public/images/articles/drukarka.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 6000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const MyMission = () => {
  return (
    <>
      <Head>
        <title>Maks Masek | My Mission Page</title>
        <meta
          name="My mission page"
          content="a page showing what my mission is and what I can do"
        />
      </Head>

      <Layout className="p-16">
        <main className="flex flex-col items-center justify-center w-full dark:text-light">
          <AnimatedText
            text="My mission"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-10 sm-gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Hey there! At 3DPrintPal, my mission is simple - I&apos;m all
                about delivering personalized and affordable 3D printing
                services, tailored just for you. Whether you&apos;ve got a small
                and straightforward project or a grand, intricate idea with
                multiple moving parts, I&apos;ve got you covered.
              </p>
              <p className="my-4 font-medium">
                And here&apos;s the best part: you won&apos;t just get your
                project printed, you&apos;ll receive top-notch customer service
                with clear communication every step of the way. So, let&apos;s
                turn your ideas into reality together – no project is too small
                or too big for me!
              </p>
              
            </div>

            <div className="relative col-span-3 rounded h-max xl:col-span-4 md:order-1 md:col-span-8">
              <Image
                src={drukarka1}
                alt="Maks"
                className="w-full h-auto rounded-2xl xl:col-span-2"
              ></Image>
            </div>

            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects complited
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satysfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </main>
      </Layout>
    </>
  );
};

export default MyMission;
