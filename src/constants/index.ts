/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { DynamicThemeFix } from 'darkreader';

/*
	reference: https://zextras.atlassian.net/wiki/spaces/IRIS/pages/223215854/UI+Guidelines+and+theming
*/
export const ZIMBRA_STANDARD_COLORS = [
	{ zValue: 0, hex: '#000000', zLabel: 'black' },
	{ zValue: 1, hex: '#2b73d2', zLabel: 'blue' },
	{ zValue: 2, hex: '#2196d3', zLabel: 'cyan' },
	{ zValue: 3, hex: '#639030', zLabel: 'green' },
	{ zValue: 4, hex: '#1a75a7', zLabel: 'purple' },
	{ zValue: 5, hex: '#d74942', zLabel: 'red' },
	{ zValue: 6, hex: '#ffc107', zLabel: 'yellow' },
	{ zValue: 7, hex: '#edaeab', zLabel: 'pink' },
	{ zValue: 8, hex: '#828282', zLabel: 'gray' },
	{ zValue: 9, hex: '#ba8b00', zLabel: 'orange' }
];

export const FOLDERS = {
	USER_ROOT: '1',
	INBOX: '2',
	TRASH: '3',
	SPAM: '4',
	SENT: '5',
	DRAFTS: '6',
	CONTACTS: '7',
	TAGS: '8',
	CONVERSATIONS: '9',
	CALENDAR: '10',
	ROOT: '11',
	NOTEBOOK: '12', // no longer created in new mailboxes since Helix (bug 39647).  old mailboxes may still contain a system folder with id 12
	AUTO_CONTACTS: '13',
	IM_LOGS: '14',
	TASKS: '15',
	BRIEFCASE: '16'
};

export const SHELL_APP_ID = 'carbonio-shell-ui';
export const SETTINGS_APP_ID = 'settings';
export const ACCOUNTS_APP_ID = 'accounts';
export const SEARCH_APP_ID = 'search';
export const ACTION_TYPES = {
	CONVERSATION: 'conversation',
	CONVERSATION_lIST: 'conversation_list',
	MESSAGE: 'message',
	MESSAGE_lIST: 'message_list',
	CONTACT: 'contact',
	CONTACT_lIST: 'contact_list',
	INVITE: 'invite',
	INVITE_lIST: 'invite_list',
	APPOINTMENT: 'appointment',
	APPOINTMENT_lIST: 'appointment_list',
	FOLDER: 'folder',
	FOLDER_lIST: 'folder_list',
	CALENDAR: 'calendar',
	CALENDAR_lIST: 'calendar_list',
	NEW: 'new'
};

export const darkReaderDynamicThemeFixes: DynamicThemeFix = {
	ignoreImageAnalysis: ['.no-dr-invert *'],
	invert: [],
	css: `
		.tox, .force-white-bg, .tox-swatches-menu, .tox .tox-edit-area__iframe {
			background-color: #fff !important;
			background: #fff !important;
		}
	`,
	ignoreInlineStyle: ['.tox-menu *'],
	disableStyleSheetsProxy: false
};

const base = '/carbonio/';

const standaloneBase = `${base}standalone`;

export const IS_STANDALONE = window.location.pathname.startsWith(standaloneBase);
export const BASENAME = IS_STANDALONE ? standaloneBase : base;
export const EMAIL_VALIDATION_REGEX =
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, max-len, no-control-regex
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const ROOT_NAME = 'USER_ROOT';

export const DR_VALUES = ['auto', 'enabled', 'disabled'];
