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
        <div className="font-han flex flex-col grow h-full text-sub">
            <h2 className="font-han text-base">RECENTLY ON MY BLOG</h2>
            {posts.length ? (
                <ul className="grow h-full space-y-4 pt-4 overflow-auto">
                    {posts.map((post: any) => {
                        return (
                            <li key={post.id}>
                                <Link href={post.url} target="_blank">
                                    <h3 className="text-sm font-semibold truncate hover:text-black">
                                        {post.title}
                                    </h3>
                                </Link>
                                <time
                                    className="block text-xs font-medium text-right"
                                    dateTime={post.created_at.split("T")[0]}
                                >
                                    {post.created_at
                                        .split("T")[0]
                                        .replaceAll("-", ".")}
                                </time>
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
