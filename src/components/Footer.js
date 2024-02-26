import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return ( <div>
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light
        font-medium text-lg">

        <Layout className="py-4 flex items-center justify-between dark:text-light">
            <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>

            <Link href="/">Main page</Link>    
        </Layout>    
        </footer>
    </div> );
}
 
export default Footer;