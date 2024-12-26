import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/components/Testimonials-testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <>
            <AuroraBackground>
                {/* Heading */}
                <h1 className="text-4xl font-bold text-white text-center mt-[6rem] md:mt-[4rem]">Testimonials</h1>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="min-h-screen relative flex flex-col gap-4 items-center justify-center"
                >
                    <div className="flex flex-col items-center justify-center">
                        {/* Testimonials Section */}
                        <div className="max-w-7xl">
                            <AnimatedTestimonials testimonials={testimonials} />
                        </div>
                    </div >
                </motion.div>
            </AuroraBackground>

            {/* Some other Testimonials section */}
            <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-[5rem]">
                <h1 className="text-4xl text-center font-semibold text-white h-[4rem]">
                    Some other Testimonials
                </h1>
                <section className="py-10">
                    <div className="container mx-auto bg-black px-4 space-y-12">
                        {/* Testimonial 1 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="md:w-1/2">
                                <img src="/other-testimonial-1.jpeg" alt="Testimonial 1" className="rounded-lg shadow-lg w-full mb-[1rem]" />
                            </div>
                            <div className="md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Heart Issue</h3>
                                <p className="text-gray-400 text-justify italic font-bold">
                                    "Atma namaste.. I am Dr. Medha Tripathi, dentist by profession .. My father who is 60 years old was facing health issues regarding heart.. His current flow stop for a fraction of seconds, once he fainted and fell down from stairs... In April 2019 he went through a pace maker surgery. He was having diabetes... After sum days puss started coming from the right side where pacemaker machine was fitted. Again after 4 months he was admitted to hospital for treatment of that infected area. Nothing happened for permanent.
                                    <br />
                                    Now in March his whole pace maker machine came out on its own. He had to urgently rush to the hospital. Pacemaker and it's wire was removed.. He had 100 times more pain at time of removal than the placement of pacemaker and it's wire... I contacted Pradeep sir for his healing so that his wound may heal properly and his pain may be subsided.. Healing helped a lot.  His pain started decreasing, and wound started healing. His one leg was tied to the bed as temporary pacemaker was attached . He has to lie down in one position.. it was very painful... But due to healing his back pain was  subsided.. His right wound healed n after that stiches where given. After few days a new pacemaker was fitted on his left side.. his wound of both side healed very quickly and doctors discharged him.. I'm thankful to Pradeep sir and Soniya ma'am for there support, care and blessing..  Now my father is fine and hope same for the future.. sir and ma'am we always need your support, motivation and blessing.. Thank you"
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="md:w-1/2">
                                <img src="/other-testimonial-2.jpeg" alt="Testimonial 2" className="rounded-lg shadow-lg w-full mb-[1rem]" />
                            </div>
                            <div className="md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Lumbar Paralysis</h3>
                                <p className="text-gray-400 text-justify md:pr-[2rem] italic font-bold">
                                    "My cat Lulu has Lumbar paralysis. Suddenly she stopped walking at all. It was an ordeal for her to even take a step. Then Pradeep ji healed her. Now she is much better and walks like she earlier did. There has been a drastic change in her. I would like to thank Pradeep ji for his kindness."
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="md:w-1/2">
                                <img src="" alt="Testimonial 3" className="rounded-lg shadow-lg w-full h-fit mb-[1rem]" />
                            </div>
                            <div className="md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Asthama Healing</h3>
                                <p className="text-gray-400 text-justify italic font-bold">
                                    "Pranam,
                                    <br />
                                    I'm Shweta Harsana and currently I'm pursuing my Masters Degree in Clinical psychology. I'm 22 years old. I'm suffering from Aasthma when I was 6 years old . By the time my illness intensity was increasing day by day and there was lot of negativity inside me but after healing now I feel relaxed, calm and lot enthusiasm inside me . It brings positivity and reduce the intensity of Aasthma . Before healing I suffered from physical problems like, palpations , headache, back pain etc . Healing also reduce these physical problems.
                                    <br />
                                    Thank you Maharaj ji ,
                                    <br />
                                    Thank you pradeep sir,
                                    <br />
                                    For bringing positivity in my life and make it beautiful again..."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div />
            </div>
        </>
    );
}