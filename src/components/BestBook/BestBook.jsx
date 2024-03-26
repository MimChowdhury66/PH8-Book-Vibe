import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BestBook = ({ bestSellBook }) => {
    // console.log(bestSellBook)
    const { bookName, author, image, review, taka, category, } = bestSellBook;
    const handleBtn = () => toast('Successfully add to cart.')
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={image} alt="" className="h-80 w-1/2 container mx-auto lg:w-[250px] dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">{category} </span>
                            <h3 className="text-3xl font-bold">{bookName} </h3>
                            <p className="my-6 dark:text-gray-600">
                                <span className='font-bold'> Review:</span> {review} </p>
                            <hr />
                            <p><span className='font-bold'>Written By:</span> {author}</p>
                            <p className='font-semibold text-3xl text-green-400'>{taka}</p>
                            <button onClick={handleBtn} className="btn bg-[#23BE0A] text-white lg:w-1/5 mt-3">Buy Now</button>
                            <ToastContainer />


                        </div>

                    </div>


                </div>
            </section>
        </div>
    );
};

export default BestBook;