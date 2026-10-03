import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly auth_group: "auth_group";
    readonly auth_group_permissions: "auth_group_permissions";
    readonly auth_permission: "auth_permission";
    readonly auth_user: "auth_user";
    readonly auth_user_groups: "auth_user_groups";
    readonly auth_user_user_permissions: "auth_user_user_permissions";
    readonly django_admin_log: "django_admin_log";
    readonly django_content_type: "django_content_type";
    readonly django_migrations: "django_migrations";
    readonly django_session: "django_session";
    readonly next_month: "next_month";
    readonly tmp_data: "tmp_data";
    readonly tmp_load_data: "tmp_load_data";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Auth_groupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type Auth_groupScalarFieldEnum = (typeof Auth_groupScalarFieldEnum)[keyof typeof Auth_groupScalarFieldEnum];
export declare const Auth_group_permissionsScalarFieldEnum: {
    readonly id: "id";
    readonly group_id: "group_id";
    readonly permission_id: "permission_id";
};
export type Auth_group_permissionsScalarFieldEnum = (typeof Auth_group_permissionsScalarFieldEnum)[keyof typeof Auth_group_permissionsScalarFieldEnum];
export declare const Auth_permissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly content_type_id: "content_type_id";
    readonly codename: "codename";
};
export type Auth_permissionScalarFieldEnum = (typeof Auth_permissionScalarFieldEnum)[keyof typeof Auth_permissionScalarFieldEnum];
export declare const Auth_userScalarFieldEnum: {
    readonly id: "id";
    readonly password: "password";
    readonly last_login: "last_login";
    readonly is_superuser: "is_superuser";
    readonly username: "username";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly email: "email";
    readonly is_staff: "is_staff";
    readonly is_active: "is_active";
    readonly date_joined: "date_joined";
};
export type Auth_userScalarFieldEnum = (typeof Auth_userScalarFieldEnum)[keyof typeof Auth_userScalarFieldEnum];
export declare const Auth_user_groupsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly group_id: "group_id";
};
export type Auth_user_groupsScalarFieldEnum = (typeof Auth_user_groupsScalarFieldEnum)[keyof typeof Auth_user_groupsScalarFieldEnum];
export declare const Auth_user_user_permissionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly permission_id: "permission_id";
};
export type Auth_user_user_permissionsScalarFieldEnum = (typeof Auth_user_user_permissionsScalarFieldEnum)[keyof typeof Auth_user_user_permissionsScalarFieldEnum];
export declare const Django_admin_logScalarFieldEnum: {
    readonly id: "id";
    readonly action_time: "action_time";
    readonly object_id: "object_id";
    readonly object_repr: "object_repr";
    readonly action_flag: "action_flag";
    readonly change_message: "change_message";
    readonly content_type_id: "content_type_id";
    readonly user_id: "user_id";
};
export type Django_admin_logScalarFieldEnum = (typeof Django_admin_logScalarFieldEnum)[keyof typeof Django_admin_logScalarFieldEnum];
export declare const Django_content_typeScalarFieldEnum: {
    readonly id: "id";
    readonly app_label: "app_label";
    readonly model: "model";
};
export type Django_content_typeScalarFieldEnum = (typeof Django_content_typeScalarFieldEnum)[keyof typeof Django_content_typeScalarFieldEnum];
export declare const Django_migrationsScalarFieldEnum: {
    readonly id: "id";
    readonly app: "app";
    readonly name: "name";
    readonly applied: "applied";
};
export type Django_migrationsScalarFieldEnum = (typeof Django_migrationsScalarFieldEnum)[keyof typeof Django_migrationsScalarFieldEnum];
export declare const Django_sessionScalarFieldEnum: {
    readonly session_key: "session_key";
    readonly session_data: "session_data";
    readonly expire_date: "expire_date";
};
export type Django_sessionScalarFieldEnum = (typeof Django_sessionScalarFieldEnum)[keyof typeof Django_sessionScalarFieldEnum];
export declare const Next_monthScalarFieldEnum: {
    readonly id: "id";
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly amount: "amount";
    readonly state: "state";
};
export type Next_monthScalarFieldEnum = (typeof Next_monthScalarFieldEnum)[keyof typeof Next_monthScalarFieldEnum];
export declare const Tmp_dataScalarFieldEnum: {
    readonly id: "id";
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly amount: "amount";
    readonly state: "state";
};
export type Tmp_dataScalarFieldEnum = (typeof Tmp_dataScalarFieldEnum)[keyof typeof Tmp_dataScalarFieldEnum];
export declare const Tmp_load_dataScalarFieldEnum: {
    readonly id: "id";
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly state: "state";
};
export type Tmp_load_dataScalarFieldEnum = (typeof Tmp_load_dataScalarFieldEnum)[keyof typeof Tmp_load_dataScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const auth_groupOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type auth_groupOrderByRelevanceFieldEnum = (typeof auth_groupOrderByRelevanceFieldEnum)[keyof typeof auth_groupOrderByRelevanceFieldEnum];
export declare const auth_permissionOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly codename: "codename";
};
export type auth_permissionOrderByRelevanceFieldEnum = (typeof auth_permissionOrderByRelevanceFieldEnum)[keyof typeof auth_permissionOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const auth_userOrderByRelevanceFieldEnum: {
    readonly password: "password";
    readonly username: "username";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly email: "email";
};
export type auth_userOrderByRelevanceFieldEnum = (typeof auth_userOrderByRelevanceFieldEnum)[keyof typeof auth_userOrderByRelevanceFieldEnum];
export declare const django_admin_logOrderByRelevanceFieldEnum: {
    readonly object_id: "object_id";
    readonly object_repr: "object_repr";
    readonly change_message: "change_message";
};
export type django_admin_logOrderByRelevanceFieldEnum = (typeof django_admin_logOrderByRelevanceFieldEnum)[keyof typeof django_admin_logOrderByRelevanceFieldEnum];
export declare const django_content_typeOrderByRelevanceFieldEnum: {
    readonly app_label: "app_label";
    readonly model: "model";
};
export type django_content_typeOrderByRelevanceFieldEnum = (typeof django_content_typeOrderByRelevanceFieldEnum)[keyof typeof django_content_typeOrderByRelevanceFieldEnum];
export declare const django_migrationsOrderByRelevanceFieldEnum: {
    readonly app: "app";
    readonly name: "name";
};
export type django_migrationsOrderByRelevanceFieldEnum = (typeof django_migrationsOrderByRelevanceFieldEnum)[keyof typeof django_migrationsOrderByRelevanceFieldEnum];
export declare const django_sessionOrderByRelevanceFieldEnum: {
    readonly session_key: "session_key";
    readonly session_data: "session_data";
};
export type django_sessionOrderByRelevanceFieldEnum = (typeof django_sessionOrderByRelevanceFieldEnum)[keyof typeof django_sessionOrderByRelevanceFieldEnum];
export declare const next_monthOrderByRelevanceFieldEnum: {
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly amount: "amount";
    readonly state: "state";
};
export type next_monthOrderByRelevanceFieldEnum = (typeof next_monthOrderByRelevanceFieldEnum)[keyof typeof next_monthOrderByRelevanceFieldEnum];
export declare const tmp_dataOrderByRelevanceFieldEnum: {
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly amount: "amount";
    readonly state: "state";
};
export type tmp_dataOrderByRelevanceFieldEnum = (typeof tmp_dataOrderByRelevanceFieldEnum)[keyof typeof tmp_dataOrderByRelevanceFieldEnum];
export declare const tmp_load_dataOrderByRelevanceFieldEnum: {
    readonly kind_document: "kind_document";
    readonly document: "document";
    readonly state: "state";
};
export type tmp_load_dataOrderByRelevanceFieldEnum = (typeof tmp_load_dataOrderByRelevanceFieldEnum)[keyof typeof tmp_load_dataOrderByRelevanceFieldEnum];
