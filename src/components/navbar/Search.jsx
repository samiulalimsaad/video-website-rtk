import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { filterActions } from "../../features/filter/filterSlice";

export default function Search() {
    const search = useSelector((state) => state.filter.search);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const matched = useMatch("/");

    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(search || "");
    }, [search]);

    const onSearch = (e) => {
        e.preventDefault();
        dispatch(filterActions.searched(input));
        !matched && navigate("/");
    };

    return (
        <form onSubmit={onSearch}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
