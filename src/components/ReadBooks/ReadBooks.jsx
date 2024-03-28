import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/localstorage";
import { FaArrowDown } from "react-icons/fa";

import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = () => {

    const books = useLoaderData();

    const [bookReadList, setBookReadList] = useState([]);

    useEffect(() => {
        const storedReadIds = getStoredReadList();
        if (books.length > 0) {
            const readList = [];
            for (const bookId of storedReadIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    readList.push(book);
                }
            }
            setBookReadList(readList)
            // console.log(storedReadIds, readList, books)

        }
    }, [])


    return (
        <div>
            
            <div className="grid gap-4 ">

                {
                    bookReadList.map(book => <ReadBook book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;