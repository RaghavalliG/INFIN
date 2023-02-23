// import Footer from "@/components/common/footer";
import HomeIcon from "@/components/icon/home-icon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/common/header";
// import AdminHeader from "@/components/common/admin-header";

export default function ComingSoon() {


    return (
        <>
            <div className="site-wrap admin_wrap" style={{minHeight: '100vh', flexDirection:'column'}}>
             <div className="d-flex justify-content-center pt-5 pb-5">
                <Link href="/">
                    <Image src="/logo.png" className="logo" width={155} height={80} />
                </Link>
             </div>
             <main className="container" style={{marginTop: '0px'}}>
                <div className="card admin-card-wedget" style={{maxWidth: '800px', margin: '0 auto'}}>
                <h3 className="mt-4 mb-5 text-center">Coming Soon...</h3>
                <div className="action d-flex justify-content-center mb-4">
                    <Link href="/" className="btn btn-primary-light"><span className="icon me-2"><HomeIcon size={16} /></span>Back to Home</Link>
                </div>
                </div>
                
                </main>
            </div>
    

        </>
    )

}