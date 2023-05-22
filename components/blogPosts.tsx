import Link from "next/link";
import GhostContentAPI from "@tryghost/content-api";
import { ghostApiKey, ghostUrl } from "@/utils/variable";
import { useEffect, useState } from "react";

const api = new GhostContentAPI({
    url: ghostUrl,
    key: ghostApiKey,
    version: "v5.0",
});

export default function BlogPosts() {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        api.posts
            .browse({ limit: 10 })
            .then((posts) => {
                setPosts(posts);
                console.log(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="flex flex-col grow h-full overflow-hidden">
            <h2 className="mb-2 text-xl text-gray-400">블로그 포스트</h2>
            {posts.length ? (
                <ul className="grow h-full space-y-6 pt-4 border-t-2 border-gray-500 overflow-auto">
                    {posts.map((post: any) => {
                        return (
                            <li
                                key={post.id}
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                <Link href={post.url} target="_blank">
                                    <h3 className="mb-2 text-lg truncate">
                                        {post.title}
                                    </h3>
                                    <p className="max-h-14 text-ellipsis overflow-hidden text-sm">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <span>아직 안 불러옴</span>
            )}
        </div>
    );
}
