import ContentBlock from "./contentBlock";
import { useWindowScroll } from '@mantine/hooks';
import Menu from "./menu";
import { Avatar, Drawer } from "@mantine/core";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


// import Router from 'next/router';

export default function Header() {

  const [isLogin, setIsLogin] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();
  if (typeof window !== 'undefined') {
    var token = localStorage.getItem("token_key");
  }
  useEffect(() => {
    if (!(token)) {
      router.push('/login')
    }else{
      setIsLogin(true)
    }
  }, [token, router])

    return <>
    <Drawer
        opened={menuOpened}
        onClose={() => setMenuOpened(false)}
        title="Menu"
        padding="xl"
        size="lg"
      >
        <Menu />
      </Drawer>
    <div className={`site-header ${scroll.y > 50 ? 'fixed' : ''}`}>
    <div className="container">
    <header className="d-flex flex-wrap align-items-center mb-4">
    <a
      href="/"
      className="d-flex align-items-center col-auto mb-2 mb-md-0 text-dark text-decoration-none brand"
    >
      <img src="/logo.png" className="logo" />
    </a>
    <Menu />
    <div className="col-auto text-end actions">
      {isLogin ? (
        <Avatar radius="xl" />
      ) : (
        <>
        <div className="header-login-btns">
        {/* <button type="button" onClick={() => Router.push('/professional-admin/login')}   className="btn btn-outline-primary me-2">
      Signin
      </button> */}
      <Link href={"/professional-admin/login"} className="btn btn-outline-primary me-2"> Sign in </Link>
      {/* <button type="button" className="btn btn-primary outline">
        Sign up
      </button> */}
      <Link href={"/professional-admin/register"} className="btn btn-primary outline"> Sign up </Link>
      </div>
        </>
      )}
      
      
      <a href="#" onClick={(e)=>{e.preventDefault(); setMenuOpened(true)} } className="btn menu-switch-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
       <span className="label">Menu</span></a>
    </div>
  </header>
  </div>
 
  </div>
  </>
}