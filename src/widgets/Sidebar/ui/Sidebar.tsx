import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Sidebar.module.scss"
import { useState } from "react"
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"
import { useTranslation } from "react-i18next"

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const {t} = useTranslation()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={classNames(styles.sidebar, {[styles.open]: isOpen}, [className])}>
      <Button theme={ButtonThemeEnum.PRIMARY} onClick={() => setIsOpen(prev => !prev)} className={styles.toggleTheme}>
        {t('Переключить')}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher /> 
        <LanguageSwitcher />
      </div>
    </div>
  )
}
