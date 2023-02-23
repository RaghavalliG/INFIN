// import Footer from "@/components/common/footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/common/header";
// import AdminHeader from "@/components/common/admin-header";

export default function ComingSoon() {


    return (
        <>
            <div className="site-wrap">
             <Header />
                <h3 style={{ margin: 150 }}>Coming Soon...</h3>
                <div className="action">
                    <Link href="/dashboard" className="btn btn-primary-light">Back to Home</Link>
                </div>

            </div>
    

        </>
    )

}