import { FaArrowDown } from "react-icons/fa";

const ListedBooks = () => {
    return (
        <div>
            <div className="mt-8 mb-8 bg-slate-200 rounded-2xl">
                <h1 className="text-3xl font-bold text-center p-4 ">Books</h1>
            </div>
            <div className="flex justify-center">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white ">Sort By <FaArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>





        </div>
    );
};

export default ListedBooks;