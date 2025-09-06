import BookCard from "./BookCard";
import goa from "../../assets/img/gardenofashes.jpg";
import redwolf from "../../assets/img/redwolf.jpeg";
import immortals from "../../assets/img/immortals.jpg";
import { useEffect } from "react";
import AOS from "aos";

export default function NewBooks(){
    useEffect(() => {
        AOS.init({
            once: true, 
        });
    }, [])
    const books = [
        {
            title: "The Garden of Ashes",
            author: "Van De Beek",
            price: "15000",
            cover: goa,
            tag: "Horror"
        },
        {
            title: "Red Wolf",
            author: "Jenna Wood",
            price: "25000",
            cover: redwolf,
            tag: "Fantasy"
        },
        {
            title: "Immortals",
            author: "McGregor",
            price: "18000",
            cover: immortals,
            tag: "Mythic"
        }
    ]
    return(
        <div className="mt-15">
            <h2 className="ml-19 text-3xl new-rel font-semibold" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">New Releases</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-5">
                {books.map((book, index) => (
                    <BookCard
                    key={index}
                    cover={book.cover}
                    title={book.title}
                    author={book.author}
                    price= {book.price}
                    tag={book.tag}
                    dataAosDelay={200 * index}
                    />
                ))}
            </div>
        </div>
    );
}