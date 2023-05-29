import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden break-keep">
            {/* <Header /> */}
            <div className="flex mb-0 grow h-0">
                <Aside />
                <div className="flex flex-col grow overflow-scroll scrollbar-hide">
                    <Main>{children}</Main>
                    <Footer />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
