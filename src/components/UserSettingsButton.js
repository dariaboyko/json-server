import UserSettings from "./UserSettings";
import {useState} from 'react';
import classes from "./Table.module.css";
function UserSettingsButton({user}){
    const [toggle, setToggle] = useState(false);
    return (
      <>
        <button
          className={classes.dots}
          onClick={() => {
            setToggle(!toggle);
          }}
        ></button>
        {toggle && <UserSettings user={user}/>}
      </>
    );
}

export default UserSettingsButton;