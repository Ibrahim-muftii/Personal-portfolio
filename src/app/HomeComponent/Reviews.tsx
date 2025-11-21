"use client"

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

type Review = {
    id: number;
    name: string;
    role: string;
    image: string;
    review: string;
    rating: number;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO at TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        review: "Working with Ibrahim was an absolute pleasure. His attention to detail and ability to translate our vision into a stunning reality exceeded our expectations.",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        review: "The level of creativity and technical expertise brought to our project was outstanding. The final product is not only beautiful but highly functional.",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        review: "Ibrahim delivered a top-tier website that has significantly increased our user engagement. Highly recommended for anyone looking for premium web development.",
        rating: 5,
    },
    {
        id: 4,
        name: "David Wilson",
        role: "Startup Founder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        review: "Exceptional service and code quality. The team went above and beyond to ensure our launch was a success. I couldn't be happier with the results.",
        rating: 5,
    },
    {
        id: 5,
        name: "Jessica Brown",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
        review: "A true professional who understands modern design trends. The animations and interactions implemented are smooth and engaging.",
        rating: 5,
    },
    {
        id: 6,
        name: "Robert Taylor",
        role: "CTO at Innovate",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
        review: "Technical proficiency is top-notch. Solved complex problems efficiently and delivered a robust, scalable solution for our platform.",
        rating: 5,
    },
];

const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <div className="w-full h-full p-8 rounded-3xl bg-[#262626] border border-violet-900/50 hover:border-purple-600 transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-600 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4">
                <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-600/50 group-hover:border-purple-600 transition-colors"
                />
                <div className="text-left">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                </div>
            </div>

            <div className="flex gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                ))}
            </div>

            <p className="text-gray-300 leading-relaxed text-left italic line-clamp-4">
                "{review.review}"
            </p>
        </div>
    );
};

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 container max-w-6xl mx-auto flex flex-col justify-center items-center text-center gap-y-12 px-4 overflow-hidden">
            <div className="flex flex-col gap-2">
                <h3 className="heading-text pb-3!">What People Say</h3>
                <p className="paragraph-text max-w-2xl mx-auto">
                    Don't just take my word for it. Here's what <span className="text-purple-600">clients</span> and <span className="text-purple-600">collaborators</span> have to say about my work.
                </p>
            </div>

            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        "--slide-index": currentIndex
                    } as React.CSSProperties}
                >

                    <div className="flex w-full transition-transform duration-1000 ease-in-out transform translate-x-[calc(var(--slide-index)*-100%)] md:translate-x-[calc(var(--slide-index)*-33.33%)]">
                        {reviews.map((review) => (
                            <div key={review.id} className="min-w-full md:min-w-[33.33%] px-4">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
