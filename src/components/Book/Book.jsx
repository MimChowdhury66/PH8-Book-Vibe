import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Book" className="rounded-xl shadow-2xl" />
                </figure>
                <div className="card-body  ">
                    <p className="text-[#23BE0A] ">
                        {
                            tags.map(tag => <span>{tag}.  </span>)
                        }
                    </p>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="text-base font-medium">By: <span className="font-bold">{author}</span> </p>
                    <hr className="border border-dashed" />
                    <div className="flex gap-40 ">
                        <p className="text-base font-medium">{category}</p>
                        <p className="flex items-center gap-2 text-base font-medium">{rating} <CiStar />
                        </p>
                    </div>
                </div>
            </div>
        </Link>




    );
};

export default Book;