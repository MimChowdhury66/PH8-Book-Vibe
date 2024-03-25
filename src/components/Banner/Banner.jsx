import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero  bg-base-200 mt-4 lg:mt-12 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/vBkGb4L/banner.png" className=" rounded-lg my-4 lg:ml-[86px]" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <Link to='/listed'><button className="btn bg-[#23BE0A] text-white mt-5 lg:mt-12">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;