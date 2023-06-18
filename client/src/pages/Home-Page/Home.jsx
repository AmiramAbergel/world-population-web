/** @jsxImportSource @emotion/react */

import Layout from '../../components/Layout/Layout.jsx';
import WorldNav from '../../components/WorldPopulation/WorldNav/WorldNav.jsx';
import WorldPopulation from '../../components/WorldPopulation/WorldPopulation.jsx';

const Home = () => {
  return (
    <div>
      <Layout>
        <WorldNav />
        <WorldPopulation />
      </Layout>
    </div>
  );
};

export default Home;
