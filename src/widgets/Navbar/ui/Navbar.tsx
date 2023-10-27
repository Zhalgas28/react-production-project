import { Link, LinkThemeEnum } from "shared/ui/Link/Link"
import styles from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const {t} = useTranslation()
  return (
    <div className={classNames(styles.navbar, {}, [className])}>       
      <div className={styles.links}>
        <Link to={"/"} theme={LinkThemeEnum.SECONDARY}>{t('Главная')}</Link>
        <Link to={"/about"} theme={LinkThemeEnum.OUTLINED}>{t('О нас')}</Link>
      </div>
    </div>
  )
}
