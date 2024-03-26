import { useLoaderData } from "react-router-dom";
import NewBook from "../NewBook/NewBook";

const NewArrival = () => {

    const newBooks = useLoaderData();
    // console.log(newBooks);

    return (
       
        <div>
            <h1 className="text-center lg:text-2xl font-medium mb-10 mt-10">Here you can get New Arrival Books every WeeK!! Keep an eye on our webpage</h1>
             <div className="grid lg:grid-cols-2 gap-6 mb-6 mt-6">
            
            {
                newBooks.map(newBook => <NewBook newBook={newBook}></NewBook>)
            }
        </div>
       </div>




    );
};

export default NewArrival;