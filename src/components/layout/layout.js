import Footer from "../common/footer";
import Header from "../common/header";

export default function Layout({ children }) {
    return (
      <>
      <div className="site-wrap">
        <Header />
        <main className="site-main-content">{children}</main>
        <Footer />
        </div>
      </>
    )
  }