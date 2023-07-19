import Footer from "./footer";
import Header from "./header";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
};
