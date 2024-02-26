import AnimatedText from "@/components/Animatedtext";
import Layout from "@/components/Layout";
import React from "react";
import olga from "../../public/images/profile/olga.jpg";
import Image from "next/image";

const projects = () => {
  return (
    <>
      <Layout className="pt-8">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            text="Kocham cię"
            className="mb-2 md:text-6xl sm:text-5xl xs:text-4xl"
          />
          <div className="col-span-3 relative h-max rounded xl:col-span-4 md:order-1 md:col-span-8">
            <Image src={olga} alt="Olga" className="w-full h-auto rounded-2xl xl:col-span-2"></Image>
         </div>

        </main>
      </Layout>
    </>
  );
};

export default projects;
