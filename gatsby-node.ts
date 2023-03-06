import { GatsbyNode } from 'gatsby';

const path = require(`path`);

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
    },
  });
};
