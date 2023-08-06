import Link from "next/link";
import Image from "next/image";
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
            .browse({ limit: 20 })
            .then((posts) => {
                setPosts(posts);
                console.log(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="flex flex-col grow h-full mx-auto max-w-2xl">
            {posts.length ? (
                <ul className="grow h-full space-y-20">
                    {posts.map((post: any) => {
                        return (
                            <li key={post.id}>
                                <h3 className="text-sm font-semibold truncate hover:text-black">
                                    <Link href={post.url} target="_blank">
                                        <Image
                                            className="shadow-lg rounded mb-4"
                                            src={post.feature_image}
                                            alt={post.title}
                                            width={680}
                                            height={380}
                                        />
                                        <h3 className="mb-1 text-2xl font-normal text-gray-900">
                                            {post.title}
                                        </h3>
                                    </Link>
                                </h3>

                                <time
                                    className="block text-base font-normal text-gray-600"
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
