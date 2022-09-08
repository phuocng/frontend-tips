import { Heading, Spacer } from '@1milligram/design';
import Head from 'next/head';
import * as React from 'react';

import { Layout } from './Layout';
import { Ad } from '../components/Ad';

export const PostLayout: React.FC<{
    keywords?: string;
    image?: string;
    title: string;
    topics?: string;
}> = ({ children, keywords, image = 'screenshot.png', title, topics = '' }) => {
    return (
        <>
            <Head>
                <title>{title} - Front-End Tips</title>
                <meta name="description" content={title} />
                <meta name="twitter:title" content={`${title} - Front-End Tips`} />
                <meta name="twitter:description" content={title} />
                <meta property="og:title" content={`${title} - Front-End Tips`} />
                <meta property="og:description" content={title} />
                {keywords && keywords.length && <meta property="keywords" content={keywords} />}
                <meta property="og:image" content={`https://getfrontend.tips/img/${image}`} />
                <meta property="twitter:image" content={`https://getfrontend.tips/img/${image}`} />
            </Head>
            <Layout title={title}>
                <div className="block-container">
                    <div className="block-home__hero">
                        <Spacer size="extraLarge" />
                        <Heading level={1}>{title}</Heading>
                        <Spacer size="large" />
                        <div className="block-ad">
                            <Ad />
                        </div>
                        <Spacer size="medium" />
                    </div>
                    {children}
                    <Spacer size="large" />
                </div>
            </Layout>
        </>
    );
};
