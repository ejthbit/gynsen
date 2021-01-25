import { AppBar, Box, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const navbarItems = [
    { title: 'Naše služby', link: '/sluzby' },
    { title: 'Ordinační hodiny', link: '/ordinacni-hodiny' },
    { title: 'Objednejte se', link: '/rezervace' },
    { title: 'Kontakt', link: '/kontakt' },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'black',
        textDecoration: 'none',
    },
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <AppBar>
                <Toolbar>
                    {navbarItems.map((item) => (
                        <Link to={item.link} className={classes.title}>
                            <Typography variant="h6">{item.title}</Typography>
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
