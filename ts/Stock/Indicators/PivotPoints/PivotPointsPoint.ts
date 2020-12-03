/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import BaseSeries from '../../../Core/Series/Series.js';
const {
    seriesTypes: {
        sma: SMAIndicator
    }
} = BaseSeries;
import PivotPointsIndicator from './PivotPointsIndicator';

/* eslint-disable valid-jsdoc */

/**
 * @private
 */
function destroyExtraLabels(
    point: PivotPointsPoint,
    functionName: string
): void {
    var props: Array<string> = point.series.pointArrayMap,
        prop: string,
        i: number = props.length;

    (BaseSeries.seriesTypes.sma.prototype.pointClass.prototype as any)[functionName].call(point);

    while (i--) {
        prop = 'dataLabel' + props[i];
        // S4 dataLabel could be removed by parent method:
        if ((point as any)[prop] && (point as any)[prop].element) {
            (point as any)[prop].destroy();
        }
        (point as any)[prop] = null;
    }
}

/* eslint-enable valid-jsdoc */

/* *
 *
 *  Class
 *
 * */

class PivotPointsPoint extends SMAIndicator.prototype.pointClass {
    destroyElements(
        this: PivotPointsPoint
    ): void {
        destroyExtraLabels(this, 'destroyElements');
    }
    // This method is called when removing points, e.g. series.update()
    destroy(
        this: PivotPointsPoint
    ): void {
        destroyExtraLabels(this, 'destroyElements');
    }
}
interface PivotPointsPoint {
    P: number;
    pivotLine: string;
    series: PivotPointsIndicator;
}

/* *
 *
 *  Default Export
 *
 * */

export default PivotPointsPoint;