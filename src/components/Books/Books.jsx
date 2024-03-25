import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json()
                .then(data => setBooks(data)))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Books {books.length} </h1>
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;