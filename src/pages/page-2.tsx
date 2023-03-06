import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const SecondPage: React.FC<PageProps> = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

export const Head = () => {
  return <Seo title='Page two' />;
};
