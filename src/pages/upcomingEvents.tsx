import React from "react";
import { events } from "@/components/events";

const UpcomingEvents = () => {
    return (
        <>
            <header className="bg-neutral-900 text-white text-center py-10">
                <h1 className="text-4xl font-bold">Upcoming Events</h1>
            </header>
            <div className="min-h-screen bg-neutral-950 text-white py-10">
                <div className="container mx-auto px-4 w-[90vw]">
                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="p-6 bg-neutral-800 rounded-lg shadow-md space-y-4 transform transition-transform duration-300 hover:scale-105 hover:bg-neutral-700 hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold group-hover:text-yellow-400">
                                            {event.name}
                                        </h2>
                                        <p className="text-gray-400">{event.date}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <p className="text-sm text-gray-400">Time: {event.time}</p>
                                        <p className="text-sm text-gray-400">Venue: {event.venue}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingEvents;
