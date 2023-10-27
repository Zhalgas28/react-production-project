import { useTheme } from "app/providers/ThemeProvider"
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button"
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { ThemeEnum } from "app/providers/ThemeProvider/ui/ThemeContext";

export const ThemeSwitcher = () => {
  const {theme, changeTheme} = useTheme()

  return (
    <Button theme={ButtonThemeEnum.CLEAR} onClick={changeTheme}>
      {theme === ThemeEnum.LIGHT ?  <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
