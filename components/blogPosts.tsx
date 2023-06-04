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
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="flex flex-col grow h-full max-lg:hidden">
            <h2 className="mb-2 font-han text-base">블로그 최신 글</h2>
            {posts.length ? (
                <ul className="grow h-full space-y-3">
                    {posts.map((post: any) => {
                        return (
                            <li key={post.id}>
                                <h3 className="text-sm font-semibold truncate hover:text-black">
                                    <Link href={post.url} target="_blank">
                                        {post.title}
                                    </Link>
                                </h3>

                                <time
                                    className="block text-xs font-medium"
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
                <span>최신 글 불러오는 중...</span>
            )}
        </div>
    );
}
