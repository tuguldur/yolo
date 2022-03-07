import Header from "@components/common/header";
import Footer from "@components/common/footer";
const Layout = ({ children }) => (
  <>
    <Header />
    <main className="mt-14 min-h-screen">{children}</main>
    <Footer />
  </>
);
export default Layout;
