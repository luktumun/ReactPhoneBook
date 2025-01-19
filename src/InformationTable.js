import React from "react";

function InformationTable(props) {
    const style = {
        table: {
          borderCollapse: "collapse",
        },
        tableCell: {
          border: "1px solid gray",
          margin: 0,
          padding: "5px 10px",
          width: "max-content",
          minWidth: "150px",
        },
      };

     const sortedUsers = props.users.sort( (a, b) =>
    a.firstName.localeCompare(b.lastName)
);  
  
   const Display = 
    sortedUsers.length>0 ?
    (
        sortedUsers.map((user,i) => (
            <tr key={i}>
            <th style={style.tableCell}>{user.firstName}</th>
            <th style={style.tableCell}>{user.lastName}</th>
            <th style={style.tableCell}>{user.phone}</th>
            
            </tr>
        ))
    ): 
    <tr clospan = {3}>&nbsp;</tr>

 

    return (
<table style={style.table} >
    <thead>
  <tr>
    <th style={style.tableCell}>FirstName</th>
    <th style={style.tableCell}>LastName</th>
    <th style={style.tableCell} >Phone</th>
  </tr>
  </thead>
  <tbody>
  {Display}
  </tbody>
  
  
</table>
    
    );

}

export default InformationTable;