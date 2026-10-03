import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    auth_group: 'auth_group',
    auth_group_permissions: 'auth_group_permissions',
    auth_permission: 'auth_permission',
    auth_user: 'auth_user',
    auth_user_groups: 'auth_user_groups',
    auth_user_user_permissions: 'auth_user_user_permissions',
    django_admin_log: 'django_admin_log',
    django_content_type: 'django_content_type',
    django_migrations: 'django_migrations',
    django_session: 'django_session',
    next_month: 'next_month',
    tmp_data: 'tmp_data',
    tmp_load_data: 'tmp_load_data'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const Auth_groupScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
export const Auth_group_permissionsScalarFieldEnum = {
    id: 'id',
    group_id: 'group_id',
    permission_id: 'permission_id'
};
export const Auth_permissionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    content_type_id: 'content_type_id',
    codename: 'codename'
};
export const Auth_userScalarFieldEnum = {
    id: 'id',
    password: 'password',
    last_login: 'last_login',
    is_superuser: 'is_superuser',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    is_staff: 'is_staff',
    is_active: 'is_active',
    date_joined: 'date_joined'
};
export const Auth_user_groupsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    group_id: 'group_id'
};
export const Auth_user_user_permissionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    permission_id: 'permission_id'
};
export const Django_admin_logScalarFieldEnum = {
    id: 'id',
    action_time: 'action_time',
    object_id: 'object_id',
    object_repr: 'object_repr',
    action_flag: 'action_flag',
    change_message: 'change_message',
    content_type_id: 'content_type_id',
    user_id: 'user_id'
};
export const Django_content_typeScalarFieldEnum = {
    id: 'id',
    app_label: 'app_label',
    model: 'model'
};
export const Django_migrationsScalarFieldEnum = {
    id: 'id',
    app: 'app',
    name: 'name',
    applied: 'applied'
};
export const Django_sessionScalarFieldEnum = {
    session_key: 'session_key',
    session_data: 'session_data',
    expire_date: 'expire_date'
};
export const Next_monthScalarFieldEnum = {
    id: 'id',
    kind_document: 'kind_document',
    document: 'document',
    amount: 'amount',
    state: 'state'
};
export const Tmp_dataScalarFieldEnum = {
    id: 'id',
    kind_document: 'kind_document',
    document: 'document',
    amount: 'amount',
    state: 'state'
};
export const Tmp_load_dataScalarFieldEnum = {
    id: 'id',
    kind_document: 'kind_document',
    document: 'document',
    state: 'state'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const auth_groupOrderByRelevanceFieldEnum = {
    name: 'name'
};
export const auth_permissionOrderByRelevanceFieldEnum = {
    name: 'name',
    codename: 'codename'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const auth_userOrderByRelevanceFieldEnum = {
    password: 'password',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email'
};
export const django_admin_logOrderByRelevanceFieldEnum = {
    object_id: 'object_id',
    object_repr: 'object_repr',
    change_message: 'change_message'
};
export const django_content_typeOrderByRelevanceFieldEnum = {
    app_label: 'app_label',
    model: 'model'
};
export const django_migrationsOrderByRelevanceFieldEnum = {
    app: 'app',
    name: 'name'
};
export const django_sessionOrderByRelevanceFieldEnum = {
    session_key: 'session_key',
    session_data: 'session_data'
};
export const next_monthOrderByRelevanceFieldEnum = {
    kind_document: 'kind_document',
    document: 'document',
    amount: 'amount',
    state: 'state'
};
export const tmp_dataOrderByRelevanceFieldEnum = {
    kind_document: 'kind_document',
    document: 'document',
    amount: 'amount',
    state: 'state'
};
export const tmp_load_dataOrderByRelevanceFieldEnum = {
    kind_document: 'kind_document',
    document: 'document',
    state: 'state'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map