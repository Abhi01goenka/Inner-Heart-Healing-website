import { BackgroundLines } from "@/components/ui/background-lines";

export default function Services() {
    return (
        <>
            {/* Intro section */}
            <div className="relative flex flex-col items-center">
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <h2 className="bg-clip-text text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight text-neutral-200">
                        Virtual Visits / Healing Centre Visits Available!
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-300 dark:text-neutral-400 text-center">
                        We are offering direct healing to patients for a period of 15 days or more.
                        Distance / Virtual healings are available to hospitalized / ICU / immobile patients.
                    </p>
                </BackgroundLines>
            </div>

            {/* Services */}
            <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-[5rem]">
                <h1 className="text-4xl font-semibold dark:text-white h-[4rem]">
                    Our Services
                </h1>
                <section className="py-10">
                    <div className="container mx-auto bg-black px-4 space-y-12">
                        {/* Service 1 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-1.jpg" alt="Service 1" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Preventive Healings</h3>
                                <p className="text-gray-400 text-justify w-[45vw]">
                                    We offer a fortnight session of energy healing to susceptible patients for improving their immune system and prevent disease before they physicalize during seasonal variations.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-2.jpg" alt="Service 2" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Curative Healings</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    Energy Healing can cure  all health ailments ranging from common cold, asthma, hyper-tension gastrointestinal ailments, cysts, stones, etc without drugs.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-3.jpeg" alt="Service 3" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Direct Healings</h3>
                                <p className="text-gray-400 text-justify w-[45vw]">
                                    A healing practitioner utilizes multiple energy techniques to treat the entire body affected by chronic and acute diseases, rather than managing or suppressing them. Direct healing is given to all patients who visit the healing centre.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-4.jpg" alt="Service 4" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Distance Healings</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    Today we all can interact with each other through mobiles and internet...
                                    Yesterday what was a dream, today has become a reality in action.

                                    Similarly distance healing is a reality to all patients who cannot visit healing centers.
                                    People admitted to hospitals, people under post operative care, old debilated patients , Infants and distant patients living in other cities and remote villages, often need healing care.
                                    Even in traumatic situations of accident, heart attack or trauma ...distance healing saves many souls before reaching hospital.
                                    This healing efficacy is same as in person direct healing.
                                    Only photo and receptivity of person during healing session is required.

                                    In yoga prana Vidya healing technology , one can give distance healing to any person in any corner of world.
                                    Distance no longer is a limiting factor in ENERGY REALM .
                                    Any ailment can be treated of person with any age.
                                    After a few sessions , everyone starts feeling energy sessions and becomes receptive.
                                </p>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-5.jpg" alt="Service 5" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Relationship Healings</h3>
                                <p className="text-gray-400 text-justify pr-[4rem] w-[45vw]">
                                    Relationship healing are given in case of Mental Emotional stress between two or more people- official or personal.
                                    This service can be given to family conflicts , business  conflicts , divorce situations, Extra marital affairs etc.
                                </p>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-6.jpeg" alt="Service 6" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Infertility, Conception and Child Birth</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    Stress is major reason of infertility, delayed conception, Miscarriages in  couples.

                                    A  Monthly session of regular healings can bring conception miraculously without any IVF or higher techniques in earlier stages.

                                    PCOD , Fallopian Tube Obstruction, Weak uterus, frequent Miscarriages can be easily treated in integration with modern medicine.

                                    In mother womb a child absorbs all energies including emotions, thoughts, habits , fear, anger, pain ....

                                    Healings can be taken before conception to raise parents vibrations to attract higher souls.

                                    During fetus carrying period specially in earlier and late months healing can prevent/lower Miscarriages , gestation complications and keep mother child relationships in warmth of loving energy protecting them from environmental incongruities.

                                    The embryo absorbs all energies in  mother womb including thoughts and emotions .
                                </p>
                            </div>
                        </div>

                        {/* Service 7 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-7.jpeg" alt="Service 7" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Children Healings</h3>
                                <p className="text-gray-400 text-justify pr-[4rem] w-[45vw]">
                                    Frequent antibiotics,  low immunity, stress, anger, fear, OCD, school absentism, examination nervousness etc. can be easily treated in younger generations cause of their receptivity and younger bodies full of vitality.
                                    Even Hospitalized cases of emergency in children has better response rate  if integrated with healing.
                                </p>
                            </div>
                        </div>

                        {/* Service 8 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-8.jpeg" alt="Service 8" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Facial Healings</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    A face of a person is mirror image of his heart.
                                    If stress in chakras and koshas are healed along with affected parts scars, spots, pimples, moles , swelling , redness  then a glowing face without wrinkles can be observed within few sessions.
                                    Facial healing is an art in itself.
                                </p>
                            </div>
                        </div>

                        {/* Service 9 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-9.jpg" alt="Service 9" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Weight Loss healing</h3>
                                <p className="text-gray-400 text-justify pr-[4rem] w-[45vw]">
                                    Addictions to junk food, over eating, excessive stess may result in over accumulation of excess fat in certain parts .
                                    Healing sessions with little diet control can transform  energy fat and cure addictions.
                                </p>
                            </div>
                        </div>

                        {/* Service 10 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-10.jpg" alt="Service 10" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Pre-Post Surgery Healings</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    Many future surgeries can be prevented as  energies can regenerate organs to be operated or  removed.
                                    Healing given before ,during , after operations can enhance success rate, prevent blood loss, makes patient confident and lower fear and stress..
                                    Healing sessions can increase operated part to regenerate at much faster rate thereby increasing speedy recovery of patient. Healings are highly recommended in the case of fracture conditions.
                                </p>
                            </div>
                        </div>

                        {/* Service 11 */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-11.webp" alt="Service 11" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Sub-conscious Healings</h3>
                                <p className="text-gray-400 text-justify pr-[4rem] w-[45vw]">
                                    Many deep impressions , traumatic pains, phobias from past lives in childhood often haunts a person subconscious mind.
                                    If unattended they may result in Psycho somatic ailments like migraine, asthma, OCD, AUTISM(ASD), ADHD , BIPOLAR SYNDROME.
                                    Such ailments can be successfully treated by Healing which gradually removes negative impressions/samscaras  from subconscious and regenerates brain
                                </p>
                            </div>
                        </div>

                        {/* Service 12 */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <img src="/service-image-12.jpeg" alt="Service 10" className="rounded-lg shadow-lg w-full" />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold">Animal Healings</h3>
                                <p className="text-gray-400 text-justify pr-[2rem] w-[45vw]">
                                    Some of most miraculous cases were observed with our pets who are loving and receptive to energies.
                                    Energy healing can solve many untreatable cases including psychological pain and stress, depression,  injury , cancer etc. in animals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div />
            </div>

            {/* FAQ section */}
            <section className="py-10 bg-stone-900">
                <div className="container mx-auto px-4 place-items-center">
                    <h2 className="text-3xl font-semibold text-center text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {/* FAQ 1 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>What Is Holistic Health?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Holistic health is caring for the whole person. It is tending to your physical, mental, spiritual, and relationship needs, being aware of how all these aspects affect your overall health.
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>Can Energy Healing be integrated with modern medicine?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Yes, Energy Healing (Yoga Prana Vidya) is a complementary medicine and works very well in all acute and chronic cases. For Example, uncontrolled sugar and BP which are often due to unregulated lifestyle and stress shows marked results by healing along with modern medicine.
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>How much healing sessions are required?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                In the case of chronic ailments generally from 1 to 3 months (daily) healing sessions may solve the issue.
                                In hospitalized conditions and direct healings in centre, a fortnight healing may be enough.
                                Brain-related issues, Cancer may take longer time.
                                Everyone starts getting better right from the first healing.
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>Can serious disease like cancer be treated with success by distance healing?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Yes, many factors are responsible for success.<br/>
                                1. The severity, stage of the disease.<br/>
                                2. The receptivity and faith of the patient and the family<br/>
                                3. Karma and gratitude<br/>
                                Everyone is benefitted as higher beings and Gurus are involved in channelizing healing energies.
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>Does distance healing works in same fashion as direct healing?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Yes, in Yoga Prana Vidya Energy healings distance doesn't matter.
                            </div>
                        </div>

                        {/* FAQ 6 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>When we are travelling can we still get healing?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Yes
                            </div>
                        </div>

                        {/* FAQ 7 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>What are the requirements to start healing?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                1. Contact us through mail, message or WhatsApp.<br/>
                                2. Filling Registration form.<br/>
                                3. Photographs and reports of the patients for scanning.<br/>
                                4. Energy exchange/donation.
                            </div>
                        </div>

                        {/* FAQ 8 */}
                        <div className="border border-gray-700 rounded-md w-[70vw]">
                            <button
                                className="w-full flex justify-between items-center p-4 bg-neutral-900 hover:bg-neutral-800 text-left text-white font-medium focus:outline-none"
                                onClick={(e) => {
                                    const target = e.target as HTMLElement;
                                    const content = target.nextElementSibling as HTMLElement;
                                    if (content) {
                                        content.style.display =
                                            content.style.display === "none" || !content.style.display
                                                ? "block"
                                                : "none";
                                    }
                                }}
                            >
                                <span>Can we learn healing and become a healer?</span>
                                <span className="text-xl">+</span>
                            </button>
                            <div className="p-4 bg-neutral-800 text-gray-300" style={{ display: "none" }}>
                                Yes, anyone above 16 years of age with minimal knowledge of reading and writing can learn healing in 2 days. Direct and online workshops are scheduled regularly every month.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}