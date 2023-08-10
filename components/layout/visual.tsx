import Container from "./container";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="mb-12 shadow-md bg-white sm:mb-16">
            <Container>{children}</Container>
        </div>
    );
};
