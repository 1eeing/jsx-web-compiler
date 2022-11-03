import * as Babel from '@babel/standalone';
import React from 'react';

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

  const func = new Function('React', 'return ' + code);

  return func(React);
};
