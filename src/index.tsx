import { render } from "react-dom"
import "./app/styles/index.scss"
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import "shared/config/i18n/i18nConfig"
import { Suspense } from "react";


render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="loading">
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)