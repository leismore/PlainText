# PlainText

A NodeJS package: PlainText class.

# Motivation

Provide a general purpose NodeJS class for handling plain text. It provides:

1. Line-breaks unification
2. Combining multiple-line-text into a single-line-text.

# Installation

`npm install @leismore/plaintext`

# Example

```typescript
import {PlainText} from '@leismore/plaintext';
// Or
const PlainText = require('@leismore/plaintext').PlainText;

let text = `First line \r\n Second Line \n More lines...`;
text = new PlainText(text, '\r\n');
console.log(String(text));
```

# Class Structure

```typescript
class PlainText
{
  public text:Text = null;   // Array: one line per element
  public lb:LB     = canoLB; // Line-break

  /**
   * @param      {string}        text
   * @param      {LB}            [lb=canoLB]   - Line-break
   * @exception  {Error}         - not_string
   */
  public constructor(text:string, lb:LB=canoLB)

  public toString():string

  /**
   * Unify line-breaks
   * @param      {string}        text
   * @param      {LB}            [lb=canoLB]  - Line-break
   * @returns    {string | null} - Empty string will be converted to null
   * @exception  {Error}         - not_string
   */
  public static unifyLB(text:string, lb:LB=canoLB): string|null

  /**
   * Remove line breaks
   * @param      {string} text
   * @param      {string} [rep=SP2]   - Replacement for line-breaks
   * @returns    {string | null}      - Empty string converted to null
   * @exception  {Error}   not_string | invalid_replacement
   */
  public static removeLB(text:string, rep:string=SP2): string|null
}

type Text = ( string[] | null );
type LB = ( '\r' | '\n' | '\r\n' | '\n\r' );

const canoLB  = '\r\n';
const xmlLB   = '\n';
const SP2     = '\x20\x20';
```

# License

MIT

# Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / July 4, 2019)
