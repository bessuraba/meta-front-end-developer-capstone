import styles from "./Images.module.css"
import classNames from "classnames"

export const Restaurant = () =>  (
  <div className={classNames(styles.Wrapper, styles.RestaurantWrapper)}>
    <img className={classNames(styles.Image, styles.RestaurantImage)} src="/restaurant.jpg" alt="restaurant"/>
  </div>
)

export const Chefs = () =>  (
  <div className={classNames(styles.Wrapper, styles.ChefsWrapper)}>
    <img className={classNames(styles.Image, styles.ChefsImage)} src="/mario-and-adrian.jpg" alt="chef"/>
  </div>
)