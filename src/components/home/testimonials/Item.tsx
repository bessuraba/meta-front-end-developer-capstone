import React from 'react'
import styles from './Item.module.css'
import classNames from 'classnames'

interface TestimonialItemProps {
  avatar: string
  name: string
  quote: string
  dish: string
  rating: number
}

const Item = ({ avatar, name, quote, dish, rating }: TestimonialItemProps): React.JSX.Element => (
  <div className={styles.Wrapper}>
    <div className={styles.Dish}>
      <h5 className={classNames('text-card-title', styles.Title)}>{dish}</h5>
      <p className={classNames('text-highlight-text', styles.Rating)}>
        <img src={'/icon-star.svg'} alt="star"/>
        {rating}
      </p>
    </div>
    <div className={styles.Author}>
      <img className={styles.Avatar} src={avatar} alt="avatar"/>
      <h4 className={classNames('text-section-title', styles.Name)}>{name}</h4>
    </div>
    <p className={classNames('text-paragraph', styles.Quote)}>{quote}</p>
  </div>
)

export default Item