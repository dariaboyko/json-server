import { useEffect, useState } from "react";
import classes from "./Table.module.css";
import UserList from "./UserList";
import AddNewUserWrapper from "./AddNewUserWrapper";
function Table() {
    const [users,setUsers]=useState(null);
    const [addNew, setAddNew] = useState(false);
    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(res=>{ return res.json()})
        .then((data)=>{
            setUsers(data);
        })
    })
  return (
    <div className={classes.wrapper}>
      <button
        className={classes.addPersonButton}
        onClick={() => {
          setAddNew(!addNew);
        }}
      >
        Add person
      </button>
      <div className={classes.table}>
        <div className={classes.user}>
          <span>Name</span>
          <span>Email</span>
          <span>Birth date</span>
          <span>Department</span>
        </div>
        {users && <UserList users={users} />}
        {addNew && <AddNewUserWrapper />}
      </div>
    </div>
  );
}
export default Table;
