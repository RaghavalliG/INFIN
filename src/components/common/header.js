import ContentBlock from "./contentBlock";
import { useWindowScroll } from '@mantine/hooks';
export default function Header() {
  
  const [scroll, scrollTo] = useWindowScroll();
    return <>
    <div className={`site-header ${scroll.y > 50 ? 'fixed' : ''}`}>
    <div className="container">
    <header className="d-flex flex-wrap align-items-center mb-4">
    <a
      href="/"
      className="d-flex align-items-center col-auto mb-2 mb-md-0 text-dark text-decoration-none brand"
    >
      <img src="/logo.png" className="logo" />
    </a>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 main-navi">
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          Features
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          Pricing
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
          FAQs
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-2 link-dark">
        Blog
        </a>
      </li>
    </ul>
    <div className="col-md-3 text-end actions">
      <button type="button" className="btn btn-outline-primary me-2">
      Signin
      </button>
      <button type="button" className="btn btn-primary outline">
        Sign up
      </button>
    </div>
  </header>
  </div>
 
  </div>
  </>
}