import React from 'react';
import {
    Typography,
    Grid
} from '@material-ui/core';
import Title from './Title';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     h1: {

//     },
//     h2: {

//     },
//     h3: {

//     },
//     body1: {

//     },
//     subtitle1: {

//     }
// }))
const myServices = [
    {
        step: "Step 1:",
        title: "Initial Consultation",
        body1: "Whether you have a specific project in mind that you'd like me to bring to life or if you are just interested in generally hearing more about what I can do for you, either fill out the short form on our 'contact' page or email me at Gifted@RKSCurated.com. We can then set up a time to chat to discuss whatever it is you'd like to discuss and for me to answer any questions you may have.",
        price: "free."
    },
    {
        step: "Step 2:",
        title: "Hiring",
        body1: "After our initial consultation ​if you choose to move forward in working with me, I will send you a form to fill out to provide more detailed information about the project. I will also ask for the cost of materials and 20% of my fee at this point. The cost of materials can either be paid directly to me or you can provide me with a credit card to use, if you'd prefer.",
        price: "Cost of materials (or a credit card to use) + 20% of my final fee."
    },
    {
        step: "Step 3:",
        title: "Research, Development, and Design",
        body1: "Once I receive your form submission and initial payments, I will get to work finding specific products that fit in the theme or idea we've set and conceptualize the design of the overall package. As I work I will periodically check-in to keep you updated and get your feedback on my progress before making final purchase or creative decisions.",
        price: "Flat rate; contact me for quote."
    },
    {
        step: "Step 4:",
        title: "Packaging & Delivery",
        body1: "I will single-handedly assemble the packages according to our prior discussions and following the design previously established together. When they are complete we can arrange for either a pick up or delivery (to one location) of the baskets.",
        price: "Rate based on number of baskets; contact me for quote."
    }
]

const Services = () => {
    // const useStyles = makeStyles();
    return (
        <>
           <div>
            <Title title={'Services & Pricing'} />
            </div>
            <br /><br /><br />
            <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
<Grid item md={6}>
        {myServices.map((service => (
            <Grid
  container
  direction="column"
  justify="center"
  alignItems="flex-start"
>
    <Grid item>
        <Typography variant='h3' component='h2'>
                {service.step}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant='h2' component='h3'>
                {service.title}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant='body1' component='p'>
                {service.body1}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant='subtitle1' component='h4'>
                {service.price}
            </Typography>
            </Grid>
        <br /><br />
        </Grid>
            )))}
            </Grid>
            </Grid>
            </>
    )
}

export default Services
