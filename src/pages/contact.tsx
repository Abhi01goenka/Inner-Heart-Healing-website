import { useState, ChangeEvent, FormEvent } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Your message has been sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert("Failed to send your message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <BackgroundBeamsWithCollision>
                <div className="flex flex-col items-center justify-center px-4">
                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-center mt-[2rem]">Contact Us</h1>
                </div>
                <div className="min-h-screen flex items-center justify-center text-white py-10">
                    <div className="w-full max-w-lg rounded-lg shadow-2xl p-10 bg-stone-900 z-[400]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-neutral-900 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 hover:shadow-lg transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-neutral-900 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 hover:shadow-lg transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-neutral-900 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 hover:shadow-lg transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-neutral-900 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 hover:shadow-lg transition-all"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center h-fit pb-[2rem] flex-col px-4">
                    <div className="flex flex-col items-center space-y-4">
                        <a
                            href="https://api.whatsapp.com/send/?phone=919260955885&text&type=phone_number&app_absent=0"
                            target="_blank"
                            className="w-[40vw] py-3 text-lg font-semibold text-black bg-white rounded-lg hover:bg-green-700 transition-all text-center"
                        >
                            Message us on WhatsApp
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-fit pt-[2rem] pb-[4rem] flex-col px-4">
                    <p className="text-white dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto text-center font-bold">
                        The Inner Heart Healing Centre
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto text-center">
                        Him City Colony, Matiyari, Kamta, Lucknow, Uttar Pradesh, India
                    </p>
                </div>
                <div className="flex justify-center items-center h-fit pb-[4rem] flex-col px-4">
                    <p className="text-white dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto text-center font-bold">
                        Hours
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto text-center">
                        Monday - Sunday: 11 am to 1 pm (By Appointment)
                    </p>
                </div>
            </BackgroundBeamsWithCollision>
            {/* Map Section */}
            <div className="w-full flex flex-col items-center space-y-6 pb-[2rem]">
                {/* Map */}
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Centre Location"
                        src="https://maps.google.com/maps?q=26.8832853,81.0390063&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Get Directions Button */}
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=26.8832853,81.0390063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                    Get Directions
                </a>
            </div>
        </>

    );
};

export default ContactUsPage;
