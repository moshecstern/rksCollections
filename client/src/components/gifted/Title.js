import React from 'react';
import {
    Typography
} from '@material-ui/core';
import DividerWithText from './DividerWithText';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
        border: "0px solid rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(213, 217, 223, 1)",
        borderRadius: 0,
        minHeight: 60,
        
      },
    }))
const Title = ({title}) => {
    const classes = useStyles();
    return (
        <>
        
        <div className={classes.container}></div>
        <DividerWithText>
<Typography variant='h1' component='h1'>
{title}
</Typography>
</DividerWithText>
        </>
    )
}

export default Title
