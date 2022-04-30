import classes from "./UserView.module.css"
import { useState, useEffect } from "react";
function UserViewWrapper({user}){
    const [toggle, setToggle] = useState(true);
    const [userData, setUserData] = useState({});
  const axios = require("axios");
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:8080/users/${user.id}`);

      if (response && response.data) {
        setUserData(response.data);
      }
    };
    useEffect(() => {
      getUsers();
    },[]);
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
        <h2 className={classes.subTitle}>Name</h2>
        <p className={classes.info}>{userData.name}</p>
        <h2 className={classes.subTitle}>Email</h2>
        <p className={classes.info}>{userData.email}</p>
        <h2 className={classes.subTitle}>Date</h2>
        <p className={classes.info}>{userData.birthdate}</p>
        <h2 className={classes.subTitle}>Department</h2>
        <p className={classes.info}>{userData.department}</p> 
      </div>
      <div className={classes.overlay}></div>
      </>
        )}
      </>
    );
}
export default UserViewWrapper;
