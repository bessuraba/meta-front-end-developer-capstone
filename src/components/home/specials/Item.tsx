import React from 'react'
import styles from "./Item.module.css"
import classNames from "classnames"

interface ItemProps {
  src: string
  title: string
  price: string
  description: string
  href: string
}

const Item = ({ src, title, price, description, href }: ItemProps): React.JSX.Element => (
  <a className={styles.Wrapper} href={href}>
    <img className={styles.Image} src={src} alt={title}/>
    <div className={styles.Content}>
      <div className={styles.Header}>
        <h5 className={classNames('text-card-title', styles.Title)}>{title}</h5>
        <p className={classNames('text-card-title', styles.Price)}>{price}</p>
      </div>
      <p className={classNames('text-paragraph', styles.Description)}>{description}</p>
      <p className={classNames('text-highlight-text', styles.Order)}>Order delivery <img src={'/icon-moped.svg'} alt="moped"/></p>
    </div>
  </a>
)

export default Item