# PlainText

A NodeJS package: PlainText class.

## Donation

Buy me a coffee via [![PayPal Donation](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SPPJPYRY4D6WC&item_name=Give+people+an+option+to+support+my+open+source+software.&currency_code=AUD&source=url)

## Motivation

Provide a general purpose NodeJS class for handling plain text. It provides:

1. Line-breaks unification
2. Combining multiple-line-text into a single-line-text.

## Installation

`npm install @leismore/plaintext`

## Test

`npm test`

## Example

```typescript
import {PlainText} from '@leismore/plaintext';
let text = `First line \r\n Second Line \n More lines...`;
text = new PlainText(text, '\r\n');
console.log(String(text));
```

## Class Structure

```typescript
class PlainText
{
  public text:PlainText_Text = null;             // Array: one line per element
  public lb:PlainText_LB     = PlainText_canoLB; // Line-break

  /**
   * @param      {string}        text
   * @param      {PlainText_LB}  [lb=PlainText_canoLB] - Line-break
   * @exception  {Error}         - not_string
   */
  public constructor(text:string, lb:PlainText_LB=PlainText_canoLB)

  public toString():string

  /**
   * Unify line-breaks
   * @param      {string}        text
   * @param      {PlainText_LB}  [lb=PlainText_canoLB] - Line-break
   * @returns    {string | null} - Empty string will be converted to null
   * @exception  {Error}         - not_string
   */
  public static unifyLB(text:string, lb:PlainText_LB=PlainText_canoLB): string|null

  /**
   * Remove line breaks
   * @param      {string} text
   * @param      {string} [rep=PlainText_SP2] - Replacement for line-breaks
   * @returns    {string | null}              - Empty string converted to null
   * @exception  {Error}                      - not_string | invalid_replacement
   */
  public static removeLB(text:string, rep:string=PlainText_SP2): string|null
}

type PlainText_Text = ( string[] | null );
type PlainText_LB   = ( '\r' | '\n' | '\r\n' | '\n\r' );

const PlainText_canoLB  = '\r\n';
const PlainText_xmlLB   = '\n';
const PlainText_SP2     = '\x20\x20';
```

## License

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / July 4, 2019)
