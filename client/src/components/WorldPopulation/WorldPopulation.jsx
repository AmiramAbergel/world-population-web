import { useEffect, useState } from 'react';
import { getRegions } from '../../api/api.js';

const DUMMY_CONTINENTS = [
  'Africa',
  'Europe',
  'Asia',
  'North America',
  'South America',
  'Oceania',
  'Antartica',
];

const WorldPopulation = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const getRegion = async () => {
      const regions = await getRegions(DUMMY_CONTINENTS[0]);
      setRegions(regions);
    };
    getRegion();
    console.log(regions);
  }, []);

  return <div></div>;
};

export default WorldPopulation;
