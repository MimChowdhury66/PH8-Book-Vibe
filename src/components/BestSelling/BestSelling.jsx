import { useLoaderData } from "react-router-dom";
import BestBook from "../BestBook/BestBook";

const BestSelling = () => {
    const bestSellBooks = useLoaderData();
    // console.log(bestSellBooks)

    return (
        <div>
            <h1 className="text-center lg:text-2xl font-medium mb-10 mt-10">Here you can get Best Selling Books. Keep an eye on our webpage.</h1>
            <div>
                {
                    bestSellBooks.map(bestSellBook => <BestBook bestSellBook={bestSellBook}></BestBook>)
                }
            </div>
        </div>
    );
};

export default BestSelling;