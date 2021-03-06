/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-default */
import { filter, map } from 'lodash';

import StoreFactory from '../../redux/store-factory';

import { loadApp, unloadApps } from './load-app';
import { CarbonioModule } from '../../../types';
import { injectSharedLibraries } from './shared-libraries';
import { getUserSetting } from '../../store/account';
import { useReporter } from '../../reporting';
import { SHELL_APP_ID } from '../../constants';

export function loadApps(storeFactory: StoreFactory, apps: Array<CarbonioModule>): void {
	injectSharedLibraries();
	const appsToLoad = filter(apps, (app) => {
		if (app.name === SHELL_APP_ID) return false;
		if (app.attrKey && getUserSetting('attrs', app.attrKey) === 'FALSE') return false;
		return true;
	});
	console.log(
		'%cLOADING APPS',
		'color: white; background: #2b73d2;padding: 4px 8px 2px 4px; font-family: sans-serif; border-radius: 12px; width: 100%'
	);
	useReporter.getState().setClients(appsToLoad);
	Promise.allSettled(map(appsToLoad, (app) => loadApp(app, storeFactory)));
}

export function unloadAllApps(): Promise<void> {
	return unloadApps();
}
