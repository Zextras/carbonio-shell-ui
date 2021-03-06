/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { SHELL_APP_ID } from '../constants';
import { getSoapFetch } from './fetch';
import { goToLogin } from './go-to-login';

export const logout = (): Promise<void> =>
	getSoapFetch(SHELL_APP_ID)('EndSession', {
		_jsns: 'urn:zimbraAccount'
	}).then(() => {
		fetch('/?loginOp=logout')
			.then((res) => res)
			.then(goToLogin);
	});
