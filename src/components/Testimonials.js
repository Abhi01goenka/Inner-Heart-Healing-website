import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Testimonials = () => {
    return (
        <div className="h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <h1 className="text-4xl font-semibold dark:text-white h-[4rem]">
                Testimonials
            </h1>
            <section className="py-10">
                <div className="container mx-auto bg-black px-4 space-y-12">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">OUR PRIME MINISTER ON AURA SCIENCE</h3>
                            <p className="text-gray-700 text-justify">
                                Our prime minister speech in AIIMS about AURA scanning and energy healing technology.
                            </p>
                            {/* <p className="text-sm text-gray-500">- John Doe</p> */}
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">TESTIMONIAL FOR SPINAL HERNIATED DISC</h3>
                            <p className="text-gray-700">
                                Of late, we are receiving many cases of herniated disc and sciatica in which the patient feels extreme pain in day-to-day work. This occurs mostly due to prolong stress and wrong postures leading to the gradual degeneration of the vertabral disc. YPV Healing with meditation from 15 days to few months may regenerate the vertabrae and destress the inner bodies. The healing sessions may be integrated with physiotherapy and medicine.
                            </p>
                            {/* <p className="text-sm text-gray-500">- Jane Smith</p> */}
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">THROAT INFECTION HEALING</h3>
                            <p className="text-gray-700">
                                Throat is an area of thinking and is linked to planning and execution.

                                Due to excessive thinking mind, embalmed with fear, doubts, pessimism, sadness ,

                                throat chakra which is responsible for supplying prana / energy to throat areas specially larynx, pharynx become dirty and in long run become susceptible to infection.

                                A small change in season brings viral or bacterial infection inviting antibiotics treatment.

                                Yoga prana vidya healing sessions cleans all CHAKRAS along with throat and strengthen and regenerated affected organ .

                                It also cleanses residual excessive fear patterns, pessimism etc thereby making person more positive and free from mental stress and seasonal infection.

                                Please watch a young student/ patient from a rural BACKROUND , transformation into a confident healer.
                            </p>
                            {/* <p className="text-sm text-gray-500">- John Doe</p> */}
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">HEALING TESTIMONIAL IN MULTIPLE AILMENTS</h3>
                            <p className="text-gray-700">
                                All ailments are related to the disturbance of inner emotional and mental vehicles. Long-term relationship issues, anger, hatred due to family situations, pent-up emotions may result in multiple issues in the long run. Yoga Prana Vidya healing cleanses the inner bodies of all negative energies and facilitates the flow of prana thus, normalizing the physical body. The therapy takes 15 days to few months.
                            </p>
                            {/* <p className="text-sm text-gray-500">- Jane Smith</p> */}
                        </div>
                    </div>

                    {/* Testimonial 5 */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">LOOSE BOWEL MOVEMENTS, ACIDITY AND ARTHRITIS</h3>
                            {/* <p className="text-sm text-gray-500">- John Doe</p> */}
                        </div>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">TESTIMONIAL FOR DIABETES</h3>
                            {/* <p className="text-sm text-gray-500">- Jane Smith</p> */}
                        </div>
                    </div>

                    {/* Testimonial 7 */}
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <div className="w-full md:w-1/2">
                            <video controls className="rounded-lg shadow-lg w-full">
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl font-bold">COVID HOSPITALIZATION CASE</h3>
                            {/* <p className="text-sm text-gray-500">- John Doe</p> */}
                        </div>
                    </div>

                </div>
            </section>
            <div />
        </div>
    );
};

export default Testimonials;
