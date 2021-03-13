import { assert } from 'chai';
import { PlainText, PlainText_canoLB as canoLB, PlainText_SP2 as SP2 } from '../src/index';

const CR = '\r';
const LF = '\n';
const CRLF = '\r\n';
const LFCR = '\n\r';

const empty_text = '';
const text_only_lb = CR;
const text_lbs = CR + LFCR;
const text_diff_lbs = `this is${CR} a string ${LF}with ${LF}diffrent${CRLF} line-breaks. ${LFCR}Can you help me?`;
const text_unified_lbs = `this is${canoLB} a string ${canoLB}with ${canoLB}diffrent${canoLB} line-breaks. ${canoLB}Can you help me?${canoLB}`;
const text_lb_removed = `this is${SP2} a string ${SP2}with ${SP2}diffrent${SP2} line-breaks. ${SP2}Can you help me?`;

describe('PlainText class', function(){

    describe('unifyLB method', function(){
        it('Only Text', function(){
            let t = PlainText.unifyLB(text_diff_lbs);
            assert(t === text_unified_lbs);
        });
        it('With LB', function(){
            let t = PlainText.unifyLB(text_diff_lbs, canoLB);
            assert(t === text_unified_lbs);
        });
        it('Empty string', function(){
            let t = PlainText.unifyLB(empty_text);
            assert(t === null);
                t = PlainText.unifyLB(empty_text, canoLB);
            assert(t === null);
        });
    });

    describe('removeLB method', function(){
        it('Only Text', function(){
            let t = PlainText.removeLB(text_diff_lbs);
            assert(t === text_lb_removed);
        });
        it('With Replacement', function(){
            let t = PlainText.removeLB(text_diff_lbs, SP2);
            assert(t === text_lb_removed);
        });
        it('Empty string', function(){
            let t = PlainText.removeLB(empty_text);
            assert(t === null);
                t = PlainText.removeLB(empty_text, SP2);
            assert(t === null);
        });
        it('Only line-breaks', function(){
            let t = PlainText.removeLB(text_only_lb);
            assert(t === null);
                t = PlainText.removeLB(text_lbs);
            assert(t === SP2);
                t = PlainText.removeLB(text_only_lb, SP2);
            assert(t === null);
                t = PlainText.removeLB(text_lbs, SP2);
            assert(t === SP2);
        });
    });

    describe('Constructor', function(){
        it('Only Text', function(){
            let t = new PlainText(text_diff_lbs);
            assert(String(t) === text_unified_lbs);
        });
        it('With LB', function(){
            let t = new PlainText(text_diff_lbs, canoLB);
            assert(String(t) === text_unified_lbs);
        });
        it('Empty string', function(){
            let t = new PlainText('');
            assert(String(t) === '');
                t = new PlainText('', canoLB);
            assert(String(t) === '');
        });
        it('Only line-breaks', function(){
            let t = new PlainText(LF);
            assert(String(t) === '');
                t = new PlainText(text_lbs);
            assert(String(t) === canoLB + canoLB);
                t = new PlainText(LF, canoLB);
            assert(String(t) === '');
                t = new PlainText(text_lbs, canoLB);
            assert(String(t) === canoLB + canoLB);
        });
    });

    describe('toString method', function(){
        it('Normal', function(){
            let t = new PlainText(text_diff_lbs);
            assert(String(t) === text_unified_lbs);
                t = new PlainText(text_diff_lbs, canoLB);
            assert(String(t) === text_unified_lbs);
        });
        it('Empty string', function(){
            let t = new PlainText('');
            assert(String(t) === '');
                t = new PlainText('', canoLB);
            assert(String(t) === '');
        });
        it('Line-breaks', function(){
            let t = new PlainText(text_lbs);
            assert(String(t) === canoLB + canoLB);
                t = new PlainText(text_lbs, canoLB);
            assert(String(t) === canoLB + canoLB);
        });
    });

});
