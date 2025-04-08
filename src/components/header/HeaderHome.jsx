import styled from  './HeaderHome.module.css'
import Content from './ContentHome'
import Image from './ImageHome'

const HeaderHome = () => (
  <header className={styled.Wrapper}>
    <div className={styled.Container}>
      <Content />
      <Image />
    </div>
  </header>
)

export default HeaderHome