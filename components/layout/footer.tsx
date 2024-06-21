import Container from "./container";

export default () => {
    return (
        <footer className="h-24 shadow-inner">
            <Container className="flex flex-col-reverse justify-center items-center h-full text-gray-400 sm:flex-row">
                <strong className="block text-base sm:mt-0">
                    © 2024. Jung Homin. All rights reserved.
                </strong>
            </Container>
        </footer>
    );
};
