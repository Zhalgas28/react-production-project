import React, {FC, useState} from 'react';
import {localStorageThemeKey, ThemeContext, ThemeEnum} from "./ThemeContext";

const ThemeProvider: FC = ({ children }) => {

    const themeValue = localStorage.getItem(localStorageThemeKey) as ThemeEnum || ThemeEnum.LIGHT

    const [theme, setTheme] = useState<ThemeEnum>(themeValue)

    const toggleTheme = (theme: ThemeEnum) => {
        setTheme(theme)
        localStorage.setItem(localStorageThemeKey, theme)
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            changeTheme: toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;