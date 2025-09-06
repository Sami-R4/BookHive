import DiscussionCard from "./DiscussionCard";
import AOS from 'aos';
import { useEffect } from "react";

export default function DiscusionSec(){
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);
    const discussion = [
        {
            title: 'The best books online today 2025',
            user: 'John Doe',
            snippet: "The best books in 2025 are immortals and redwolf with a record 4billion sales and 3billion dollars in revenue. Written by Mcgregor and Jenna Wood",
            likes: '20',
            comments: '15'
        },
        {
            title: 'The best books online today 2025',
            user: 'John Doe',
            snippet: "The best books in 2025 are immortals and redwolf with a record 4billion sales and 3billion dollars in revenue. Written by Mcgregor and Jenna Wood",
            likes: '20',
            comments: '15'
        },
        {
            title: 'The best books online today 2025',
            user: 'John Doe',
            snippet: "The best books in 2025 are immortals and redwolf with a record 4billion sales and 3billion dollars in revenue. Written by Mcgregor and Jenna Wood",
            likes: '20',
            comments: '15'
        },
        {
            title: 'The best books online today 2025',
            user: 'John Doe',
            snippet: "The best books in 2025 are immortals and redwolf with a record 4billion sales and 3billion dollars in revenue. Written by Mcgregor and Jenna Wood",
            likes: '20',
            comments: '15'
        }
    ]
    return(
        <div className="flex justify-center gap-4 my-8 mx-4">
            {discussion.map((d,i) => (
                <DiscussionCard
                key={i}
                title={d.title}
                user={d.user}
                snippet={d.snippet}
                likes={d.likes}
                comments={d.comments}
                dataAosDelay={200 * i}
                />
            ))}
        </div>
    );
}