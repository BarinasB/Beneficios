import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type auth_user_user_permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$auth_user_user_permissionsPayload>;
export type AggregateAuth_user_user_permissions = {
    _count: Auth_user_user_permissionsCountAggregateOutputType | null;
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null;
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null;
    _min: Auth_user_user_permissionsMinAggregateOutputType | null;
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null;
};
export type Auth_user_user_permissionsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    permission_id: number | null;
};
export type Auth_user_user_permissionsSumAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    permission_id: number | null;
};
export type Auth_user_user_permissionsMinAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    permission_id: number | null;
};
export type Auth_user_user_permissionsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    permission_id: number | null;
};
export type Auth_user_user_permissionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    permission_id: number;
    _all: number;
};
export type Auth_user_user_permissionsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    permission_id?: true;
};
export type Auth_user_user_permissionsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    permission_id?: true;
};
export type Auth_user_user_permissionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    permission_id?: true;
};
export type Auth_user_user_permissionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    permission_id?: true;
};
export type Auth_user_user_permissionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    permission_id?: true;
    _all?: true;
};
export type Auth_user_user_permissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_user_permissionsWhereInput;
    orderBy?: Prisma.auth_user_user_permissionsOrderByWithRelationInput | Prisma.auth_user_user_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_user_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Auth_user_user_permissionsCountAggregateInputType;
    _avg?: Auth_user_user_permissionsAvgAggregateInputType;
    _sum?: Auth_user_user_permissionsSumAggregateInputType;
    _min?: Auth_user_user_permissionsMinAggregateInputType;
    _max?: Auth_user_user_permissionsMaxAggregateInputType;
};
export type GetAuth_user_user_permissionsAggregateType<T extends Auth_user_user_permissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth_user_user_permissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth_user_user_permissions[P]> : Prisma.GetScalarType<T[P], AggregateAuth_user_user_permissions[P]>;
};
export type auth_user_user_permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_user_permissionsWhereInput;
    orderBy?: Prisma.auth_user_user_permissionsOrderByWithAggregationInput | Prisma.auth_user_user_permissionsOrderByWithAggregationInput[];
    by: Prisma.Auth_user_user_permissionsScalarFieldEnum[] | Prisma.Auth_user_user_permissionsScalarFieldEnum;
    having?: Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auth_user_user_permissionsCountAggregateInputType | true;
    _avg?: Auth_user_user_permissionsAvgAggregateInputType;
    _sum?: Auth_user_user_permissionsSumAggregateInputType;
    _min?: Auth_user_user_permissionsMinAggregateInputType;
    _max?: Auth_user_user_permissionsMaxAggregateInputType;
};
export type Auth_user_user_permissionsGroupByOutputType = {
    id: bigint;
    user_id: number;
    permission_id: number;
    _count: Auth_user_user_permissionsCountAggregateOutputType | null;
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null;
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null;
    _min: Auth_user_user_permissionsMinAggregateOutputType | null;
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null;
};
export type GetAuth_user_user_permissionsGroupByPayload<T extends auth_user_user_permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auth_user_user_permissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auth_user_user_permissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]>;
}>>;
export type auth_user_user_permissionsWhereInput = {
    AND?: Prisma.auth_user_user_permissionsWhereInput | Prisma.auth_user_user_permissionsWhereInput[];
    OR?: Prisma.auth_user_user_permissionsWhereInput[];
    NOT?: Prisma.auth_user_user_permissionsWhereInput | Prisma.auth_user_user_permissionsWhereInput[];
    id?: Prisma.BigIntFilter<"auth_user_user_permissions"> | bigint | number;
    user_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
    auth_permission?: Prisma.XOR<Prisma.Auth_permissionScalarRelationFilter, Prisma.auth_permissionWhereInput>;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
};
export type auth_user_user_permissionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    auth_permission?: Prisma.auth_permissionOrderByWithRelationInput;
    auth_user?: Prisma.auth_userOrderByWithRelationInput;
};
export type auth_user_user_permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id_permission_id?: Prisma.auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput;
    AND?: Prisma.auth_user_user_permissionsWhereInput | Prisma.auth_user_user_permissionsWhereInput[];
    OR?: Prisma.auth_user_user_permissionsWhereInput[];
    NOT?: Prisma.auth_user_user_permissionsWhereInput | Prisma.auth_user_user_permissionsWhereInput[];
    user_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
    auth_permission?: Prisma.XOR<Prisma.Auth_permissionScalarRelationFilter, Prisma.auth_permissionWhereInput>;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
}, "id" | "user_id_permission_id">;
export type auth_user_user_permissionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    _count?: Prisma.auth_user_user_permissionsCountOrderByAggregateInput;
    _avg?: Prisma.auth_user_user_permissionsAvgOrderByAggregateInput;
    _max?: Prisma.auth_user_user_permissionsMaxOrderByAggregateInput;
    _min?: Prisma.auth_user_user_permissionsMinOrderByAggregateInput;
    _sum?: Prisma.auth_user_user_permissionsSumOrderByAggregateInput;
};
export type auth_user_user_permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput | Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput | Prisma.auth_user_user_permissionsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"auth_user_user_permissions"> | bigint | number;
    user_id?: Prisma.IntWithAggregatesFilter<"auth_user_user_permissions"> | number;
    permission_id?: Prisma.IntWithAggregatesFilter<"auth_user_user_permissions"> | number;
};
export type auth_user_user_permissionsCreateInput = {
    id?: bigint | number;
    auth_permission: Prisma.auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput;
    auth_user: Prisma.auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput;
};
export type auth_user_user_permissionsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: number;
    permission_id: number;
};
export type auth_user_user_permissionsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_permission?: Prisma.auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput;
};
export type auth_user_user_permissionsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_user_permissionsCreateManyInput = {
    id?: bigint | number;
    user_id: number;
    permission_id: number;
};
export type auth_user_user_permissionsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type auth_user_user_permissionsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Auth_user_user_permissionsListRelationFilter = {
    every?: Prisma.auth_user_user_permissionsWhereInput;
    some?: Prisma.auth_user_user_permissionsWhereInput;
    none?: Prisma.auth_user_user_permissionsWhereInput;
};
export type auth_user_user_permissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput = {
    user_id: number;
    permission_id: number;
};
export type auth_user_user_permissionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_user_user_permissionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_user_user_permissionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_user_user_permissionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_user_user_permissionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope;
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
};
export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope;
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
};
export type auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    upsert?: Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope;
    set?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    update?: Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[];
    updateMany?: Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[];
    deleteMany?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
};
export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput[];
    upsert?: Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope;
    set?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    update?: Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput[];
    updateMany?: Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput | Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput[];
    deleteMany?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
};
export type auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_userInputEnvelope;
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
};
export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_userInputEnvelope;
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
};
export type auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_userInputEnvelope;
    set?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    update?: Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
};
export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput[] | Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_user_permissionsCreateManyAuth_userInputEnvelope;
    set?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    delete?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    connect?: Prisma.auth_user_user_permissionsWhereUniqueInput | Prisma.auth_user_user_permissionsWhereUniqueInput[];
    update?: Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput | Prisma.auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
};
export type auth_user_user_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number;
    auth_user: Prisma.auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput;
};
export type auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number;
    user_id: number;
};
export type auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>;
};
export type auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: Prisma.auth_user_user_permissionsCreateManyAuth_permissionInput | Prisma.auth_user_user_permissionsCreateManyAuth_permissionInput[];
    skipDuplicates?: boolean;
};
export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>;
    create: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>;
};
export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateWithoutAuth_permissionInput, Prisma.auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>;
};
export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: Prisma.auth_user_user_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateManyMutationInput, Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionInput>;
};
export type auth_user_user_permissionsScalarWhereInput = {
    AND?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
    OR?: Prisma.auth_user_user_permissionsScalarWhereInput[];
    NOT?: Prisma.auth_user_user_permissionsScalarWhereInput | Prisma.auth_user_user_permissionsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"auth_user_user_permissions"> | bigint | number;
    user_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
    permission_id?: Prisma.IntFilter<"auth_user_user_permissions"> | number;
};
export type auth_user_user_permissionsCreateWithoutAuth_userInput = {
    id?: bigint | number;
    auth_permission: Prisma.auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput;
};
export type auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number;
    permission_id: number;
};
export type auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>;
};
export type auth_user_user_permissionsCreateManyAuth_userInputEnvelope = {
    data: Prisma.auth_user_user_permissionsCreateManyAuth_userInput | Prisma.auth_user_user_permissionsCreateManyAuth_userInput[];
    skipDuplicates?: boolean;
};
export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>;
    create: Prisma.XOR<Prisma.auth_user_user_permissionsCreateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>;
};
export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateWithoutAuth_userInput, Prisma.auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>;
};
export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput = {
    where: Prisma.auth_user_user_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateManyMutationInput, Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userInput>;
};
export type auth_user_user_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number;
    user_id: number;
};
export type auth_user_user_permissionsUpdateWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput;
};
export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_user_permissionsCreateManyAuth_userInput = {
    id?: bigint | number;
    permission_id: number;
};
export type auth_user_user_permissionsUpdateWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_permission?: Prisma.auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput;
};
export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_user_permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    permission_id?: boolean;
    auth_permission?: boolean | Prisma.auth_permissionDefaultArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth_user_user_permissions"]>;
