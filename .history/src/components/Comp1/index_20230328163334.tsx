// import "./comp1.scss"    // 全局引入，会影响其它组件
// 模块化引入
import styles from "./comp1.module.scss"
import { Button, Space } from 'antd';

function Comp() {
  return (
    <div className={styles.box}>
      <Button type="dashed">Dashed Button</Button>
    </div>
  )
}

export default Comp
