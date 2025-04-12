import styles from './Testimonials.module.css'
import classNames from 'classnames'
import Item from './Item'

const items = [
  {
    avatar: '/avatar.png',
    name: 'John Doe',
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Euismod laoreet nostra fusce ex in nullam adipiscing arcu nunc. Tempor faucibus felis vulputate turpis magnis porttitor.',
    dish: 'Baked Salmon',
    rating: 5
  },
  {
    avatar: '/avatar.png',
    name: 'John Doe',
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Euismod laoreet nostra fusce ex in nullam adipiscing arcu nunc. Tempor faucibus felis vulputate turpis magnis porttitor.',
    dish: 'Pasta Carbonara',
    rating: 5
  },
  {
    avatar: '/avatar.png',
    name: 'John Doe',
    quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Euismod laoreet nostra fusce ex in nullam adipiscing arcu nunc. Tempor faucibus felis vulputate turpis magnis porttitor.',
    dish: 'Greek Salad',
    rating: 5
  }
]

const Testimonials = () => (
  <section className={styles.Wrapper}>
    <div className={styles.Container}>
      <h2 className={classNames('text-sub-title', styles.Title)}>Testimonials</h2>
      <div className={styles.Items}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials