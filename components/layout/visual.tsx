import Container from "./container";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="mb-16 shadow-md bg-white">
            <Container>{children}</Container>
        </div>
    );
};
