import Link from "next/link";

export default function Menu() {
    return <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 main-navi">
      {/* Features */}
    <li>
      <Link href="/coming-soon" className="nav-link px-2 link-dark">
        Features
      </Link>
    </li>
    {/* pricing */}
    <li>
      <Link href="/coming-soon" className="nav-link px-2 link-dark">
        Pricing
      </Link>
    </li>
     {/* FAQ */}
    <li>
      <Link href="/coming-soon" className="nav-link px-2 link-dark">
        FAQs
      </Link>
    </li>
    {/* blog */}
    <li>
      <Link href="/coming-soon" className="nav-link px-2 link-dark">
      Blog
      </Link>
    </li>
  </ul>
  }