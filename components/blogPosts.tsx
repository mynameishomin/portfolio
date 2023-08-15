import Link from "next/link";
import Image from "next/image";
import GhostContentAPI from "@tryghost/content-api";
import { ghostApiKey, ghostUrl } from "@/utils/variable";
import { useEffect, useState } from "react";
import Card from "./Card";

interface BlogPostsProps {
    id: string;
    title: string;
    feature_image: string;
    created_at: string;
    url: string;
}

const api = new GhostContentAPI({
    url: ghostUrl,
    key: ghostApiKey,
    version: "v5.0",
});

export default function BlogPosts() {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        api.posts
            .browse({ limit: 21 })
            .then((posts) => {
                setPosts(posts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="flex flex-col grow h-full">
            <ul className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.length
                    ? posts.map((post: BlogPostsProps) => {
                          return (
                              <li key={post.id}>
                                  <Link href={post.url}>
                                      <Card
                                          title={post.title}
                                          src={post.feature_image}
                                          subText={post.created_at
                                              .split("T")[0]
                                              .replaceAll("-", ".")}
                                      />
                                  </Link>
                              </li>
                          );
                      })
                    : [1, 2, 3].map((item) => {
                          return (
                              <li key={item}>
                                  <Card />
                              </li>
                          );
                      })}
            </ul>
        </div>
    );
}
