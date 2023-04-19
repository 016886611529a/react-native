//https://datausa.io/api/data?drilldowns=Nation&measures=Population
import axios from 'axios';
async function getPopulation({drilldowns, measures}) {
  const SERVER_NAME = 'https://datausa.io';
  const urlGetPopulation = `${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
  try {
    let result = [];
    let res = await axios.get(urlGetPopulation)
      res.data.data.forEach(item => {
        let myObject = {};
        myObject.nationId = item['ID Nation'];
        myObject.nationName = item['Nation'];
        myObject.year = item['Year'];
        myObject.population = item['Population'];
        result.push(myObject);
      });
      return result;
  } catch (error) {
    throw error;
  }
}
export default {
  getPopulation,
};
