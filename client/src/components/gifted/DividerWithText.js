import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    border: "0px solid rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(213, 217, 223, 1)",
    borderRadius: 0,
    minHeight: 124,
    
  },
  border: {
    borderBottom: "1px solid rgba(85, 95, 97, 1)",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    minWidth: 'fit-content',
    
    // marginRight: "15%"
    // fontWeight: 500,
    // fontSize: 22,
    // color: "lightgray"
  }
}));
const DividerWithText = ({ children }) => {
    const classes = useStyles();
    return (
     <div className={classes.container}>
       <div className={classes.border} />
       <span className={classes.content}>{children}</span>
       <div className={classes.border} />
     </div>
    );
   };
   export default DividerWithText;