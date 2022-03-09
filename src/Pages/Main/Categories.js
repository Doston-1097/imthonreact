import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom'

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

}));

function Categories(props) {
    const products = useSelector((state) => state.allProducts.products.results)
    console.log(products)
    const navigate = useNavigate()

    const getName = (list_name_encoded) => {
        navigate(  navigate(`/${list_name_encoded}`))
    }

    if (products === undefined) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <Grid container spacing={5} sx={{justifyContent: 'center'}}>
                {products.map((book, index) =>
                    <Grid item sx={{marginBottom: "20px"}} key={index} onClick={() => getName(book.list_name_encoded)}>
                        <Item sx={{width: "200px", height: "100%"}}>
                            <img src="./images/A.svg" alt=""/>
                            <Typography sx={{mt: "20px"}}>{book.list_name}</Typography>
                        </Item>
                    </Grid>
                )}

            </Grid>
        );
    }
}


export default Categories;

