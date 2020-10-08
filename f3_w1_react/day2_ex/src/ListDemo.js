import React, { useState } from "react";
 
function MemberTable({ members }) {
  return (
    <table className="table">
      <thead><tr>{Object.keys(members[0]).map(key=><th key={key}>{key.toUpperCase()}</th>)}</tr></thead>
     <tbody>
      {members.map(member=><tr key={member.name+member.age}>{Object.values(member).map(val=><td key={val}>{val}</td>)}</tr>)}
      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}

