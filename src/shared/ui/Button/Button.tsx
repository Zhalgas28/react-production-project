import { ButtonHTMLAttributes, FC } from "react"
import styles from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames"

export enum ButtonThemeEnum {
  PRIMARY = "primary",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemeEnum
}

export const Button: FC<ButtonProps> = (props) => {
  const { 
    className,
    children,
    theme = ButtonThemeEnum.PRIMARY,
    ...otherProps
  } = props
  return (
    <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
