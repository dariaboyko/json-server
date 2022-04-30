import classes from "./UserDelete.module.css";
function UserDelete(props){
    return (
      <>
        <div className={classes.wrapper}>
          <p className={classes.mainTitle}>
            Do you really want to delete this user?
          </p>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore{" "}
          </p>
          {props.children}
        </div>
        <div className={classes.overlay}></div>
      </>
    );
}
export default UserDelete;