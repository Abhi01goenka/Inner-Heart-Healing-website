import Image from "next/image";
import localFont from "next/font/local";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { images } from "@/components/slider-images"
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-information";
import { LinkPreview } from "@/components/ui/link-preview";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconArrowDown } from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { about_pg, about_sg } from "@/components/about_us_content"
import Testimonials from "@/components/testimonials"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The Inner Heart Healing Centre
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href='/aboutme'>Appointments Available →</Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {/* About Us */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold dark:text-white h-[5rem]">
                About Us
              </h1>
            </>
          }
        >
          <Image
            src={`/5-koshas-1.jpg.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* About us content */}
      <div className="flex justify-center items-center h-fit mb-[6rem] flex-col px-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          Energy Healing is a No Touch, No Drug Healing Therapy for Body, Mind and Soul.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          It is an advance system of Ancient Ayurveda treating all 5 koshas thereby healing physical ailments as well as emotional and psychological disorders.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-[3rem]">
          By managing the energy system various ailments can be treated
          <li>CANCER, CHEMOTHERAPY SIDE EFFECT</li>
          <li>OCD (Obsessive Compulsive Disorder)</li>
          <li>PCOS (Polycystic Ovary Syndrome)</li>
          <li>Asthma, Lungs Congestion</li>
          <li>Hormonal Disturbance, Thyroid...</li>
          <li>Pre/post Menstrual Syndrome</li>
          <li>Cysts, Fibroids, Tumors, Stone</li>
          <li>Hypertension, High/Low Blood Pressure</li>
          <li>Diabetes</li>
          <li>Heart Ailment</li>
          <li>Migraine,  Sinusitis</li>
          <li>Nervous Problem, Parkinson...</li>
          <li>Lower Back Pain, Sciatica, Insomnia</li>
          <li>Spine Problem, Cervical Pain</li>
          <li>Stress, Anxiety Fever, Digestive System Upset</li>
          <li>Kidney, Bladder Disorder</li>
          <li>Skin Problems, Dandruff, Ratches</li>
          <li>Addiction, Alcohol, Tobacco</li>
          <li>Fractures</li>
          <li>Relationship Issues</li>
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href='/aboutUs'>Learn more →</Link>
          </button>
        </p>
      </div>

      {/* Meet the team */}
      <div className="relative flex flex-col items-center">
        <ShootingStars className="w-full h-full" />
        <StarsBackground className="w-full h-full" />
        <h1 className="text-4xl font-semibold dark:text-white h-[1rem]">
          Meet the Team
        </h1>
        <div className="relative z-20 flex space-x-4 w-[60vw] min-h-screen justify-center items-center">
          <BackgroundGradient className="rounded-[22px] flex w-[50rem] space-x-4 p-4 sm:p-10 bg-black dark:bg-zinc-900">
            {/* pg div */}
            <div className="w-[25rem] place-items-center">
              <Image
                src={`/pg.jpeg`}
                alt="Pradeep Goenka"
                height="200"
                width="200"
                className="object-contain rounded-full"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">
                Hr. Pradeep Goenka
              </p>

              <p className="text-sm text-neutral-600 text-neutral-400">
                ASSOCIATE CERTIFIED YOGA PRANA VIDYA HEALER<br />
                Adopted healing since 2008.
                Successfully completed One-year Yoga Prana Vidya Intensive residential training program for higher healing competencies to treat psychosomatic ailments and service to humanity.
              </p>
            </div>

            {/* sg div */}
            <div className="w-[24.5rem] place-items-center">
              <Image
                src={`/sg1.jpeg`}
                alt="Sonia Goenka"
                height="200"
                width="200"
                className="object-contain rounded-full"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">
                Hr. Sonia Goenka
              </p>

              <p className="text-sm text-neutral-600 text-neutral-400">
                ASSOCIATE CERTIFIED YOGA PRANA VIDYA HEALER & SENIOR TRAINER
              </p>
            </div>
          </BackgroundGradient>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials/>
    </>
  );
}
