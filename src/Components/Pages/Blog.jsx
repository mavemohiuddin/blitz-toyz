/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Section from '../Elements/Section';
import setTitle from '../Utility/Common';

const Blog = () => {
    setTitle("Blitz | Blogz");
    return (
        <Section>
            <div className='max-w-2xl w-full mx-auto'>
                <div className='border rounded mb-4'>
                    <p className="px-4 py-2 text-xl border-b bg-h-secondary">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className="px-4 py-2">An access token is a credential that is used to access protected resources on a server. It is typically short-lived and is granted after a successful authentication process. The access token contains information such as the user's identity and any associated permissions.<br /><br />
                    A refresh token is a long-lived credential that is used to obtain a new access token once the previous one expires. It is typically issued alongside the access token during the authentication process.</p>
                </div>
                <div className='border rounded mb-4'>
                    <p className="px-4 py-2 text-xl border-b bg-h-secondary">Compare SQL and NoSQL databases?</p>
                    <p className="px-4 py-2 mb-3">SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems. While they does the same thing, there are a few fundamental differences.</p>
                    <div className='px-4'>
                        <p className='mb-2 underline underline-offset-4 font-primary'>SQL (Structured Query Language):</p>
                        <p>1.  SQL databases are based on a fixed schema with predefined tables and columns.</p>
                        <p>1.  SQL databases use the concept of relations (tables) to store structured data.</p>
                        <p>1.  SQL databases use the SQL language for querying and manipulating data.</p>
                        <p className='mb-2 underline underline-offset-4 font-primary mt-3'>NoSQL (Not Only SQL):</p>
                        <p>1.  NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and unstructured data storage.</p>
                        <p>1.  NoSQL databases can handle various data models like key-value, document, columnar, and graph.</p>
                        <p>1.   NoSQL databases often provide their own query languages or APIs specific to their data models.</p>
                    </div>
                </div>
                <div className='border rounded mb-4'>
                    <p className="px-4 py-2 text-xl border-b bg-h-secondary">What is express js? What is Nest JS?</p>
                    <div className='px-4 py-2'>
                        <p>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and tools to build web applications and APIs. Express.js is widely used due to its simplicity, lightweight nature, and extensive middleware ecosystem.</p>
                        <p className='mt-3'>NestJS, on the other hand, is a full-featured, scalable, and opinionated framework for building server-side applications with Node.js. It is built with TypeScript and is heavily inspired by Angular's architecture and concepts.</p>
                    </div>
                </div>
                <div className='border rounded mb-4'>
                    <p className="px-4 py-2 text-xl border-b bg-h-secondary">What is MongoDB aggregate and how does it work</p>
                    <div className='px-4 py-2'>
                        <p>MongoDB's aggregation framework is a powerful feature that allows you to process and analyze data within the database.</p>
                        <p className='mt-3'>The aggregation framework works by using a pipeline approach, where multiple stages are chained together to form a sequence of operations.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Blog;