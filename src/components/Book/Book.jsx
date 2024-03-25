import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags } = book;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Book" className="rounded-xl " />
            </figure>
            <div className="card-body  ">
                <p className="text-[#23BE0A] ">
                    {
                        tags.map(tag => <span>{tag}.  </span>)
                    }
                </p>
                <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                <p className="text-base font-medium">By: {author} </p>
                <hr className="border border-dashed" />
                <div className="flex gap-40 ">
                    <p className="text-base font-medium">{category}</p>
                    <p className="flex items-center gap-2 text-base font-medium">{rating} <CiStar />
                    </p>
                </div>
            </div>
        </div>

        
    );
};

export default Book;