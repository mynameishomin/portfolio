import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* <Header /> */}
            <div className="flex mb-0 grow h-0">
                <Aside />
                <Main>{children}</Main>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
