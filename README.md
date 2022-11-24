# jsx-web-compiler

transform `jsx` to `js` by using `@babel/standalone`

## 使用说明

```js
import { compile } from 'jsx-web-compiler';

const name = 'world';
const code = `<div>hello, ${name}</div>`;

console.log(compile(code));
```

这将输出：

```js
/*#__PURE__*/ React.createElement('div', null, 'hello, world');
```

## Dom 事件

因为输入是 `jsx` 代码，所以 `class` 需要写成 `className`，另外事件需要满足 `React Dom Event` 命名规范，例如 `onClick`、`onChange` 等。

### 上下文

`compile` 函数接收第二个参数，你可以将你的 context 传入其中，并通过 `context` 关键字在字符串中使用。默认为 window。

```js
import { compile } from 'jsx-web-compiler';

window.sayHello = funcion() {
  console.log('hello', this)
}

// 可通过 context 关键字来访问上下文
const code = `<div className='main' onClick={context.sayHello}>click it</div>`;

console.log(compile(code, window));
```

### 任意参数

`compile` 函数接受任意个参数，从第三个参数开始，会将其作为参数传入，使用者可通过 `arguments` 关键字访问到从第三个开始的所有参数。

```js
import { compile } from 'jsx-web-compiler';

function sayHello() {
  console.log('hello', this);
}

// 关键字 arguments 表示传入 compile 函数的第三个开始的所有参数，可通过如下的下标访问
const code = `<div className='main' onClick={arguments[0]}>click it</div>`;

console.log(compile(code, null, sayHello));
```
