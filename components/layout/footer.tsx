import Container from "./container";

export default () => {
    return (
        <footer className="h-24 bg-gray-100 shadow-inner">
            <Container className="flex flex-col-reverse justify-center items-center h-full text-gray-500 sm:flex-row">
                <strong className="block mt-4 text-base sm:mt-0">
                    © 2023 Jung Homin
                </strong>
            </Container>
        </footer>
    );
};
