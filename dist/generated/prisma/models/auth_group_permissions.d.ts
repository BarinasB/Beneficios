import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type auth_group_permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$auth_group_permissionsPayload>;
export type AggregateAuth_group_permissions = {
    _count: Auth_group_permissionsCountAggregateOutputType | null;
    _avg: Auth_group_permissionsAvgAggregateOutputType | null;
    _sum: Auth_group_permissionsSumAggregateOutputType | null;
    _min: Auth_group_permissionsMinAggregateOutputType | null;
    _max: Auth_group_permissionsMaxAggregateOutputType | null;
};
export type Auth_group_permissionsAvgAggregateOutputType = {
    id: number | null;
    group_id: number | null;
    permission_id: number | null;
};
export type Auth_group_permissionsSumAggregateOutputType = {
    id: bigint | null;
    group_id: number | null;
    permission_id: number | null;
};
export type Auth_group_permissionsMinAggregateOutputType = {
    id: bigint | null;
    group_id: number | null;
    permission_id: number | null;
};
export type Auth_group_permissionsMaxAggregateOutputType = {
    id: bigint | null;
    group_id: number | null;
    permission_id: number | null;
};
export type Auth_group_permissionsCountAggregateOutputType = {
    id: number;
    group_id: number;
    permission_id: number;
    _all: number;
};
export type Auth_group_permissionsAvgAggregateInputType = {
    id?: true;
    group_id?: true;
    permission_id?: true;
};
export type Auth_group_permissionsSumAggregateInputType = {
    id?: true;
    group_id?: true;
    permission_id?: true;
};
export type Auth_group_permissionsMinAggregateInputType = {
    id?: true;
    group_id?: true;
    permission_id?: true;
};
export type Auth_group_permissionsMaxAggregateInputType = {
    id?: true;
    group_id?: true;
    permission_id?: true;
};
export type Auth_group_permissionsCountAggregateInputType = {
    id?: true;
    group_id?: true;
    permission_id?: true;
    _all?: true;
};
export type Auth_group_permissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_group_permissionsWhereInput;
    orderBy?: Prisma.auth_group_permissionsOrderByWithRelationInput | Prisma.auth_group_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_group_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Auth_group_permissionsCountAggregateInputType;
    _avg?: Auth_group_permissionsAvgAggregateInputType;
    _sum?: Auth_group_permissionsSumAggregateInputType;
    _min?: Auth_group_permissionsMinAggregateInputType;
    _max?: Auth_group_permissionsMaxAggregateInputType;
};
export type GetAuth_group_permissionsAggregateType<T extends Auth_group_permissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth_group_permissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth_group_permissions[P]> : Prisma.GetScalarType<T[P], AggregateAuth_group_permissions[P]>;
};
export type auth_group_permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_group_permissionsWhereInput;
    orderBy?: Prisma.auth_group_permissionsOrderByWithAggregationInput | Prisma.auth_group_permissionsOrderByWithAggregationInput[];
    by: Prisma.Auth_group_permissionsScalarFieldEnum[] | Prisma.Auth_group_permissionsScalarFieldEnum;
    having?: Prisma.auth_group_permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auth_group_permissionsCountAggregateInputType | true;
    _avg?: Auth_group_permissionsAvgAggregateInputType;
    _sum?: Auth_group_permissionsSumAggregateInputType;
    _min?: Auth_group_permissionsMinAggregateInputType;
    _max?: Auth_group_permissionsMaxAggregateInputType;
};
export type Auth_group_permissionsGroupByOutputType = {
    id: bigint;
    group_id: number;
    permission_id: number;
    _count: Auth_group_permissionsCountAggregateOutputType | null;
    _avg: Auth_group_permissionsAvgAggregateOutputType | null;
    _sum: Auth_group_permissionsSumAggregateOutputType | null;
    _min: Auth_group_permissionsMinAggregateOutputType | null;
    _max: Auth_group_permissionsMaxAggregateOutputType | null;
};
export type GetAuth_group_permissionsGroupByPayload<T extends auth_group_permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auth_group_permissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auth_group_permissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]>;
}>>;
export type auth_group_permissionsWhereInput = {
    AND?: Prisma.auth_group_permissionsWhereInput | Prisma.auth_group_permissionsWhereInput[];
    OR?: Prisma.auth_group_permissionsWhereInput[];
    NOT?: Prisma.auth_group_permissionsWhereInput | Prisma.auth_group_permissionsWhereInput[];
    id?: Prisma.BigIntFilter<"auth_group_permissions"> | bigint | number;
    group_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
    auth_permission?: Prisma.XOR<Prisma.Auth_permissionScalarRelationFilter, Prisma.auth_permissionWhereInput>;
    auth_group?: Prisma.XOR<Prisma.Auth_groupScalarRelationFilter, Prisma.auth_groupWhereInput>;
};
export type auth_group_permissionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    auth_permission?: Prisma.auth_permissionOrderByWithRelationInput;
    auth_group?: Prisma.auth_groupOrderByWithRelationInput;
};
export type auth_group_permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    group_id_permission_id?: Prisma.auth_group_permissionsGroup_idPermission_idCompoundUniqueInput;
    AND?: Prisma.auth_group_permissionsWhereInput | Prisma.auth_group_permissionsWhereInput[];
    OR?: Prisma.auth_group_permissionsWhereInput[];
    NOT?: Prisma.auth_group_permissionsWhereInput | Prisma.auth_group_permissionsWhereInput[];
    group_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
    auth_permission?: Prisma.XOR<Prisma.Auth_permissionScalarRelationFilter, Prisma.auth_permissionWhereInput>;
    auth_group?: Prisma.XOR<Prisma.Auth_groupScalarRelationFilter, Prisma.auth_groupWhereInput>;
}, "id" | "group_id_permission_id">;
export type auth_group_permissionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    _count?: Prisma.auth_group_permissionsCountOrderByAggregateInput;
    _avg?: Prisma.auth_group_permissionsAvgOrderByAggregateInput;
    _max?: Prisma.auth_group_permissionsMaxOrderByAggregateInput;
    _min?: Prisma.auth_group_permissionsMinOrderByAggregateInput;
    _sum?: Prisma.auth_group_permissionsSumOrderByAggregateInput;
};
export type auth_group_permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.auth_group_permissionsScalarWhereWithAggregatesInput | Prisma.auth_group_permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.auth_group_permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.auth_group_permissionsScalarWhereWithAggregatesInput | Prisma.auth_group_permissionsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"auth_group_permissions"> | bigint | number;
    group_id?: Prisma.IntWithAggregatesFilter<"auth_group_permissions"> | number;
    permission_id?: Prisma.IntWithAggregatesFilter<"auth_group_permissions"> | number;
};
export type auth_group_permissionsCreateInput = {
    id?: bigint | number;
    auth_permission: Prisma.auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput;
    auth_group: Prisma.auth_groupCreateNestedOneWithoutAuth_group_permissionsInput;
};
export type auth_group_permissionsUncheckedCreateInput = {
    id?: bigint | number;
    group_id: number;
    permission_id: number;
};
export type auth_group_permissionsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_permission?: Prisma.auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput;
    auth_group?: Prisma.auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput;
};
export type auth_group_permissionsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_group_permissionsCreateManyInput = {
    id?: bigint | number;
    group_id: number;
    permission_id: number;
};
export type auth_group_permissionsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type auth_group_permissionsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Auth_group_permissionsListRelationFilter = {
    every?: Prisma.auth_group_permissionsWhereInput;
    some?: Prisma.auth_group_permissionsWhereInput;
    none?: Prisma.auth_group_permissionsWhereInput;
};
export type auth_group_permissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type auth_group_permissionsGroup_idPermission_idCompoundUniqueInput = {
    group_id: number;
    permission_id: number;
};
export type auth_group_permissionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_group_permissionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_group_permissionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_group_permissionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_group_permissionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_group_permissionsCreateNestedManyWithoutAuth_groupInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_group_permissionsCreateWithoutAuth_groupInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_groupInputEnvelope;
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
};
export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_group_permissionsCreateWithoutAuth_groupInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_groupInputEnvelope;
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
};
export type auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_group_permissionsCreateWithoutAuth_groupInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[];
    upsert?: Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_groupInputEnvelope;
    set?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    update?: Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput[];
    updateMany?: Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput | Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput[];
    deleteMany?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
};
export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_group_permissionsCreateWithoutAuth_groupInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_groupInput[];
    upsert?: Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_groupInputEnvelope;
    set?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    update?: Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput[];
    updateMany?: Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput | Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput[];
    deleteMany?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_permissionInputEnvelope;
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
};
export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_permissionInputEnvelope;
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
};
export type auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    upsert?: Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_permissionInputEnvelope;
    set?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    update?: Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[];
    updateMany?: Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[];
    deleteMany?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
};
export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    upsert?: Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_group_permissionsCreateManyAuth_permissionInputEnvelope;
    set?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_group_permissionsWhereUniqueInput | Prisma.auth_group_permissionsWhereUniqueInput[];
    update?: Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[];
    updateMany?: Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | Prisma.auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[];
    deleteMany?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
};
export type auth_group_permissionsCreateWithoutAuth_groupInput = {
    id?: bigint | number;
    auth_permission: Prisma.auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput;
};
export type auth_group_permissionsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number;
    permission_id: number;
};
export type auth_group_permissionsCreateOrConnectWithoutAuth_groupInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>;
};
export type auth_group_permissionsCreateManyAuth_groupInputEnvelope = {
    data: Prisma.auth_group_permissionsCreateManyAuth_groupInput | Prisma.auth_group_permissionsCreateManyAuth_groupInput[];
    skipDuplicates?: boolean;
};
export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_group_permissionsUpdateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>;
    create: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>;
};
export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateWithoutAuth_groupInput, Prisma.auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>;
};
export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: Prisma.auth_group_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateManyMutationInput, Prisma.auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupInput>;
};
export type auth_group_permissionsScalarWhereInput = {
    AND?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
    OR?: Prisma.auth_group_permissionsScalarWhereInput[];
    NOT?: Prisma.auth_group_permissionsScalarWhereInput | Prisma.auth_group_permissionsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"auth_group_permissions"> | bigint | number;
    group_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_group_permissions"> | number;
};
export type auth_group_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number;
    auth_group: Prisma.auth_groupCreateNestedOneWithoutAuth_group_permissionsInput;
};
export type auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number;
    group_id: number;
};
export type auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>;
};
export type auth_group_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: Prisma.auth_group_permissionsCreateManyAuth_permissionInput | Prisma.auth_group_permissionsCreateManyAuth_permissionInput[];
    skipDuplicates?: boolean;
};
export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_group_permissionsUpdateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>;
    create: Prisma.XOR<Prisma.auth_group_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>;
};
export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateWithoutAuth_permissionInput, Prisma.auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>;
};
export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: Prisma.auth_group_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateManyMutationInput, Prisma.auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionInput>;
};
export type auth_group_permissionsCreateManyAuth_groupInput = {
    id?: bigint | number;
    permission_id: number;
};
export type auth_group_permissionsUpdateWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_permission?: Prisma.auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput;
};
export type auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_group_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number;
    group_id: number;
};
export type auth_group_permissionsUpdateWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_group?: Prisma.auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput;
};
export type auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_group_permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    group_id?: boolean;
    permission_id?: boolean;
    auth_permission?: boolean | Prisma.auth_permissionDefaultArgs<ExtArgs>;
    auth_group?: boolean | Prisma.auth_groupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth_group_permissions"]>;
