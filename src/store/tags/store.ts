/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import create, { StoreApi, UseBoundStore } from 'zustand';
import { TagState } from '../../../types';
import { tagWorker } from '../../workers';

export const useTagStore = create<TagState>(() => ({
	tags: {}
})) as UseBoundStore<TagState, StoreApi<TagState>>;

tagWorker.onmessage = ({ data }): void => {
	useTagStore.setState(data);
};
