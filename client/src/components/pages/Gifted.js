import React from 'react'
import Home from '../gifted/Home';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card } from '@material-ui/core';
import CardNav from '../gifted/CardNav';
import MyLogo from "../../Images/cpclogo2.png";
import HeaderLogo from '../layout/HeaderLogo';
const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(6)
    }
}))

const SiteMap = [
  {
    title: "Services & Pricing",
    link: "/gifted/services"
  },
  {
    title: "About",
    link: "/gifted/about",
  },
  {
    title: "Past Projects & Testimonials",
    link: "/gifted/pastproject",
  },
  {
    title: "Pre-Made Baskets",
    link: "/gifted/premadebaskets",
  },
  {
    title: "Contact",
    link: "/gifted/contact",
  }
]
const Gifted = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Home /> */}
      <HeaderLogo 
          logo={MyLogo}
          logo2={MyLogo}
          link1={"/gifted"}
          link2={"/"}
      />
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="stretch"
  className={classes.container}
>
  {SiteMap.map(a => (
  <Grid item>
<CardNav 
  title={a.title}
  link={a.link}
  />
  </Grid>
  ))}
</Grid>
    </div>
  )
}

export default Gifted
