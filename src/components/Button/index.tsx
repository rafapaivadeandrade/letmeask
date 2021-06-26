import { ButtonHTMLAttributes } from "react";
import {ButtonIcon} from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <ButtonIcon className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>
  )
}