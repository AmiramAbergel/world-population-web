import { clientApi } from '../services/api.service.js';

const BASE_URL = `https://restcountries.com/v3.1`;

export const getRegions = async (continent) => {
  const RegionsURL = `${BASE_URL}/region/${continent}`;
  const regionsResponse = await clientApi(RegionsURL);
  console.log(regionsResponse);
  return regionsResponse;
};
