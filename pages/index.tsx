import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';
import Link from 'next/link';

import { loadPosts } from '../models/loadPosts';
import type { Post } from '../models/Post';
import { Layout } from '../layouts/Layout';

const HomePage: React.FC<{
    posts: Post[];
}> = ({ posts }) => {
    return (
        <Layout title="Tiny tips, tricks & best practices for front-end development">
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>Tips, Tricks, Best Practices</Heading>
                    <Heading level={4}>for front-end development</Heading>
                    <Spacer size="large" />
                </div>
                {posts.map((post: Post) => (
                    <Link href={`/${post.slug}`} key={post.slug}>
                        <a className="block-home__post">
                            <img
                                className="block-home__image"
                                src={`/img/${post.category.toLowerCase().replace(' ', '-')}.svg`}
                            />
                            <h3 className="block-home__title">{post.title}</h3>
                            <div className="block-home__topics">
                                {post.topics
                                    .split(' ')
                                    .map((v) => `#${v}`)
                                    .join(', ')}
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <Spacer size="large" />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = loadPosts();
    return {
        props: {
            posts,
        },
    };
};

export default HomePage;
