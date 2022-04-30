import classes from "./UserEdit.module.css";
import { useState } from "react";
function UserEditWrapper({ user }) {
      const [toggle, setToggle] = useState(true);
      const axios = require("axios");
      const [inputs, setInputs] = useState({});
      const [selectValue, setSelectValue] = useState(user.department);

      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
      };

      function changeSelectValue(event) {
        setSelectValue(event.target.value);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
            axios
              .patch(`http://localhost:8080/users/${user.id}`, {
                name: inputs.name,
                email: inputs.email,
                birthdate: inputs.date,
                department: selectValue,
              })
              .then((res) => res.data);
          setToggle(false);
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
            <form id="editUser" onSubmit={handleSubmit}>
              <h2 className={classes.subTitle}>Name</h2>
              <input
                className={classes.info}
                placeholder="Enter name"
                name="name"
                value={inputs.name || user.name}
                onChange={handleChange}
              />
              <h2 className={classes.subTitle}>Email</h2>
              <input
                className={classes.info}
                type="email"
                name="email"
                placeholder="Enter email"
                value={inputs.email || user.email}
                onChange={handleChange}
              />
              <h2 className={classes.subTitle}>Date</h2>
              <input
                className={classes.info}
                type="date"
                name="date"
                value={inputs.date || user.birthdate}
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
export default UserEditWrapper;
