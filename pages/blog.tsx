import BlogPosts from "@/components/blogPosts";
import Container from "@/components/layout/container";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";

export default () => {
    return (
        <Layout>
            <>
                <Visual>
                    <div>test</div>
                </Visual>
                <Container>
                    <BlogPosts />
                </Container>
            </>
        </Layout>
    );
};
