import styles from "./Drawer.module.css"
import { useCallback, useState } from "react"

const Button = (props) => (
  <button
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={props.isDrawerOpen}
    {...props}>
    b
  </button>
)
const Drawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <Button isDrawerOpen={isDrawerOpen}/>
    </>
  )
}

export default Drawer