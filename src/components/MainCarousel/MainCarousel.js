import { Button, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

const carouselItems = [
    {
        name: 'Random Name #1',
        description: 'Probably the most random thing you have ever seen!',
    },
    {
        name: 'Random Name #2',
        description: 'Hello World!',
    },
    {
        name: 'Random Name #3',
        description: 'Placeholder!',
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 200,
    },
    item: {
        height: '100%',
    },
}))
const MainCarousel = () => {
    const classes = useStyles()
    const CarouselItem = (props) => {
        return (
            <Paper className={classes.item}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">Check it out!</Button>
            </Paper>
        )
    }
    return (
        <Carousel className={classes.root}>
            {carouselItems.map((item, i) => (
                <CarouselItem key={i} item={item} />
            ))}
        </Carousel>
    )
}

export default MainCarousel
