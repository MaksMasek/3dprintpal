import AnimatedText from "@/components/Animatedtext";
import React from "react";
import Equipment from "@/components/equipment";
import Contact from "@/components/contact";
import Layout from "@/components/Layout";

const howitworks = () => {
    return ( <>
           <Layout className="pt-8">
         <main className="flex w-full flex-col items-center justify-center">
  
            <AnimatedText text="How it works" className="mb-16 md:text-6xl sm:text-5xl xs:text-4xl "/>

            <Equipment />
            
            <section id="down">
            <Contact />
            </section>
        
      
            </main>
            </Layout>
    </> );
}
 
export default howitworks;