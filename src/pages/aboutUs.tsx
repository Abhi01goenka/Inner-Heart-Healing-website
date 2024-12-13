import Carousel from "@/components/carousel"
import React from "react";
import ReactPlayer from "react-player";

export default function AboutUs() {
    return (
        <>
            {/* Heading and Video Section */}
            <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-center space-y-8 px-4 pb-[2rem]">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center mt-[2rem]">About Us</h1>

                {/* Video Section */}
                <div className="max-w-7xl">
                    <video
                        controls
                        className="w-[90vw] rounded-lg shadow-lg object-cover"
                    >
                        <source src="/videos/about-us.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Collage section */}
            <div className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4 pt-[2rem] pb-[2rem]">
                <div className="max-w-7xl">
                    <Carousel />
                </div>
            </div>

            {/* Content 1 */}
            <div className="flex bg-stone-900 justify-center items-center h-fit pb-[2rem] flex-col px-4">
                <h1 className="text-4xl font-bold text-center mt-[2rem] mb-[2rem]">Health in your hands</h1>
                <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                    Imagine getting rid of your headache, stomach-ache and such minor aches and pain just with a sweep of your hands with no touch or medicine involved!
                </p>
                <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                    This is a complementary healing therapy which heals the energy body (aura) of a person that interpenetrates and surrounds the physical body. It is this energy body that governs all aspects of our life. By using the techniques of energy healing, invisible aura of a person can be healed of multiple ailments from small little cuts and wounds to major ailments like kidney dysfunction, cancer and others.
                </p>
                <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto text-center">
                    We have advanced techniques to heal chronic ailments and other problems such as Psychological, Mental, Relationship, Financial and the like. All these, with a good understanding of the anatomy of the energy body - the aura, the chakrams, the meridians and their functions.
                </p>
            </div>

            {/* Content 2 */}
            <div className="flex justify-center items-center h-fit pb-[2rem] flex-col px-4">
                <h1 className="text-4xl font-bold text-center mt-[2rem] mb-[2rem]">Some of the ailments which can be treated are:</h1>
                <p className="text-neutral-400 font-bold dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                    Physical: Asthama, Sinusitis, Migraine, Diabetes, Hypertension, Kidney and Urinary ailments, Post surgery recovery, all infections, etc
                </p>
                <p className="text-neutral-400 font-bold dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto text-center">
                    Psychological: Depression, Anxiety, Hysteria, Addictions, Fears and phobia, Anger, etc.
                </p>
            </div>

            {/* About Energy Healing */}
            <div className="h-auto w-full rounded-md bg-stone-900 relative flex flex-col items-center justify-center antialiased pt-[2rem]">
                <h1 className="text-4xl font-semibold dark:text-white h-[4rem]">
                    About Energy Healing
                </h1>
                <section className="py-10">
                    <div className="container mx-auto px-4 space-y-12">
                        {/* content-1 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                {/* <video controls className="rounded-lg shadow-lg w-full">
                                    <source src="https://youtu.be/ULicb7aIBA4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                                {/* <iframe
                                    className="rounded-lg shadow-lg w-full"
                                    src="https://youtu.be/ULicb7aIBA4"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe> */}
                                <ReactPlayer
                                    url="https://youtu.be/ULicb7aIBA4"
                                    width="100%"
                                    height="40vh"
                                    controls
                                    playing={false}
                                    loop={false}
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">ENERGY HEALINGS IN COVID PATIENTS</h3>
                                <p className="text-neutral-400 text-justify w-[40vw] md:w-full">
                                    Energy healing brings great opportunity to build up fast immunity to souls of all age by purification of all vehicles and increasing vibrations of mental emotional bodies thereby imparting immediate peace and serenity to a stressed soul.

                                    Immune system is generally lowered by faulty lifestyle which includes junk food, anger, fear leading to decreased blood supply in internal organs and increased aging of cells.

                                    With healing in COVID PATIENTS, within few days immune system is drastically improved with lowering of temperature and congestion.
                                </p>
                                {/* <p className="text-sm text-gray-500">- John Doe</p> */}
                            </div>
                        </div>

                        {/* content 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                {/* <video controls className="rounded-lg shadow-lg w-full">
                                    <source src="/videos/video2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                                {/* <iframe
                                    className="rounded-lg shadow-lg w-full"
                                    src="https://youtu.be/y8QrmVf97HA"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe> */}
                                <ReactPlayer
                                    url="https://youtu.be/y8QrmVf97HA"
                                    width="100%"
                                    height="45vh"
                                    controls
                                    playing={false}
                                    loop={false}
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">ENERGY HEALINGS IN PSYCHOLOGICAL STRESS CONDITIONS</h3>
                                <p className="text-neutral-400 pr-[2rem] text-justify w-[40vw] md:w-full">
                                    Due to stress environment many persons often fall physically or mentally ill. Negative emotions like violence, hatred, anger, non forgiveness manifest in speech and action. Negative thoughts like worries, doubt, fear, pessimism, sadness manifest as illness. Often personal and official relationship is affected. Taking sedatives, antidepressant drugs, sleeping pills has negative effect on brain and consciousness. Energy healing and meditation (yoga prana vidya app) are effective remedies to return to normal within few days or months.
                                </p>
                                {/* <p className="text-sm text-gray-500">- Jane Smith</p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div />
            </div>
        </>
    );
}