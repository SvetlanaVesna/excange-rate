import { combineEpics, ofType } from 'redux-observable'

import { ajax } from 'rxjs/ajax'
import { switchMap, takeUntil, catchError, startWith } from 'rxjs/operators'
import { timer, of } from 'rxjs'

import {
	APP_URL,
	EXCHANGE_API_URL,
	EXCHANGE_APP_ID,
	POLL_PERIOD,
} from '../constants'

import { RATE_POLL, START, STOP, SUCCESS, FAIL } from '../constants/actionTypes'

import { getRateData, getRateStartAction } from '../actions'

const pollEpic = action$ =>
	action$.pipe(
		ofType(RATE_POLL + START),
		switchMap(() =>
			timer(0, POLL_PERIOD)
				.pipe(
					switchMap(() =>
						ajax({
							url: `${APP_URL}${EXCHANGE_API_URL}?app_id=${EXCHANGE_APP_ID}`,
							crossDomain: true,
						}).pipe(
							switchMap(({ response }) => of(getRateData(SUCCESS)(response))),
							catchError(({ response }) => of(getRateData(FAIL)(response))),
						),
					),
					startWith(getRateStartAction()),
				)
				.pipe(takeUntil(action$.ofType(RATE_POLL + STOP))),
		),
	)

export default combineEpics(pollEpic)
