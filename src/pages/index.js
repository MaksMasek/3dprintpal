import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Maks from '../../public/images/profile/MaksCien.png';
import AnimatedText from '@/components/Animatedtext';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>3dPrintPal</title>
        <meta name="description" content="3dPrintPal" />
      </Head>
      <Layout className="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0">
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      
          <div className="flex items-center justify-between w-full xl:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={Maks} alt="Maks" className="w-full h-auto lg:inline-block lg:w-full sm:inline-block sm:w-full xl:inline-block xl:w-full md:inline-block md:w-full" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center xl:w-full xl:text-center">
              <AnimatedText text="Turning Vision Into Reality With Design And 3D Printing!" className="mb-2 !text-6xl !text-left
              xl:!text-5xl xl:!text-center lg:!text-center md:!text-center sm:!text-center xs:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />

              <p className="mt-2 font-medium self-start xl:!self-center text-center">
                I&apos;m Maks, and I want to help you with any project you throw at me! Here is my contact info:
              </p>

              <div className="flex items-center self-start mt-4 gap-2 xl:self-center">
                <Link
                  href="/how-it-works#down"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
  
      </main>
      </Layout>
    </>
  );
}
