import classes from "./UserDelete.module.css";
import { useState } from "react";
import UserDelete from "./UserDelete";
function UserDeleteWrapper({ user }) {
  const [toggle, setToggle] = useState(true);
   function deleteUser(id) {
     const axios = require("axios");

     axios
       .delete("http://localhost:8080/users/" + id + "/")
       .then((resp) => {
         console.log(resp.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }
  return (
    <>
      {toggle && (
        <>
          <UserDelete>
          <button
            className={classes.cancel}
            onClick={() => {
              setToggle(!toggle);
            }}
          >Cancel</button>
          <button
            className={classes.confirm}
            onClick={() => {
                deleteUser(user.id);
              setToggle(!toggle);
            }}
          >Confirm</button>
        </UserDelete>
        </>
      )}
    </>
  );
}
export default UserDeleteWrapper;
