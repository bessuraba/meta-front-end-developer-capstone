import styled from  './Header.module.css'
import Content from './Content'
import Image from './Image'

const Header = () => (
  <header className={styled.Wrapper}>
    <div className={styled.Container}>
      <Content />
      <Image />
    </div>
  </header>
)

export default Header