1. JavaScript每年都会发布一个新版本的规范。最新的规范草案请见 [跳转](https://tc39.es/ecma262/)

2. 想了解最新最前沿的功能，包括“即将纳入规范的”（所谓的 “stage 3”），请看这里的提案 [跳转](https://github.com/tc39/proposals)

3. MDN（Mozilla）JavaScript 索引 是一个带有用例和其他信息的主要的手册。它是一个获取关于个别语言函数、方法等深入信息的很好的信息来源。你可以在 [跳转](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) 阅读它。

4. JavaScript 是一门还在发展中的语言，定期会添加一些新的功能。要查看它们在基于浏览器的引擎及其他引擎中的支持情况，请看：
    - [CanIUse](http://caniuse.com) —— 每个功能的支持表，例如，查看哪个引擎支持现代加密（cryptography）函数。
    - [compat-table](https://kangax.github.io/compat-table) —— 一份列有语言功能以及引擎是否支持这些功能的表格。
   
5. `||` 返回第一个 `真` 值。 `??` 返回第一个 `已定义的` 值。换句话说， `||` 无法区分 `false`、`0`、`空字符串` `""` 和 `null`/`undefined`。

6. 出于安全原因，`JavaScript` 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。
