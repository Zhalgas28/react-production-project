import { FC } from "react"
import styles from "./Link.module.scss"
import { Link as RouterLink, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"

export enum LinkThemeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outlined",
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: LinkThemeEnum
}

export const Link: FC<AppLinkProps> = (props) => {
  const { 
    to,
    children,
    className, 
    theme = LinkThemeEnum.PRIMARY,
    ...otherProps
  } = props
  return (
    <RouterLink 
      to={to} 
      className={classNames(styles.link, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </RouterLink>
  )
}