import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";

enum AppRoutesEnum {
    MAIN = "main",
    ABOUT = "about"
}

export const AppRoutePaths: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: "/",
    [AppRoutesEnum.ABOUT]: "/about"
}

export const AppRoutesConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: AppRoutePaths.main,
        element: <HomePage />
    },
    [AppRoutesEnum.ABOUT]: {
        path: AppRoutePaths.about,
        element: <AboutPage />
    }
}