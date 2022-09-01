import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/lws.svg";
import searchImage from "../../assets/search.svg";
import { filterActions } from "../../features/filter/filterSlice";
import Search from "./Search";

export default function Navbar() {
    const dispatch = useDispatch();

    const filterResetHandler = () => {
        dispatch(filterActions.reset());
    };

    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <Link to="/">
                    <img
                        className="h-10"
                        src={logoImage}
                        alt="Learn with Sumit"
                    />
                </Link>
                <div className="flex items-center">
                    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                        <Search />
                        <img
                            className="inline h-4 cursor-pointer"
                            src={searchImage}
                            alt="Search"
                        />
                    </div>
                    <div
                        className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full hover:bg-sky-500 hover:text-sky-50 cursor-pointer flex items-center gap-1"
                        onClick={filterResetHandler}
                    >
                        reset <span>x</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
