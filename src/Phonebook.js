import React from "react";
import { useState } from "react";


function Phonebook(props) {
    const style = {
        form: {
          container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px",
          },
          inputs: {
            marginBottom: "5px",
            display: "block",
          },
          submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
            color: "#fff",
          },
        },
      };
  const initData = {
    id: null,
    firstName: "Coder",
    lastName: "Byte",
    phone: "0000"
  }
    const [userData , setUserData] = useState(initData);

    const changeHandler = (e) =>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!userData.firstName || !userData.lastName || !userData.phone)
       
        
        return;
        props.addUser(userData);
        setUserData(initData);


    };
   
   


return( 

 <form style={style.form.container} onSubmit={handleSubmit}>
   
   
        <input style={style.form.inputs} type="text" name="firstName" value={userData.firstName} onChange={changeHandler} />
        <input style={style.form.inputs} type="text" name="lastName" value={userData.lastName} onChange={changeHandler} />
        <input style={style.form.inputs} type="text" name="phone" value={userData.phone} onChange={changeHandler} />

        <input style={style.form.submitBtn} type="submit" value="Add User" />

 </form>

)

}
 export default Phonebook;