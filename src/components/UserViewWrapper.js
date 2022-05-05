import classes from "./UserView.module.css"
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
function UserViewWrapper({user}){
 const [toggle, setToggle] = useState(true);
  const { isLoading, data } = useQuery("user", async () => {return await axios.get(`http://localhost:8080/users/${user.id}`)})
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
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
              <p className={classes.info}>{data?.data.name}</p>
              <h2 className={classes.subTitle}>Email</h2>
              <p className={classes.info}>{data?.data.email}</p>
              <h2 className={classes.subTitle}>Date</h2>
              <p className={classes.info}>{data?.data.birthdate}</p>
              <h2 className={classes.subTitle}>Department</h2>
              <p className={classes.info}>{data?.data.department}</p>
            </div>
            <div className={classes.overlay}></div>
          </>
        )}
      </>
    );
}
export default UserViewWrapper
