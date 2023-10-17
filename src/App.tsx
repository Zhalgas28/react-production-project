import React, {lazy, Suspense, useContext} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import {ThemeContext, ThemeEnum} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const HomePageLazy = lazy(() => import("./pages/Home"))
const AboutPageLazy = lazy(() => import("./pages/About"))
const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>

            <div>
                <button onClick={changeTheme}>Toggle Theme</button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/"} element={<HomePageLazy />} />
                <Route path={"/about"} element={<AboutPageLazy />} />
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;