export type auth_user_user_permissionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    permission_id?: boolean;
};
export type auth_user_user_permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "permission_id", ExtArgs["result"]["auth_user_user_permissions"]>;
export type auth_user_user_permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_permission?: boolean | Prisma.auth_permissionDefaultArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
};
export type $auth_user_user_permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "auth_user_user_permissions";
    objects: {
        auth_permission: Prisma.$auth_permissionPayload<ExtArgs>;
        auth_user: Prisma.$auth_userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: number;
        permission_id: number;
    }, ExtArgs["result"]["auth_user_user_permissions"]>;
    composites: {};
};
export type auth_user_user_permissionsGetPayload<S extends boolean | null | undefined | auth_user_user_permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload, S>;
export type auth_user_user_permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<auth_user_user_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auth_user_user_permissionsCountAggregateInputType | true;
};
export interface auth_user_user_permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['auth_user_user_permissions'];
        meta: {
            name: 'auth_user_user_permissions';
        };
    };
    findUnique<T extends auth_user_user_permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends auth_user_user_permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends auth_user_user_permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, auth_user_user_permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends auth_user_user_permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends auth_user_user_permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, auth_user_user_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends auth_user_user_permissionsCreateArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends auth_user_user_permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, auth_user_user_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends auth_user_user_permissionsDeleteArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends auth_user_user_permissionsUpdateArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends auth_user_user_permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, auth_user_user_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends auth_user_user_permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends auth_user_user_permissionsUpsertArgs>(args: Prisma.SelectSubset<T, auth_user_user_permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__auth_user_user_permissionsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends auth_user_user_permissionsCountArgs>(args?: Prisma.Subset<T, auth_user_user_permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auth_user_user_permissionsCountAggregateOutputType> : number>;
    aggregate<T extends Auth_user_user_permissionsAggregateArgs>(args: Prisma.Subset<T, Auth_user_user_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_user_permissionsAggregateType<T>>;
    groupBy<T extends auth_user_user_permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: auth_user_user_permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: auth_user_user_permissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, auth_user_user_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_user_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: auth_user_user_permissionsFieldRefs;
}
export interface Prisma__auth_user_user_permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_permission<T extends Prisma.auth_permissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_permissionDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    auth_user<T extends Prisma.auth_userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_userDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface auth_user_user_permissionsFieldRefs {
    readonly id: Prisma.FieldRef<"auth_user_user_permissions", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"auth_user_user_permissions", 'Int'>;
    readonly permission_id: Prisma.FieldRef<"auth_user_user_permissions", 'Int'>;
}
export type auth_user_user_permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
};
export type auth_user_user_permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
};
export type auth_user_user_permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_user_permissionsWhereInput;
    orderBy?: Prisma.auth_user_user_permissionsOrderByWithRelationInput | Prisma.auth_user_user_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_user_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_user_permissionsScalarFieldEnum | Prisma.Auth_user_user_permissionsScalarFieldEnum[];
};
export type auth_user_user_permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_user_permissionsWhereInput;
    orderBy?: Prisma.auth_user_user_permissionsOrderByWithRelationInput | Prisma.auth_user_user_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_user_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_user_permissionsScalarFieldEnum | Prisma.Auth_user_user_permissionsScalarFieldEnum[];
};
export type auth_user_user_permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_user_permissionsWhereInput;
    orderBy?: Prisma.auth_user_user_permissionsOrderByWithRelationInput | Prisma.auth_user_user_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_user_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_user_permissionsScalarFieldEnum | Prisma.Auth_user_user_permissionsScalarFieldEnum[];
};
export type auth_user_user_permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsCreateInput, Prisma.auth_user_user_permissionsUncheckedCreateInput>;
};
export type auth_user_user_permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.auth_user_user_permissionsCreateManyInput | Prisma.auth_user_user_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type auth_user_user_permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateInput, Prisma.auth_user_user_permissionsUncheckedUpdateInput>;
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
};
export type auth_user_user_permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateManyMutationInput, Prisma.auth_user_user_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.auth_user_user_permissionsWhereInput;
    limit?: number;
};
export type auth_user_user_permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_user_permissionsCreateInput, Prisma.auth_user_user_permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.auth_user_user_permissionsUpdateInput, Prisma.auth_user_user_permissionsUncheckedUpdateInput>;
};
export type auth_user_user_permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
    where: Prisma.auth_user_user_permissionsWhereUniqueInput;
};
export type auth_user_user_permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_user_permissionsWhereInput;
    limit?: number;
};
export type auth_user_user_permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_user_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_user_permissionsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_user_permissionsInclude<ExtArgs> | null;
};
