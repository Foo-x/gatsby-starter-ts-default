import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const SecondPage = () => (
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
