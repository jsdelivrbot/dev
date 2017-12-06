import * as actionTypes from '../types';

export function changePhone(payload) {
	return {
		type: actionTypes.PHONE,
		payload: payload
	}
}