import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../features/filter/filterSlice";

const perPage = [2, 5, 10, 15, 20];

export default function Pagination() {
    const filter = useSelector((state) => state.filter);
    const { videos, total } = useSelector((state) => state.videos);
    const dispatch = useDispatch();

    const [page, setPage] = useState(filter.page);
    const [limit, setLimit] = useState(filter.limit);

    const totalPage = new Array(Math.ceil(total / limit)).fill(1);

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
        dispatch(filterActions.pageUpdated(1));
        dispatch(filterActions.limitUpdated(+e.target.value));
    };

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {totalPage.map((_, v) => (
                    <div
                        key={v}
                        className={`px-4 py-1 rounded-full cursor-pointer ${
                            v + 1 === page
                                ? "bg-blue-600 text-white"
                                : "bg-blue-100 text-blue-600"
                        }`}
                        onClick={() => handlePage(v + 1)}
                    >
                        {v + 1}
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
