import AnimatedText from "@/components/Animatedtext";
import Layout from "@/components/Layout";
import React from "react";
import MyComponent from "@/components/MyComponent";

const projects = () => {
  return (
    <>
      <Layout className="pt-8">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            text="Projects"
            className="mb-2 md:text-6xl sm:text-5xl xs:text-4xl"
          />
          <p className=" text-black dark:text-light w-full h-full inline-block z-0 bg-light/0 p-12 mb-9 dark:bg-dark/0 text-2xl xl:text-justify md:text-lg sm:text-base xs:text-sm text-justify">
            Feel free to swipe through some of my projects from the past. Some
            of them are commissions I already finished. Others are my private
            prints for everyday needs or hobbies. I often used ready-to-print
            models from the internet, and I encourage you to search online
            yourself. Maybe you will find a part you need, and I can help you
            make it.
          </p>

          <div className="w-full h-full inline-block z-0 pb-5 bg-light dark:bg-dark">
            <MyComponent />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default projects;
