import classes from './MainWrapper.module.css';
function MainWrapper(props){
    return <div className={classes.wrapper}>{props.children}</div>
}
export default MainWrapper;