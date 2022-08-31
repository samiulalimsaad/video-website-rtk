import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { updateLikes, updateUnlikes } from "../../features/video/videoSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
    const dispatch = useDispatch();

    const handleLikes = () => {
        dispatch(updateLikes({ id, likes }));
    };

    const handleUnlikes = () => {
        dispatch(updateUnlikes({ id, unlikes }));
    };

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1 cursor-pointer" onClick={handleLikes}>
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer" onClick={handleUnlikes}>
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
