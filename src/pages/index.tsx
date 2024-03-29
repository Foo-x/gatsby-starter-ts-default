import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src='../images/gatsby-astronaut.png'
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt='A Gatsby astronaut'
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to='/page2/'>Go to page 2</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;

export const Head = () => {
  return <Seo title='Home' />;
};
