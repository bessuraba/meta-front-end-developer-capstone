import React from 'react'
import styles from './Link.module.css'
import Link, { type LinkProps as NextLinkProps } from 'next/link'
import classNames from 'classnames'

type LinkProps = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  className?: string
}

const CustomLink = ({
  children,
  className,
  ...props
}: LinkProps): React.JSX.Element => (
  <Link className={classNames(styles.Link, className, 'text-lead-text')} {...props}>{children}</Link>
)

export default CustomLink