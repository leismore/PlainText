/**
 * PlainText Class
 *
 * Error
 *   not_string
 *   invalid_linebreak
 *   invalid_replacement
 */

import {LB}   from './type/LB';
import {Text} from './type/Text';

const canoLB  = '\r\n';
const xmlLB   = '\n';
const SP2     = '\x20\x20';

class PlainText
{
  public text:Text = null;
  public lb:LB     = canoLB;

  public constructor(text:string, lb:LB=canoLB)
  {
    try
    {
      let parsedText:string|null = PlainText.unifyLB(text, lb);
      if (parsedText === null)
      {
        this.lb   = lb;
        this.text = null;
      }
      else
      {
        this.lb   = lb;
        this.text = parsedText.split(lb);
        this.text.pop();
      }
    }
    catch(e)
    {
      throw e;
    }
  }

  public toString():string
  {
    if (this.text === null)
    {
      return '';
    }
    else
    {
      return this.text.join(this.lb) + this.lb;
    }
  }

  public static unifyLB(text:string, lb:LB=canoLB): string|null
  {
    /**
     * Unify line-breaks
     * @param      {string}        text
     * @param      {LB}            [lb=canoLB]  - Line-break
     * @returns    {string | null} - Empty string will be converted to null
     * @exception  {Error}         - not_string
     */

    const ptn2char = /(\r\n|\n\r)/gu;
    const ptn1char = /(\r|\n)/gu;

    if (typeof text !== 'string')
      { throw new Error('not_string'); }
    else if (text === '')
      { return null; }

    text = text.replace(ptn2char, xmlLB);
    text = text.replace(ptn1char, xmlLB);

    if (text[text.length-1] !== xmlLB)
      { text = text + xmlLB; }

    if (text === xmlLB)
      { return null; }

    text = text.replace(ptn1char, lb);
    return text;
  }

  public static removeLB(text:string, rep:string=SP2): string|null
  {
    /**
     * Remove line breaks
     * @param      {string} text
     * @param      {string} [rep=SP2]   - Replacement for line-breaks
     * @returns    {string | null}      - Empty string converted to null
     * @exception  {Error}   not_string | invalid_replacement
     */

    const ptnLBchar  = /(\r|\n)/u;
    const ptnLBcharG = /(\r|\n)/gu;

    if (typeof text !== 'string')
      { throw new Error('not_string'); }
    else if   (text === '')
      { return null; }

    if (typeof rep !== 'string' || ptnLBchar.test(rep) === true)
      { throw new Error('invalid_replacement'); }

    // Unify line-breaks
    let unifiedText = PlainText.unifyLB(text, xmlLB);
    if (unifiedText === null)
      { return null; }
    else
      { unifiedText = unifiedText.slice(0, -1); }

    if (unifiedText === '')
      { return null; }

    // Remove line-breaks
    unifiedText = unifiedText.replace(ptnLBcharG, rep);
    if (unifiedText === '')
      { return null; }
    else
      { return unifiedText; }
  }
}

export {PlainText};
