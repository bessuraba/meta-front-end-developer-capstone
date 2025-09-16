import styles from "./Specials.module.css"
import Bottom from "./Bottom"
import Item from "./Item"
import classNames from "classnames"

const items = [
  {
    src: '/greek-salad.jpg',
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style black olives',
    href: '/menu/greek-salad'
  },
  {
    src: '/greek-salad.jpg',
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
    href: '/menu/bruschetta'
  },
  {
    src: '/greek-salad.jpg',
    title: 'Lemon Mousse',
    price: '$5.99',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be',
    href: '/menu/lemon-mousse'
  }
]

const Specials = () => (
  <section className={styles.Wrapper}>
    <div className={styles.Container}>
      <h2 className={classNames('text-sub-title', styles.Title)}>Specials</h2>
      <div className={styles.Items}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
      <Bottom />
    </div>
  </section>
)

export default Specials