import React from "react";
import PropTypes from 'prop-types';
import {persons} from "./file2";
function Welcome(props) {
    return <h4>Hello, {props.name}</h4>;
  }
  const WelcomePerson = ({person}) => {
    return (<pre>
        {`
First Name: ${person.firstName}
Last Name: ${person.lastName}
Email: ${person.email}`}
    </pre>);
  };
  WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired, 
        email: PropTypes.string.isRequired
    })
    };
  
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {/* <WelcomePerson person={persons[0]}  /> */}
        {persons.map(p => <WelcomePerson  person={p}/>)} {/* key={p.email} */}
      </div>
    );
  }

export default MultiWelcome;  