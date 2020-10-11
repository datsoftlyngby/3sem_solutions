//Add imports here

const countryFacade = () => {
  const URL = 'http://localhost:3333/'
  const getLabels = () => {
    return fetch(URL+'labels').then(res=>res.json()).then((data)=>{
      return data;
    });
  }
  
  const getCountries = () => {
      return fetch(URL+'countries').then(res=>res.json()).then((data)=>{
        return data;
      });
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();