import { combineEpics, ofType } from 'redux-observable'

import { ajax } from 'rxjs/ajax'
import { switchMap, takeUntil, tap } from 'rxjs/operators'
import { timer, of } from 'rxjs'

import { EXCHANGE_API_URL, EXCHANGE_APP_ID } from '../constants'

import { RATE_POLL, START, STOP, SUCCESS, FAIL } from '../constants/actionTypes'

import { getRateData } from '../actions'

const pollEpic = action$ =>
	action$.pipe(
		ofType(RATE_POLL + START),
		switchMap(() =>
			timer(0, 4000)
				.pipe(
					switchMap(() =>
						ajax({
							url: `${EXCHANGE_API_URL}?app_id=${EXCHANGE_APP_ID}`,
							crossDomain: true,
						}).pipe(
							switchMap(({ response }) => of(getRateData(SUCCESS)(response))),
							tap(data => of(getRateData(FAIL)(data))),
						),
					),
				)
				.pipe(takeUntil(action$.ofType(RATE_POLL + STOP))),
		),
	)

export default combineEpics(pollEpic)
