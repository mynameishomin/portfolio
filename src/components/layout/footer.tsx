import Container from "./container";

export default () => {
    return (
        <footer className="h-10 shadow-inner hidden">
            <Container className="flex items-center h-full">
                <span className="block text-sm text-gray-400">
                    © 2024. Jung Homin. All rights reserved.
                </span>
            </Container>
        </footer>
    );
};
