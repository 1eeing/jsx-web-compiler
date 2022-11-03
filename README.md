# jsx-web-compiler

transform `jsx` to `js` by using `@babel/standalone`

## Usage

```js
import { compile } from 'jsx-web-compiler';

const name = 'world';
const code = `<div>hello, ${name}</div>`;

console.log(compile(code));
```

This will output:

```js
/*#__PURE__*/ React.createElement('div', null, 'hello, world');
```
