import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({ apiFacade }) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  const populate = () => apiFacade.getPersons((data) => {
    setPersons(data);
  });
  
  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    populate();
  }, []);

  const storeAddEditPerson = (person) => {
    apiFacade.addEditPerson(person,(data)=>{
      populate();
    });
    
  };

  const deletePerson = (id) => {
    apiFacade.deletePerson(id, (data) => {
      populate();
    });
  };

  const editPerson = (person) => {
    console.log('editPerson:',person);
    setPersonToAddEdit(person);
  };

  return (
    <div className="container">
      joo
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            emptyPerson={emptyPerson}
            //  Next two lines, are if you decide to handle add and edit in same function
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id} //This will reload this component on changes to personToAddEdit.id (rather than just updating it)
          />
        </div>
      </div>
    </div>
  );
}
export default App;
