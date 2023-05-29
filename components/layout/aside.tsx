import Gnb from "./gnb";
import Profile from "../profile";
import BlogPosts from "../blogPosts";

export default function Aside() {
    return (
        <div className="relative flex flex-col w-1/4 max-w-xs shrink-0 px-6 py-8 text-white bg-main overflow-scroll scrollbar-hide">
            <Profile />
            <Gnb />
            <BlogPosts />
            <div className="absolute right-0 top-1/4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
        </div>
    );
}
