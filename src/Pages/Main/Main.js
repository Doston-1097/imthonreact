import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBooks} from "../../api";
import {setProducts} from "../../redux/actions/ProductAction";
import {Container, Grid, Typography} from "@mui/material";
import Categories from "./Categories";


function Main(props) {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()


    useEffect(async () => {
        const obj = await getBooks()
        dispatch(setProducts(obj))
    }, [])

    console.log('products:', products)

    return (
        <>
            <Container  sx={{marginY:"50px"}}>
                <Typography variant="h3" component="h1" sx={{textAlign:"center",pb:"50px"}}>
                    Categories
                </Typography>
                <Categories/>
            </Container>
        </>
    );
}

export default Main;