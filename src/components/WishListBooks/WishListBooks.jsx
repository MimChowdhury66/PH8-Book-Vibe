import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../Utility/localstorage";
import WishListBook from "../WishListBook/WishListBook";

const WishListBooks = () => {

    const books = useLoaderData();
    // console.log(books)
    const [bookWishList, setBookWishList] = useState([]);
    useEffect(() => {
        const storedWishIds = getStoredWishList();
        if (books.length > 0) {
            const wishList = [];
            for (const bookId of storedWishIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    wishList.push(book);
                }
            }
            setBookWishList(wishList)
            // console.log(storedWishIds, wishList, books)

        }
    }, [])


    return (
        <div className="grid gap-4">
            {
                bookWishList.map(book=><WishListBook book={book}></WishListBook>)
            }
        </div>
    );
};

export default WishListBooks;