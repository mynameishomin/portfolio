import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden transition duration-200 bg-gray-900">
            <Header />
            <div className="flex flex-col mb-10 lg:flex-row lg:mb-0 grow lg:h-0">
                <Aside />
                <Main>{children}</Main>
            </div>

            <Footer />
        </div>
    );
}
