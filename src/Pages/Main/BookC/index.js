import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getInfos} from "../../../api";
import {Button, Container, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"250px",
    height:"100%",
    display:"flex",
    flexDirection: 'column',
    justifyContent: 'space-between'

}));

function Index(props) {
    const params = useParams();
    const[obj,setObj]=useState([])
    const navigate=useNavigate();
    useEffect(async () => {
        window.scrollTo(0, 0)
        const libObj = await getInfos(params.list_name_encoded)
        console.log(libObj.results.books)
        setObj(libObj.results.books)

    }, [])



    if (obj === undefined) {
        return (
            <h1>Loading...</h1>
        )
    } else {

        return (
            <Container  sx={{minHeight:"100vh",marginY:"50px"}}>
                <Button variant="outlined" sx={{fontSize:"20px"}} onClick={()=>navigate('/')}>Go Back</Button>

                <Typography variant="h4" component="h1" sx={{textAlign:"center",pb:"50px"}}>
               {params.list_name_encoded}
                </Typography>
                <Grid container spacing={5} sx={{justifyContent: 'center'}}>

                    {obj.map((item, index) =>(
                        <Grid item sx={{marginBottom: "20px"}} key={index}>
                            <Item>
                                <Box sx={{width: "100%",height:"200px"}}>
                                    <img style={{width: "100%", height: "100%",objectFit:"cover"}} src={item.book_image} alt=""/>
                                </Box>
                                <Box sx={{p:"20px"}}>
                                    <Typography sx={{textAlign:"start",py:"4px",color:"black"}}>
                                        title: {item.title}
                                    </Typography>
                                    <Typography sx={{textAlign:"start",py:"4px"}}>
                                        author: {item.author}
                                    </Typography>
                                    <Typography  sx={{textAlign:"start",}}>
                                        price: <span style={{color:"gold"}}>{item.price} $</span>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" sx={{backgroundColor:"#14668C",color:"white",paddingX:"20px",mr:"20px"}} onClick={()=>window.open(`${item.amazon_product_url}`)}>Buy</Button>
                                    <Button variant="contained" sx={{backgroundColor:"#14668C",color:"white",paddingX:"20px"}}>More</Button>
                                </Box>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default Index;