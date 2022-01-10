/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import create from 'zustand';
import { AccountContext, AccountState, SoapFetch } from '../../../types';
import { getInfo } from '../../network/get-info';
import { getSoapFetch, getXmlSoapFetch } from '../../network/fetch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useAccountStore = create<AccountState>((set, get) => ({
	account: undefined,
	version: '',
	settings: {
		prefs: {},
		attrs: {},
		props: []
	},
	context: {},
	setContext: (context: AccountContext): void => set({ context }),
	init: (): Promise<void> => getInfo(set, get),
	soapFetch: (app: string): SoapFetch => getSoapFetch(app, set, get),
	xmlSoapFetch: (app: string): SoapFetch => getXmlSoapFetch(app, set, get),
	usedQuota: 0,
	lastNotificationTime: Date.now(),
	pollingInterval: 30000
}));
