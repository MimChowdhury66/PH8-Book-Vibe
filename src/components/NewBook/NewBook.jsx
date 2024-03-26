import { CiStar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewBook = ({ newBook }) => {
    const { bookName, author, image, rating, category, publisher,yearOfPublishing } = newBook;

    const handleBtn = () => toast("Successsfully added to the cart.");
    return (
        < div className="card card-side bg-base-100 shadow-xl" >

            <figure><img src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Written By: {author}

                </p>
                <hr />
                <div className="flex">
                    <p className="flex items-center gap-2 text-base font-medium"><MdCategory />
                        Category: {category}</p>
                    <p className="flex items-center gap-2 text-base font-medium"><FaRegUser />
                        Publisher: {publisher}</p>
                </div>
                <hr />
                <div className="flex">
                <p className="flex items-center gap-2 text-base font-medium"><CiStar />{rating}</p>
                <p>Published Year: { yearOfPublishing}</p>

                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleBtn} className="btn bg-[#23BE0A] text-white">Buy Now</button>
                    <ToastContainer />

                </div>
            </div>
        </div >
    );
};

export default NewBook;