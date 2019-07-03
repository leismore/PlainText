/**
 * PlainText Class
 *
 * The class describes line-break aware text.
 *
 * @param  {string}  text
 * @param  {string}  [lb='\r\n']  - Line-break
 *
 * Error
 *   not string
 *   invalid line-break
 *
 * PlainText
 *   @attr  {string}          lb='\r\n'  - Line-break
 *   @attr  {array=>string}   text=null  - One element per paragraph
 */

'use strict';

const validLB = ['\r', '\n', '\r\n', '\n\r'];
const canoLB  = '\r\n';
const xmlLB   = '\n';
const SP2     = '\x20\x20';

module.exports = class PlainText
{
  static removeLB(text, rep=SP2)
  {
    /**
     * Remove line breaks
     * @param      {string} text
     * @param      {string} [rep=SP2]   - Replacement for line-breaks
     * @returns    {string | null}
     * @exception  {Error}   not string | invalid replacement
     */

    const ptnLBchar  = /(\r|\n)/u;
    const ptnLBcharG = /(\r|\n)/gu;

    if (typeof text !== 'string')
    {
      throw new Error('not string');
    }

    if (typeof rep !== 'string' || ptnLBchar.test(rep) === true)
    {
      throw new Error('invalid replacement');
    }

    if (text === '')
    {
      return null;
    }

    text = PlainText.unifyLB(text, xmlLB);
    if (text === null)
    {
      return null;
    }
    text = text.slice(0, -1);
    if (text === '')
    {
      return null;
    }
    text = text.replace(ptnLBcharG, rep);
    if (text === '')
    {
      return null;
    }

    return text;
  }

  static unifyLB(text, lb=canoLB)
  {
    /**
     * Unify line-breaks
     * @param      {string}  text
     * @param      {string}  [lb=canoLB]  - Line-break
     * @returns    {string}
     * @returns    {null}
     * @exception  {Error}   not string | invalid line-break
     */

    const ptn2char = /(\r\n|\n\r)/gu;
    const ptn1char = /(\r|\n)/gu;

    if (typeof text !== 'string')
    {
      throw new Error('not string');
    }

    if (validLB.includes(lb) === false)
    {
      throw new Error('invalid line-break');
    }

    if (text === '')
    {
      return null;
    }

    text = text.replace(ptn2char, xmlLB);
    text = text.replace(ptn1char, xmlLB);

    if (text[text.length-1] !== xmlLB)
    {
      text = text + xmlLB;
    }

    if (text === xmlLB)
    {
      return null;
    }

    text = text.replace(ptn1char, lb);

    return text;
  }
};
