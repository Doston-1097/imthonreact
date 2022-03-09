import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Container} from "@mui/material";

function Footer(props) {
    return (
        <Paper sx={{backgroundColor:"#C4C4C4",mt:"100px",borderRadius:"0"}}>
            <Container sx={{py:"20px",display:"flex",justifyContent: 'space-between',alignItems:"center"}}>
                <img src="./images/Logo.svg" alt=""/>
                <img src="./images/Algorismic.svg" alt="" onClick={()=>window.open(`https://www.algorismic.uz/`)}/>
            </Container>

        </Paper>
    );
}

export default Footer;