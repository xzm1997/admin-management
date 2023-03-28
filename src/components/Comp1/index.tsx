// import "./comp1.scss"    // 全局引入，会影响其它组件
// 模块化引入
import styles from "./comp1.module.scss"

function Comp() {
  return (
    <div className={styles.box}>
      组件1
    </div>
  )
}

export default Comp
