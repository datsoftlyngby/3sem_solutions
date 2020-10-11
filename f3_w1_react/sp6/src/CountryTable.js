import React,{useState, useEffect} from "react";
import facade from "./countryFacade";

const CountryTable = () => {
  const [labels,setLabels] = useState([]);
  const [countries,setCountries] = useState([]);
  const [sortedBy, setSortedBy] = useState("");

  const getData = () => {
    facade.getLabels().then(data=>setLabels(data));
    facade.getCountries().then(data=>setCountries(data));
  };
  useEffect(()=>{
    setInterval(getData,3000);
  },[]);

  const sortLabel = (label,desc) =>{
    label = label.toLowerCase();
    console.log('label:',label,'sortedBy',sortedBy);
    if(sortedBy === label)
          setCountries([...countries].reverse());
    else{
      const compareStr = (a,b)=>a[label].toUpperCase().localeCompare(b[label].toUpperCase());
      const compareNumber = (a,b)=>a[label]-b[label];
      const comp = (['name','capital','region','tl-domain','currency'].includes(label))?compareStr:compareNumber;
      
      
      const sortedCountries = [...countries].sort(comp); //clone array before sorting (to avoid in place sorting) because then the setCountries method does not cause rerender (since the 2 arrays are the same)
      const result = (desc)?sortedCountries.reverse():sortedCountries;
      setSortedBy(label);
      setCountries(result);
    }
  }
    return (
      <div>
      <table className="table">
        <thead>
        <tr>{labels.map(label=><th key={label}><a onClick={(e)=>{e.preventDefault(); sortLabel(label);}} href="##">{label}</a></th>)}</tr>
        </thead>
        <tbody>
        {countries.map(country => <tr key={country.name}>{Object.values(country).map((prop,idx)=><td key={idx}>{Array.isArray(prop)?prop.join():prop}</td>)}</tr>)}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;