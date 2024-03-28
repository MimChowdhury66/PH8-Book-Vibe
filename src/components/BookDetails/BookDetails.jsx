import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadList } from "../../Utility/localstorage";
import { useState } from "react";



const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);

    const book = books.find(book => book.bookId === bookIdInt);
    // console.log(book)


    const handleReadList = () => {
        saveReadList(bookIdInt);
        // toast.success("This book is added to read list");
    }



    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.image} className="bg-base-200 rounded-lg shadow-2xl lg:ml-[86px] lg:w-[300px]" />
                <div>
                    <h1 className="text-4xl font-bold">{book.bookName}</h1>
                    <p className="py-2 text-xl font-medium">By: {book.author}</p>
                    <hr />
                    <p className="py-1 text-xl font-medium">{book.category}</p>
                    <hr />
                    <p className="py-2 text-base font-medium"><span className="font-bold">Review:</span> {book.review}</p>
                    <p className="py-2 text-base font-medium text-[#23BE0A]"><span className="font-bold text-black">Tag:</span> {book.tags.map(tag => <span>#{tag}.  </span>)}</p>
                    <hr />
                    <div className="mt-4 flex gap-10 mb-8">
                        <div>
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div>
                            <p className="font-semibold">{book.totalPages} </p>
                            <p className="font-semibold">{book.publisher} </p>
                            <p className="font-semibold">{book.yearOfPublishing} </p>
                            <p className="font-semibold">{book.rating} </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleReadList} className="btn  btn-outline ">Read</button>
                        <button className="btn bg-[#50B1C9] btn-outline text-white">Wish List</button>
                        <ToastContainer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;