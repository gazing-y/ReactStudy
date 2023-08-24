# todoList 案例小结

1. 拆分组件、实现静态组件，注意 className\style 写法
2. 动态初始化列表，如何确定将数据放在哪个组件的 state 中
   ——某个组件使用：放其自身的 state 中
   ——某些组件使用：放他们共同的父组件 state 中（状态提升）
3. 关于父子间通信：
   ——【父传子】 ：通过 props
   ——【子传父】 ：通过 props 传递，要求父提前给子传递一个函数

4. 注意 defaultChecked 和 checked 的区别，类似还有 defaultValue、value
5. 状态在哪里、操作状态的方法就在哪里
