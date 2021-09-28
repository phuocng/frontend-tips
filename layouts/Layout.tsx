import Head from 'next/head';
import * as React from 'react';
import { FooterBlock } from '../components/FooterBlock';
import { HeaderBlock } from '../components/HeaderBlock';

interface LayoutProps {
    title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => (
    <>
        <Head>
            <title>{title} - this vs that</title>
            <meta name="description" content={title} />
            <meta name="twitter:title" content={`${title} - this vs that`} />
            <meta name="twitter:description" content={title} />
            <meta property="og:title" content={`${title} - this vs that`} />
            <meta property="og:description" content={title} />
        </Head>

        <HeaderBlock />
        {children}
        <FooterBlock />
    </>
);
