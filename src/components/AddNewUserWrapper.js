import classes from "./AddNewUser.module.css";
import { useState } from "react";
import { useMutation } from "react-query";
function AddNewUserWrapper() {
    
    const [toggle, setToggle] = useState(true);
    const axios = require("axios");
    const [inputs, setInputs] = useState({});
    const [selectValue, setSelectValue] = useState("A1");

   const handleChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     setInputs((values) => ({ ...values, [name]: value }));
   };

   function changeSelectValue(event) {
     setSelectValue(event.target.value);
   }
   
   const createUser = useMutation((newUserInfo)=>{
        const { data: response } = axios.post(
          axios.post("http://localhost:8080/users", {
            name: newUserInfo.name,
            email: newUserInfo.email,
            birthdate: newUserInfo.date,
            department: selectValue,
          })
        );
        return response;
   });
   const handleSubmit = (event) => {
     event.preventDefault();
     if (!inputs.name || !inputs.date || !inputs.email) {
       alert("Fill all the inputs");
     } else {
       createUser.mutate(inputs);
        setToggle(false);
     }
   };





  return (
    <>
      {toggle && (
        <>
          <div className={classes.wrapper}>
            <button
              className={classes.close}
              onClick={() => {
                setToggle(!toggle);
              }}
            ></button>
            <h1 className={classes.mainTitle}>User info</h1>
            <form id="addUser" onSubmit={handleSubmit}>
              <h2 className={classes.subTitle}>Name</h2>
              <input
                className={classes.info}
                placeholder="Enter name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
              <h2 className={classes.subTitle}>Email</h2>
              <input
                className={classes.info}
                type="email"
                name="email"
                placeholder="Enter email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
              <h2 className={classes.subTitle}>Date</h2>
              <input
                className={classes.info}
                type="date"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
              />
              <h2 className={classes.subTitle}>Department</h2>
              <select
                className={classes.info}
                value={selectValue}
                onChange={changeSelectValue}
              >
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="C3">C3</option>
              </select>
              <button
                className={classes.cancel}
                onClick={() => {
                  setToggle(!toggle);
                }}
                type="button"
              >
                Cancel
              </button>
              <button className={classes.confirm} type="submit">
                Confirm
              </button>
            </form>
          </div>
          <div className={classes.overlay}></div>
        </>
      )}
    </>
  );
}
export default AddNewUserWrapper;
