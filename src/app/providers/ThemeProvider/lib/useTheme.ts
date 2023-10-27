import {useContext} from "react";
import {ThemeContext, ThemeEnum} from "../ui/ThemeContext";

export const useTheme = () => {
    const {theme, changeTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        changeTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.dark : ThemeEnum.LIGHT)
    }

    return {
        theme,
        changeTheme: toggleTheme
    }
}