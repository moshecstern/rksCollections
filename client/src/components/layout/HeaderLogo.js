import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {AppBar,Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // flexDirection: 'row'
    },
    logo: {
        // width: 355,
        // height: 150,
        // marginTop: 5,
        // marginLeft: 60,
        marginBottom: 0,
        paddingBottom: 0,
        textAlign: 'center',
      width: '100%',
      height: '80%',
      objectFit: 'contain',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: '50%',
      },
logoDiv: {
    alignSelf: "center"
  },
  logoSmallLeft: {
      maxWidth: 220,
      paddingTop: '5%',
      marginLeft: '15%'

  },
  logoHorizontallyCenter: {
    objectFit: 'contain',
    // alignSelf: 'center'
    margin: 2,
    padding:2,
    // marginBottom: 5,
    // marginBottom: 0,
    // paddingBottom: 0,
    // marginRight: 30,
     width: '50%',
     maxWidth: 400,
    //  position: 'absolute', 
     left: '50%', 
     top: '50%',
     transform: 'translate(-50%, 3%)'
,    // height: 150,

    position: 'relative', 
    // left: '37.5%', 
    // [theme.breakpoints.down('md')]: {
    // left: '10%',
  //   width: 'auto'
  // },
  // [theme.breakpoints.down('sm')]: {
  //   left: '2%',
  //   width: 'auto'
  // }
  },
}))


const HeaderLogo = ({logo, logo2, link1, link2}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="relative" style={{backgroundColor: '#008292'}}>
       <Grid container direction='row'>

        <Grid item md={3}>
     <Link to={link2} >
         <img src={logo2} alt="Churchland Psychological Center" className={classes.logo}></img>

          </Link>
          </Grid>
        <Grid item md={6}>
     <Link to={link1} >
         <img src={logo} alt="Churchland Psychological Center" className={classes.logo}></img>

          </Link>
          </Grid>
       </Grid>
          </AppBar>
          </div>
    )
}

export default HeaderLogo
