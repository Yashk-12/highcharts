/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Declatations
 *
 * */
export type AlignValue = ('center'|'left'|'right');

export type VerticalAlignValue = ('bottom'|'middle'|'top');

export interface AlignObject {
    align?: AlignValue;
    alignByTranslate?: boolean;
    verticalAlign?: VerticalAlignValue;
    x?: number;
    y?: number;
    width?: number;
}

/* *
 *
 *  Export
 *
 * */

export default AlignObject;
