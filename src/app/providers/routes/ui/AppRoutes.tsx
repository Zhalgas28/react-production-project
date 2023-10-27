import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";
import {AppRoutesConfig} from "shared/config/routesConfig/routesConfig";

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                { Object.values(AppRoutesConfig).map(({ path, element }) => {
                    return <Route key={path} path={path} element={element} />
                }) }
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;