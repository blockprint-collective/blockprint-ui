import { FC, ReactNode, createElement } from 'react'
import addClassString from '@/utils/addClassString'

const ELEMENT = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  label: 'label',
  span: 'span',
  p: 'p',
}

const tagsSupported = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'label', 'span'] as const

type TagsSupported = (typeof tagsSupported)[number]

export type TypographyFamily = 'font-openSauce' | 'font-archivo'

export type TypographyColor =
  | 'text-light'
  | 'text-light80'
  | 'text-light70'
  | 'text-light50'
  | 'text-purple'
  | 'text-good'
  | 'text-fair'
  | 'text-error'
  | 'text-dark'

export type TypographyType =
  | 'text-xs'
  | 'text-tiny'
  | 'text-base'
  | 'text-base1'
  | 'text-base2'
  | 'text-base3'
  | 'text-base4'
  | 'text-base5'
  | 'text-base6'

export interface TypographyProps {
  className?: string
  color?: TypographyColor
  children: ReactNode | ReactNode[]
  as?: TagsSupported
  type?: TypographyType
  style?: any
  isBold?: boolean
  isUpperCase?: boolean
  isCapitalize?: boolean
  fontWeight?: 'font-bold' | 'font-normal' | 'font-light'
  family?: TypographyFamily
}

const Typography: FC<TypographyProps> = ({
  as,
  type = 'text-base',
  isBold,
  color = 'text-light',
  className,
  fontWeight = 'font-normal',
  children,
  isUpperCase,
  isCapitalize,
  family = 'font-openSauce',
  ...props
}) => {
  const classes = addClassString('m-0', [
    className,
    type,
    family,
    color,
    isBold ? 'font-bold' : fontWeight,
    isUpperCase ? 'uppercase' : isCapitalize ? 'capitalize' : 'normal-case',
  ])
  return createElement(
    as ? ELEMENT[as] : (ELEMENT.p as any),
    {
      ...props,
      className: classes,
    },
    children,
  )
}

export default Typography
