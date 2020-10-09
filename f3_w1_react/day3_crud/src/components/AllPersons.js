import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const {persons,editPerson,deletePerson} = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
  {persons.map(p=>{
    const links = <><a href="xx" onClick={(e)=>{e.preventDefault();editPerson(p)}}>edit</a> / <a href="xx" onClick={(e)=>{e.preventDefault();deletePerson(p.id)}}>delete</a></>;
    return <tr key={p.id}><td>{p.age}</td><td>{p.name}</td><td>{p.gender}</td><td>{p.email}</td><td>{links}</td></tr>
  })}
        </tbody>
      </table>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
