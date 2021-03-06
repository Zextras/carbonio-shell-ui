/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { AccountRights, ZimletProp } from '../account';
import { Tag } from '../tags';

export * from './soap';

export type ZimletPkgDescription = {
	zimlet: Array<{
		name: string;
		label: string;
		description: string;
		version: string;
		/* Property related to Zextras */ zapp?: 'true';
		/* Property related to Zextras */ 'zapp-main'?: string;
		/* Property related to Zextras */ 'zapp-version'?: string;
		/* Property related to Zextras */ 'zapp-handlers'?: string;
		/* Property related to Zextras */ 'zapp-style'?: string;
		/* Property related to Zextras */ 'zapp-theme'?: string;
		/* Property related to Zextras */ 'zapp-serviceworker-extension'?: string;
	}>;
	zimletContext: Array<{
		baseUrl: string;
		presence: 'enabled';
		priority: number;
	}>;
};

export type GetInfoResponse = {
	name: string;
	id: string;
	attrs: {
		_attrs: {
			displayName: string;
		};
	};
	prefs: {
		_attrs: Record<string, string>;
	};
	signatures: {
		signature: Array<any>;
	};
	identities: {
		identity: Array<any>;
	};
	zimlets: {
		zimlet: Array<ZimletPkgDescription>;
	};
	props: {
		prop: Array<ZimletProp>;
	};
	version: string;
	rights: AccountRights;
};

export type PropsMods = Record<string, { app: string; value: unknown }>;

export type PermissionsMods = {
	freeBusy: any;
	inviteRight: any;
};

export type CreateIdentityProps = {
	requestId: number;
	zimbraPrefIdentityName: string | undefined;
	zimbraPrefFromDisplay: string | undefined;
	zimbraPrefFromAddress: string | undefined;
	zimbraPrefFromAddress: string | undefined;
	zimbraPrefFromAddressType: string | undefined;
	zimbraPrefReplyToEnabled: string | undefined;
	zimbraPrefReplyToDisplay: string | undefined;
	zimbraPrefReplyToAddress: string | undefined;
	zimbraPrefDefaultSignatureId: string | undefined;
	zimbraPrefForwardReplySignatureId: string | undefined;
	zimbraPrefWhenSentToEnabled: string | undefined;
	zimbraPrefWhenInFoldersEnabled: string | undefined;
};

export type IdentityMods = {
	modifyList?: Record<string, { id: string; prefs: Record<string, string | boolean> }>;
	deleteList?: string[];
	createList?: { prefs: CreateIdentityProps }[];
};

export type PrefsMods = Record<string, unknown>;

export type Mods = {
	props?: PropsMods;
	prefs?: PrefsMods;
	permissions?: PermissionsMods;
	identity?: IdentityMods;
};

export type Locale = {
	id: string;
	localName: string;
	name: string;
};
export type AvailableLocalesResponse = {
	locale: Array<Locale>;
};

export type NetworkState = SoapContext & {
	noOpTimeout?: Timeout;
	pollingInterval: number;
	seq: number;
};

export type CreateTagRequest = {
	tag: Omit<Tag, id>;
	_jsns: string;
};

export type CreateTagResponse = {
	tag: [Tag];
};

export type TagActionRequest = {
	_jsns: string;
	action: {
		op: 'rename' | 'color' | 'delete' | 'update';
		id: string;
		name?: string;
		color?: number;
		rgb?: string;
	};
};
export type TagActionResponse = {
	action: { op: string; id: string };
	_jsns: string;
};
