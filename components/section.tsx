import Container from "./layout/container";
import LineTitle from "./lineTitle";

export default ({
    title,
    children,
}: {
    title: String;
    children: React.ReactElement;
}) => {
    return (
        <Container>
            <>
                <LineTitle>{title}</LineTitle>
                {children}
            </>
        </Container>
    );
};
