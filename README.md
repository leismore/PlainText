# PlainText

A NodeJS package: PlainText class.

# Motivation

Provide a general purpose NodeJS class for handling PlainText. It provides:

1. Line-breaks unification
2. Combining multiple-line text into single-line.

# Class Structure

PlainText

*   @attr  {string}          lb='\r\n'  - Line-break
*   @attr  {array=>string}   text=null  - One element per paragraph

# Syntax

`new PlainText(text, [lb='\r\n']);`

## Parameters:

* @param  {string}  text
* @param  {string}  [lb='\r\n']  - Line-break

## Error

*   not string
*   invalid line-break

## Methods

### Unify Line-Breaks

`static unifyLB(text, lb='\r\n')`

* @param      {string}  text
* @param      {string}  [lb=canoLB]  - Line-break
* @returns    {string}
* @returns    {null}
* @exception  {Error}   not string | invalid line-break

### Remove Line-Breaks

`static removeLB(text, rep='  ')`

* @param      {string} text
* @param      {string} [rep=two_spaces]   - Replacement for line-breaks
* @returns    {string | null}
* @exception  {Error}   not string | invalid replacement

# Installation

`npm install @leismore/plaintext`

# Examples

```javascript
const PlainText = require('@leismore/plaintext');
let testText    = 'This a text using mixed line-breaks. \n Paragraph 2: text text text. \r\n Paragraph 3: text text text \r End text';
testText        = new PlainText(testText, '\n');
console.log( JSON.stringify({result: String(testText)}) );
```

You may also use static methods:

## Unify Line-Breaks

```javascript
const PlainText = require('@leismore/plaintext');
let testText    = 'This a text using mixed line-breaks. \n Paragraph 2: text text text. \r\n Paragraph 3: text text text \r End text';
console.log( JSON.stringify({result: PlainText.unifyLB(testText, '\n')}) );
```

## Combine Multiple-Lines Text

```javascript
const PlainText = require('@leismore/plaintext');
let testText    = 'This a text using mixed line-breaks. \n Paragraph 2: text text text. \r\n Paragraph 3: text text text \r End text';
console.log( JSON.stringify({result: PlainText.removeLB(testText, '  ')}) );
```

# License

MIT License

Copyright (c) 2019 leismore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / July 4, 2019)
