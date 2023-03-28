## 包管理
### 项目搭建
- `npm create vite@latest`
- `yarn create vite`
### yarn 添加依赖
- 开发依赖包: `yarn add [package] --dev`
- 同等的依赖包: `yarn add [package] --peer`
  - “同伴依赖”，一种特殊的依赖，在发布包的时候需要。
  - 意味着安装包的用户也需要和包同样的依赖。
- 可选择的依赖包: `yarn add [package] --optional`
  - 可选依赖，意味着依赖是可选的。这种依赖即便安装失败，Yarn也会认为整个依赖安装过程是成功的。
  - 适用于那些即便没有成功安装可选依赖，也有后备方案的情况

## 编码规范
### 快捷键
| 功能 | 按键 |
| :---: | :---: |
逐词移动 | ctrl+方向
逐词删除 | ctrl+delete
逐词选择 | ctrl+shift+方向
选择一行 | end->shift+home
选择同样 | ctrl+d
区块选择 | alt+shift+右
### 样式引入顺序
- 样式初始化往往放在最前
- UI框架样式
- 组件样式

## CSS
### 清除默认样式
- 插件
  - reset-css
  - Normalize.css
- 样式初始化往往放在最前，防止样式覆盖
