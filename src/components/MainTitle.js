import classes from "./MainTitle.module.css";
function MainTitle(props) {
  return (
    <div className={classes.textWrapper}>
      <h1 className={classes.title}>Person Database</h1>
      <h2 className={classes.subTitle}>List of person</h2>
    </div>
  );
}
export default MainTitle;
