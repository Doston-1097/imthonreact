import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Container, Grid} from "@mui/material";

function Footer(props) {
    return (
        <Paper sx={{backgroundColor:"#C4C4C4 !important",mt:"100px",borderRadius:"0"}}>
            <Container sx={{py:"20px",display:"flex",justifyContent: 'space-between',alignItems:"center"}}>


                <Grid container spacing={2} sx={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
                    <Grid item>
                        <img src="./images/Logo.svg" alt=""/>
                    </Grid>
                    <Grid item>
                        <img src="./images/Algorismic.svg" alt="" onClick={()=>window.open(`https://www.algorismic.uz/`)}/>
                    </Grid>
                </Grid>
            </Container>

        </Paper>
    );
}

export default Footer;