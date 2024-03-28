import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { IoMdPaper } from "react-icons/io";
const WishListBook = ({ book }) => {
    // console.log(book)


    const { bookId, bookName, image, author, category, publisher, yearOfPublishing, rating, tags, totalPages } = book;
    return (
        < div className="card card-side bg-base-100 shadow-xl lg:w-[800px]" >

            <figure><img className="lg:h-[200px]" src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Written By: {author}

                </p>
                <hr />
                <div className="lg:flex items-center">
                    <p className="py-2 text-base font-medium text-[#23BE0A]"><span className="font-bold text-black">Tag:</span> {tags.map(tag => <span>#{tag}.  </span>)}</p>

                    <p className="flex items-center gap-1"><IoLocationOutline />
                        Published Year: {yearOfPublishing}</p>

                </div>
                <hr />
                <div className="flex">
                    <p className="flex items-center gap-2 text-base "><FiUsers />
                        Publisher: {publisher}</p>
                    <p className="flex items-center gap-3"><IoMdPaper />

                        Page {totalPages}</p>



                </div>
                <hr />
                <div className="grid lg:flex gap-1">
                    <p className="flex items-center gap-2 text-base text-[#328EFF]">
                        Category: {category}</p>
                    <p className="flex items-center gap-2 text-base text-[#FFAC33] ">Rating: {rating}</p>
                    <Link to={`/book/${bookId}`}>                        <button className="btn bg-[#23BE0A] text-white">View Details</button>
                    </Link>

                </div>

            </div>
        </div >

    );
};

export default WishListBook;