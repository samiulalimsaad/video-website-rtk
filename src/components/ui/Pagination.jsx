import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../features/filter/filterSlice";

const perPage = [2, 5, 10, 15, 20];
const totalPage = [1, 2, 3, 4, 5, 6];

export default function Pagination() {
    const filter = useSelector((state) => state.filter);

    const dispatch = useDispatch();

    const [page, setPage] = useState(filter.page);
    const [limit, setLimit] = useState(filter.limit);

    useEffect(() => {
        setPage(filter.page);
    }, [filter.page]);

    useEffect(() => {
        setLimit(filter.limit);
    }, [filter.limit]);

    const handlePage = (p) => {
        dispatch(filterActions.pageUpdated(p));
    };

    const handleLimit = (e) => {
        dispatch(filterActions.limitUpdated(e.target.value));
    };

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {totalPage.map((v) => (
                    <div
                        key={v}
                        className={`px-4 py-1 rounded-full cursor-pointer ${
                            v === page
                                ? "bg-blue-600 text-white"
                                : "bg-blue-100 text-blue-600"
                        }`}
                        onClick={() => handlePage(v)}
                    >
                        {v}
                    </div>
                ))}
                <select
                    className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full"
                    value={limit}
                    onChange={handleLimit}
                >
                    {perPage.map((v) => (
                        <option key={v} value={v}>
                            {v} per page
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}
