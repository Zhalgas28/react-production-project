import {createContext} from "react";

export enum ThemeEnum {
    LIGHT = "light",
    dark = "dark"
}

interface IThemeContext {
    theme?: ThemeEnum,
    changeTheme?: (theme: ThemeEnum) => void
}

export const localStorageThemeKey = "theme"
export const ThemeContext = createContext<IThemeContext>({})