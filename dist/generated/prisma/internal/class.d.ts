import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get auth_group(): Prisma.auth_groupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auth_group_permissions(): Prisma.auth_group_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auth_permission(): Prisma.auth_permissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auth_user(): Prisma.auth_userDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auth_user_groups(): Prisma.auth_user_groupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auth_user_user_permissions(): Prisma.auth_user_user_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get django_admin_log(): Prisma.django_admin_logDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get django_content_type(): Prisma.django_content_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get django_migrations(): Prisma.django_migrationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get django_session(): Prisma.django_sessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get next_month(): Prisma.next_monthDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tmp_data(): Prisma.tmp_dataDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tmp_load_data(): Prisma.tmp_load_dataDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
