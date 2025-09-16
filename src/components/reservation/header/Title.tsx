import styles from "./Title.module.css"
import classNames from "classnames"

import React from 'react'
import { ChildrenProps } from '@/types'

const Title = ({ children }: ChildrenProps): React.JSX.Element => (
  <h1 className={classNames('text-display-title', styles.Title)}>{children}</h1>
)

export default Title