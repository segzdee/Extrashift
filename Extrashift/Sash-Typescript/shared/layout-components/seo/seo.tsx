import React from 'react';
import Head from "next/head";
import favicon from "../../../public/assets/images/brand-logos/favicon.ico";

const Seo = ({title}:any) => {
  let i = `Sash - ${title}`;
  return (
    <Head>
        <title>{i}</title>
        <link rel="icon" href={favicon.src}></link>
        <meta name="description" content="Sash - Nextjs Admin &amp; Dashboard Template"/>
        <meta name="author" content="Spruko Technologies Private Limited"/>
        <meta name="keywords" content="nextjs, nextjs admin template, nextjs template, admin dashboard template, typescript, bootstrap next js, react bootstrap, admin template, react next js, nextjs bootstrap, nextjs typescript, typescript and react, nextjs dashboard, admin panel template"></meta>
    </Head>
  );
};

export default Seo;
