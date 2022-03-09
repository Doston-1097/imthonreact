import { GlobalStyles } from "@mui/material";
import * as url from "url";

const inputGlobalStyles = (mode) => (
    <GlobalStyles
        styles={{
            ...(mode === "light"
                ? {

                }
                : {

                }),
            body:{
                margin:"0",
                backgroundColor:"#EEEEEE"
            },

            ".MuiListItem-root ":{
                padding:"0 !important"
            },
            ".MuiContainer-root":{
            },
            ".css-labe24-MuiPaper-root-MuiAppBar-root":{
                backgroundColor:"white !important"
            },
            ".header":{
                background:`linear-gradient( rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.2)100%),url("./images/back.png")`,
                minHeight:"100vh",
                backgroundSize:"cover",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white"
            }



        }}
    />
);

export default inputGlobalStyles;
