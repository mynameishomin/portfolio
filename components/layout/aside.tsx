import Gnb from "./gnb";
import Profile from "../profile";
import BlogPosts from "../blogPosts";

export default function Aside() {
    return (
        <div className="flex flex-col lg:w-64 shrink-0 px-6 lg:py-8">
            <Profile />
            {/* <Gnb /> */}
            <BlogPosts />
        </div>
    );
}
