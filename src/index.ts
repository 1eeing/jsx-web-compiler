import Babel from '@babel/standalone';

/**
 *
 * @param input like this <div>123</div>
 */
export const compile = (input: string) => {
  const code = Babel.transform(input, {
    presets: ['es2015', 'react'],
  })
    .code.replace('"use strict";', '')
    .trim();

  const func = new Function('return ' + code);

  return func();
};