export type auth_group_permissionsSelectScalar = {
    id?: boolean;
    group_id?: boolean;
    permission_id?: boolean;
};
export type auth_group_permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "group_id" | "permission_id", ExtArgs["result"]["auth_group_permissions"]>;
export type auth_group_permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_permission?: boolean | Prisma.auth_permissionDefaultArgs<ExtArgs>;
    auth_group?: boolean | Prisma.auth_groupDefaultArgs<ExtArgs>;
};
export type $auth_group_permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "auth_group_permissions";
    objects: {
        auth_permission: Prisma.$auth_permissionPayload<ExtArgs>;
        auth_group: Prisma.$auth_groupPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        group_id: number;
        permission_id: number;
    }, ExtArgs["result"]["auth_group_permissions"]>;
    composites: {};
};
export type auth_group_permissionsGetPayload<S extends boolean | null | undefined | auth_group_permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload, S>;
export type auth_group_permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<auth_group_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auth_group_permissionsCountAggregateInputType | true;
};
export interface auth_group_permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['auth_group_permissions'];
        meta: {
            name: 'auth_group_permissions';
        };
    };
    findUnique<T extends auth_group_permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends auth_group_permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends auth_group_permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, auth_group_permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends auth_group_permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, auth_group_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends auth_group_permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, auth_group_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends auth_group_permissionsCreateArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends auth_group_permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, auth_group_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends auth_group_permissionsDeleteArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends auth_group_permissionsUpdateArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends auth_group_permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, auth_group_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends auth_group_permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends auth_group_permissionsUpsertArgs>(args: Prisma.SelectSubset<T, auth_group_permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__auth_group_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends auth_group_permissionsCountArgs>(args?: Prisma.Subset<T, auth_group_permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auth_group_permissionsCountAggregateOutputType> : number>;
    aggregate<T extends Auth_group_permissionsAggregateArgs>(args: Prisma.Subset<T, Auth_group_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_group_permissionsAggregateType<T>>;
    groupBy<T extends auth_group_permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: auth_group_permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: auth_group_permissionsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, auth_group_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_group_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: auth_group_permissionsFieldRefs;
}
export interface Prisma__auth_group_permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_permission<T extends Prisma.auth_permissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_permissionDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    auth_group<T extends Prisma.auth_groupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_groupDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_groupClient<runtime.Types.Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface auth_group_permissionsFieldRefs {
    readonly id: Prisma.FieldRef<"auth_group_permissions", 'BigInt'>;
    readonly group_id: Prisma.FieldRef<"auth_group_permissions", 'Int'>;
    readonly permission_id: Prisma.FieldRef<"auth_group_permissions", 'Int'>;
}
export type auth_group_permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_group_permissionsWhereUniqueInput;
};
export type auth_group_permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_group_permissionsWhereUniqueInput;
};
export type auth_group_permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_group_permissionsWhereInput;
    orderBy?: Prisma.auth_group_permissionsOrderByWithRelationInput | Prisma.auth_group_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_group_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_group_permissionsScalarFieldEnum | Prisma.Auth_group_permissionsScalarFieldEnum[];
};
export type auth_group_permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_group_permissionsWhereInput;
    orderBy?: Prisma.auth_group_permissionsOrderByWithRelationInput | Prisma.auth_group_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_group_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_group_permissionsScalarFieldEnum | Prisma.Auth_group_permissionsScalarFieldEnum[];
};
export type auth_group_permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_group_permissionsWhereInput;
    orderBy?: Prisma.auth_group_permissionsOrderByWithRelationInput | Prisma.auth_group_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_group_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_group_permissionsScalarFieldEnum | Prisma.Auth_group_permissionsScalarFieldEnum[];
};
export type auth_group_permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_group_permissionsCreateInput, Prisma.auth_group_permissionsUncheckedCreateInput>;
};
export type auth_group_permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.auth_group_permissionsCreateManyInput | Prisma.auth_group_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type auth_group_permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateInput, Prisma.auth_group_permissionsUncheckedUpdateInput>;
    where: Prisma.auth_group_permissionsWhereUniqueInput;
};
export type auth_group_permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.auth_group_permissionsUpdateManyMutationInput, Prisma.auth_group_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.auth_group_permissionsWhereInput;
    limit?: number;
};
export type auth_group_permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_group_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_group_permissionsCreateInput, Prisma.auth_group_permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.auth_group_permissionsUpdateInput, Prisma.auth_group_permissionsUncheckedUpdateInput>;
};
export type auth_group_permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_group_permissionsWhereUniqueInput;
};
export type auth_group_permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_group_permissionsWhereInput;
    limit?: number;
};
export type auth_group_permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_group_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_group_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_group_permissionsInclude<ExtArgs> | null;
};
