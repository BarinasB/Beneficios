import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "auth_group" | "auth_group_permissions" | "auth_permission" | "auth_user" | "auth_user_groups" | "auth_user_user_permissions" | "django_admin_log" | "django_content_type" | "django_migrations" | "django_session" | "next_month" | "tmp_data" | "tmp_load_data";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        auth_group: {
            payload: Prisma.$auth_groupPayload<ExtArgs>;
            fields: Prisma.auth_groupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_groupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_groupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                findFirst: {
                    args: Prisma.auth_groupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_groupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                findMany: {
                    args: Prisma.auth_groupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>[];
                };
                create: {
                    args: Prisma.auth_groupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                createMany: {
                    args: Prisma.auth_groupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_groupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                update: {
                    args: Prisma.auth_groupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_groupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_groupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_groupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_groupPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_groupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_group>;
                };
                groupBy: {
                    args: Prisma.auth_groupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_groupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_groupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_groupCountAggregateOutputType> | number;
                };
            };
        };
        auth_group_permissions: {
            payload: Prisma.$auth_group_permissionsPayload<ExtArgs>;
            fields: Prisma.auth_group_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_group_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.auth_group_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_group_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.auth_group_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>[];
                };
                create: {
                    args: Prisma.auth_group_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.auth_group_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_group_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                update: {
                    args: Prisma.auth_group_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_group_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_group_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_group_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_group_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_group_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_group_permissions>;
                };
                groupBy: {
                    args: Prisma.auth_group_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_group_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_group_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_group_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        auth_permission: {
            payload: Prisma.$auth_permissionPayload<ExtArgs>;
            fields: Prisma.auth_permissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_permissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_permissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                findFirst: {
                    args: Prisma.auth_permissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_permissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                findMany: {
                    args: Prisma.auth_permissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>[];
                };
                create: {
                    args: Prisma.auth_permissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                createMany: {
                    args: Prisma.auth_permissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_permissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                update: {
                    args: Prisma.auth_permissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_permissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_permissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_permissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_permissionPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_permissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_permission>;
                };
                groupBy: {
                    args: Prisma.auth_permissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_permissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_permissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_permissionCountAggregateOutputType> | number;
                };
            };
        };
        auth_user: {
            payload: Prisma.$auth_userPayload<ExtArgs>;
            fields: Prisma.auth_userFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_userFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_userFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                findFirst: {
                    args: Prisma.auth_userFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_userFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                findMany: {
                    args: Prisma.auth_userFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>[];
                };
                create: {
                    args: Prisma.auth_userCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                createMany: {
                    args: Prisma.auth_userCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_userDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                update: {
                    args: Prisma.auth_userUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_userDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_userUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_userUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_userPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_userAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_user>;
                };
                groupBy: {
                    args: Prisma.auth_userGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_userGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_userCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_userCountAggregateOutputType> | number;
                };
            };
        };
        auth_user_groups: {
            payload: Prisma.$auth_user_groupsPayload<ExtArgs>;
            fields: Prisma.auth_user_groupsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_user_groupsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_user_groupsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                findFirst: {
                    args: Prisma.auth_user_groupsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_user_groupsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                findMany: {
                    args: Prisma.auth_user_groupsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>[];
                };
                create: {
                    args: Prisma.auth_user_groupsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                createMany: {
                    args: Prisma.auth_user_groupsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_user_groupsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                update: {
                    args: Prisma.auth_user_groupsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_user_groupsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_user_groupsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_user_groupsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_groupsPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_user_groupsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_user_groups>;
                };
                groupBy: {
                    args: Prisma.auth_user_groupsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_user_groupsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_user_groupsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_user_groupsCountAggregateOutputType> | number;
                };
            };
        };
        auth_user_user_permissions: {
            payload: Prisma.$auth_user_user_permissionsPayload<ExtArgs>;
            fields: Prisma.auth_user_user_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auth_user_user_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.auth_user_user_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.auth_user_user_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>[];
                };
                create: {
                    args: Prisma.auth_user_user_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.auth_user_user_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auth_user_user_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                update: {
                    args: Prisma.auth_user_user_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.auth_user_user_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auth_user_user_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auth_user_user_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auth_user_user_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Auth_user_user_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuth_user_user_permissions>;
                };
                groupBy: {
                    args: Prisma.auth_user_user_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_user_user_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auth_user_user_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Auth_user_user_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        django_admin_log: {
            payload: Prisma.$django_admin_logPayload<ExtArgs>;
            fields: Prisma.django_admin_logFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.django_admin_logFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.django_admin_logFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                findFirst: {
                    args: Prisma.django_admin_logFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.django_admin_logFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                findMany: {
                    args: Prisma.django_admin_logFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>[];
                };
                create: {
                    args: Prisma.django_admin_logCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                createMany: {
                    args: Prisma.django_admin_logCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.django_admin_logDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                update: {
                    args: Prisma.django_admin_logUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                deleteMany: {
                    args: Prisma.django_admin_logDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.django_admin_logUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.django_admin_logUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_admin_logPayload>;
                };
                aggregate: {
                    args: Prisma.Django_admin_logAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDjango_admin_log>;
                };
                groupBy: {
                    args: Prisma.django_admin_logGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_admin_logGroupByOutputType>[];
                };
                count: {
                    args: Prisma.django_admin_logCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_admin_logCountAggregateOutputType> | number;
                };
            };
        };
        django_content_type: {
            payload: Prisma.$django_content_typePayload<ExtArgs>;
            fields: Prisma.django_content_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.django_content_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.django_content_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                findFirst: {
                    args: Prisma.django_content_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.django_content_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                findMany: {
                    args: Prisma.django_content_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>[];
                };
                create: {
                    args: Prisma.django_content_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                createMany: {
                    args: Prisma.django_content_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.django_content_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                update: {
                    args: Prisma.django_content_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                deleteMany: {
                    args: Prisma.django_content_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.django_content_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.django_content_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_content_typePayload>;
                };
                aggregate: {
                    args: Prisma.Django_content_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDjango_content_type>;
                };
                groupBy: {
                    args: Prisma.django_content_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_content_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.django_content_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_content_typeCountAggregateOutputType> | number;
                };
            };
        };
        django_migrations: {
            payload: Prisma.$django_migrationsPayload<ExtArgs>;
            fields: Prisma.django_migrationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.django_migrationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.django_migrationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                findFirst: {
                    args: Prisma.django_migrationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.django_migrationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                findMany: {
                    args: Prisma.django_migrationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>[];
                };
                create: {
                    args: Prisma.django_migrationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                createMany: {
                    args: Prisma.django_migrationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.django_migrationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                update: {
                    args: Prisma.django_migrationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                deleteMany: {
                    args: Prisma.django_migrationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.django_migrationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.django_migrationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_migrationsPayload>;
                };
                aggregate: {
                    args: Prisma.Django_migrationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDjango_migrations>;
                };
                groupBy: {
                    args: Prisma.django_migrationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_migrationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.django_migrationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_migrationsCountAggregateOutputType> | number;
                };
            };
        };
        django_session: {
            payload: Prisma.$django_sessionPayload<ExtArgs>;
            fields: Prisma.django_sessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.django_sessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.django_sessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                findFirst: {
                    args: Prisma.django_sessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.django_sessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                findMany: {
                    args: Prisma.django_sessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>[];
                };
                create: {
                    args: Prisma.django_sessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                createMany: {
                    args: Prisma.django_sessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.django_sessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                update: {
                    args: Prisma.django_sessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                deleteMany: {
                    args: Prisma.django_sessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.django_sessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.django_sessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$django_sessionPayload>;
                };
                aggregate: {
                    args: Prisma.Django_sessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDjango_session>;
                };
                groupBy: {
                    args: Prisma.django_sessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_sessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.django_sessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Django_sessionCountAggregateOutputType> | number;
                };
            };
        };
        next_month: {
            payload: Prisma.$next_monthPayload<ExtArgs>;
            fields: Prisma.next_monthFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.next_monthFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.next_monthFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                findFirst: {
                    args: Prisma.next_monthFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.next_monthFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                findMany: {
                    args: Prisma.next_monthFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>[];
                };
                create: {
                    args: Prisma.next_monthCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                createMany: {
                    args: Prisma.next_monthCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.next_monthDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                update: {
                    args: Prisma.next_monthUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                deleteMany: {
                    args: Prisma.next_monthDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.next_monthUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.next_monthUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$next_monthPayload>;
                };
                aggregate: {
                    args: Prisma.Next_monthAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNext_month>;
                };
                groupBy: {
                    args: Prisma.next_monthGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Next_monthGroupByOutputType>[];
                };
                count: {
                    args: Prisma.next_monthCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Next_monthCountAggregateOutputType> | number;
                };
            };
        };
        tmp_data: {
            payload: Prisma.$tmp_dataPayload<ExtArgs>;
            fields: Prisma.tmp_dataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tmp_dataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tmp_dataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                findFirst: {
                    args: Prisma.tmp_dataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tmp_dataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                findMany: {
                    args: Prisma.tmp_dataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>[];
                };
                create: {
                    args: Prisma.tmp_dataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                createMany: {
                    args: Prisma.tmp_dataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.tmp_dataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                update: {
                    args: Prisma.tmp_dataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                deleteMany: {
                    args: Prisma.tmp_dataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tmp_dataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.tmp_dataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_dataPayload>;
                };
                aggregate: {
                    args: Prisma.Tmp_dataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTmp_data>;
                };
                groupBy: {
                    args: Prisma.tmp_dataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tmp_dataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tmp_dataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tmp_dataCountAggregateOutputType> | number;
                };
            };
        };
        tmp_load_data: {
            payload: Prisma.$tmp_load_dataPayload<ExtArgs>;
            fields: Prisma.tmp_load_dataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tmp_load_dataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tmp_load_dataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                findFirst: {
                    args: Prisma.tmp_load_dataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tmp_load_dataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                findMany: {
                    args: Prisma.tmp_load_dataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>[];
                };
                create: {
                    args: Prisma.tmp_load_dataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                createMany: {
                    args: Prisma.tmp_load_dataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.tmp_load_dataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                update: {
                    args: Prisma.tmp_load_dataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                deleteMany: {
                    args: Prisma.tmp_load_dataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tmp_load_dataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.tmp_load_dataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tmp_load_dataPayload>;
                };
                aggregate: {
                    args: Prisma.Tmp_load_dataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTmp_load_data>;
                };
                groupBy: {
                    args: Prisma.tmp_load_dataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tmp_load_dataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tmp_load_dataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tmp_load_dataCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    auth_group?: Prisma.auth_groupOmit;
    auth_group_permissions?: Prisma.auth_group_permissionsOmit;
    auth_permission?: Prisma.auth_permissionOmit;
    auth_user?: Prisma.auth_userOmit;
    auth_user_groups?: Prisma.auth_user_groupsOmit;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsOmit;
    django_admin_log?: Prisma.django_admin_logOmit;
    django_content_type?: Prisma.django_content_typeOmit;
    django_migrations?: Prisma.django_migrationsOmit;
    django_session?: Prisma.django_sessionOmit;
    next_month?: Prisma.next_monthOmit;
    tmp_data?: Prisma.tmp_dataOmit;
    tmp_load_data?: Prisma.tmp_load_dataOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
