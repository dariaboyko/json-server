import classes from './UserSetting.module.css'
import { useState } from "react";
import UserViewWrapper from './UserViewWrapper';
import UserEditWrapper from './UserEditWrapper';
import UserDeleteWrapper from './UserDeleteWrapper';
const UserSettings=({user})=>{
    const [userInfo, setUserInfo] = useState(false);
    const [userEdit, setUserEdit] = useState(false);
    const [userDelete, setUserDelete] = useState(false);
    return (
      <>
        <div className={classes.userSettings}>
          <button
            className={classes.button}
            onClick={() => {
              setUserInfo(!userInfo);
            }}
          >
            View
          </button>
          <button
            className={classes.button}
            onClick={() => {
              setUserEdit(!userEdit);
            }}
          >
            Edit
          </button>
          <button
            className={classes.button}
            onClick={() => {
              setUserDelete(!userDelete);
            }}
          >
            Delete
          </button>
        </div>
        {userInfo && <UserViewWrapper user={user} />}
        {userEdit && <UserEditWrapper user={user} />}
        {userDelete && <UserDeleteWrapper user={user} />}
      </>
    );
}
export default UserSettings;