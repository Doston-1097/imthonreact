import React, {createContext, useState} from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Main from "./Pages/Main/Main";
import {ThemeProvider} from "@mui/material/styles";
import makeTheme from "./Styles/makeTheme";
import inputGlobalStyles from "./Styles/GlobalStyle";
import {Routes,Route} from 'react-router-dom'
import BookC from "./Pages/Main/BookC";
import Footer from "./components/Footer";
export const DarkModeContext = createContext({
    mode: "light",
    toggleMode: () => {
    },
});


        function App(props) {
            const [mode, setMode] = useState("light");
            const theme = makeTheme(mode);
            return (
                <div>
                    <DarkModeContext.Provider
                        value={{mode, toggleMode: () => setMode(mode === "light" ? "dark" : "light")}}>
                        <ThemeProvider theme={theme}>
                            {inputGlobalStyles(mode)}
                            <Provider store={store}>
                                <Header/>
                                <Routes>
                                    <Route path="/" element={<Main/>}/>
                                    <Route path="/:list_name_encoded" element={<BookC/>}/>
                                </Routes>
                                <Footer/>
                            </Provider>
                        </ThemeProvider>
                    </DarkModeContext.Provider>

                </div>
            );
        }

    export default App;