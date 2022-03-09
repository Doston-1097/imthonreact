import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Container, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';



export default function DenseAppBar() {
    return (
        <>

            <Box sx={{flexGrow: 1 }} >
                <AppBar position="static" >
                    <Container sx={{backgroundColor: "white", paddingY: "10px"}}>
                        <Toolbar variant="dense" sx={{display: 'flex', justifyContent: "space-between"}}>
                            <Box>
                                <img src='./images/Logo.svg' alt=""/>
                            </Box>
                            <Search/>

                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            <div className="header">
                <Typography sx={{textAlign:"center" ,textShadow:"0 4px 10px rgba(0,0,0,0.5)"}} component="h1" variant="h2">
                    BookShop - easy buy books <br/>online
                </Typography>
            </div>
        </>

    );
}
