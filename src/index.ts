import * as Babel from '@babel/standalone';
import React from 'react';

/**
 *
 * @param input like this <div>123</div>
 */
export const compile = (input: string, context: any = window, ...args: any) => {
  const code = Babel.transform(input, {
    presets: ['es2016', 'react'],
  })
    .code.replace('"use strict";', '')
    .trim();

  // const func = new Function('React', 'return ' + code);
  const boundArgs = args.map((item, index) => `$${index}`);
  const func = new Function(
    'React',
    'context',
    `return function(${boundArgs.join(',')}) { return ${code} }`
  )(React, context);

  return func.apply(context, args);
};
