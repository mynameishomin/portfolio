import Gnb from "./gnb";
import Profile from "../profile";
import BlogPosts from "../blogPosts";

export default function Aside() {
    return (
        <div className="flex flex-col w-1/4 shrink-0 px-6 py-8 bg-main">
            <Profile />
            {/* <Gnb /> */}
            <BlogPosts />
        </div>
    );
}
