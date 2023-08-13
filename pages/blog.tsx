import BlogPosts from "@/components/blogPosts";
import Container from "@/components/layout/container";
import Layout from "@/components/layout/layout";
import { SubVisual } from "@/components/layout/visual";

export default () => {
    return (
        <Layout>
            <>
                <SubVisual
                    title="BLOG"
                    text="공유의 힘을 믿습니다. 직접 공부하고 배운 것을 정리해놓은 블로그를 운영중입니다."
                    src="/images/profile.png"
                    alt="blog"
                />
                <Container>
                    <BlogPosts />
                </Container>
            </>
        </Layout>
    );
};
