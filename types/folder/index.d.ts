/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { BaseFolder, LinkFolderFields, SearchFolderFields } from '../misc';

export type FolderFields = {
	// Additional Parameters
	isLink: boolean;
	depth: number;
	parent?: Folder | LinkFolder;
	children: Array<Folder | LinkFolder>;
};
export type Folder = BaseFolder & FolderFields & { isLink: false };

export type LinkFolder = BaseFolder & FolderFields & LinkFolderFields & { isLink: true };

export type SearchFolder = BaseFolder &
	Pick<FolderFields, 'parent' | 'isLink'> &
	SearchFolderFields;

export type Folders = { [id: string]: Folder | LinkFolder };
export type Roots = { [id: string]: Folder | LinkFolder };
export type Searches = { [id: string]: SearchFolder };
export type FolderState = {
	folders?: Folders;
	roots: Roots;
	searches: Searches;
};
