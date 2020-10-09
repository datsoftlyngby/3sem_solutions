import React, { useState } from "react";

export default function AddEditPerson(props) {
  const {newPerson, emptyPerson, addEditPerson} = props;
  const [person, setPerson] = useState({...newPerson});

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (evt) => {setPerson({...person,[evt.target.id]:evt.target.value});}
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(person.name && person.age && person.email && person.gender){
      console.log(person);
      addEditPerson(person);
      setPerson(emptyPerson);
    }
    else {
      alert('Some required fields are missing');
    }
  }

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input  className="form-control" readOnly id="id" value={person.id} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input value={person.name} onChange={handleChange}
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input value={person.age} onChange={handleChange}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input value={person.email} onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input value={person.gender} onChange={handleChange}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
              onClick={()=>setPerson(emptyPerson)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
