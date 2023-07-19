import Container from "./container";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="mb-14 py-12 shadow-md">
            <Container>{children}</Container>
        </div>
    );
};
