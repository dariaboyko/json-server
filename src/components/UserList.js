import UserSettingsButton from "./UserSettingsButton";
import classes from "./Table.module.css";

const UserList = ({ users }) => {
  return users.reverse().map((user) => (
    <div className={classes.user} key={user.id}>
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.birthdate}</span>
      <span>{user.department}</span>
      <UserSettingsButton user={user}/>
    </div>
  ));
}
export default UserList;
