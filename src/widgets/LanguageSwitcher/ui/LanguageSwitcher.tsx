import { useTranslation } from "react-i18next"
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
  }
  return (
    <Button onClick={toggle} theme={ButtonThemeEnum.CLEAR}>{ i18n.language == "en" ? "Русский" : "English" }</Button>
  )
}
