import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type auth_user_groupsModel = runtime.Types.Result.DefaultSelection<Prisma.$auth_user_groupsPayload>;
export type AggregateAuth_user_groups = {
    _count: Auth_user_groupsCountAggregateOutputType | null;
    _avg: Auth_user_groupsAvgAggregateOutputType | null;
    _sum: Auth_user_groupsSumAggregateOutputType | null;
    _min: Auth_user_groupsMinAggregateOutputType | null;
    _max: Auth_user_groupsMaxAggregateOutputType | null;
};
export type Auth_user_groupsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    group_id: number | null;
};
export type Auth_user_groupsSumAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    group_id: number | null;
};
export type Auth_user_groupsMinAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    group_id: number | null;
};
export type Auth_user_groupsMaxAggregateOutputType = {
    id: bigint | null;
    user_id: number | null;
    group_id: number | null;
};
export type Auth_user_groupsCountAggregateOutputType = {
    id: number;
    user_id: number;
    group_id: number;
    _all: number;
};
export type Auth_user_groupsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
};
export type Auth_user_groupsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
};
export type Auth_user_groupsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
};
export type Auth_user_groupsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
};
export type Auth_user_groupsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    _all?: true;
};
export type Auth_user_groupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_groupsWhereInput;
    orderBy?: Prisma.auth_user_groupsOrderByWithRelationInput | Prisma.auth_user_groupsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Auth_user_groupsCountAggregateInputType;
    _avg?: Auth_user_groupsAvgAggregateInputType;
    _sum?: Auth_user_groupsSumAggregateInputType;
    _min?: Auth_user_groupsMinAggregateInputType;
    _max?: Auth_user_groupsMaxAggregateInputType;
};
export type GetAuth_user_groupsAggregateType<T extends Auth_user_groupsAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth_user_groups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth_user_groups[P]> : Prisma.GetScalarType<T[P], AggregateAuth_user_groups[P]>;
};
export type auth_user_groupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_groupsWhereInput;
    orderBy?: Prisma.auth_user_groupsOrderByWithAggregationInput | Prisma.auth_user_groupsOrderByWithAggregationInput[];
    by: Prisma.Auth_user_groupsScalarFieldEnum[] | Prisma.Auth_user_groupsScalarFieldEnum;
    having?: Prisma.auth_user_groupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auth_user_groupsCountAggregateInputType | true;
    _avg?: Auth_user_groupsAvgAggregateInputType;
    _sum?: Auth_user_groupsSumAggregateInputType;
    _min?: Auth_user_groupsMinAggregateInputType;
    _max?: Auth_user_groupsMaxAggregateInputType;
};
export type Auth_user_groupsGroupByOutputType = {
    id: bigint;
    user_id: number;
    group_id: number;
    _count: Auth_user_groupsCountAggregateOutputType | null;
    _avg: Auth_user_groupsAvgAggregateOutputType | null;
    _sum: Auth_user_groupsSumAggregateOutputType | null;
    _min: Auth_user_groupsMinAggregateOutputType | null;
    _max: Auth_user_groupsMaxAggregateOutputType | null;
};
export type GetAuth_user_groupsGroupByPayload<T extends auth_user_groupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auth_user_groupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auth_user_groupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]>;
}>>;
export type auth_user_groupsWhereInput = {
    AND?: Prisma.auth_user_groupsWhereInput | Prisma.auth_user_groupsWhereInput[];
    OR?: Prisma.auth_user_groupsWhereInput[];
    NOT?: Prisma.auth_user_groupsWhereInput | Prisma.auth_user_groupsWhereInput[];
    id?: Prisma.BigIntFilter<"auth_user_groups"> | bigint | number;
    user_id?: Prisma.IntFilter<"auth_user_groups"> | number;
    group_id?: Prisma.IntFilter<"auth_user_groups"> | number;
    auth_group?: Prisma.XOR<Prisma.Auth_groupScalarRelationFilter, Prisma.auth_groupWhereInput>;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
};
export type auth_user_groupsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    auth_group?: Prisma.auth_groupOrderByWithRelationInput;
    auth_user?: Prisma.auth_userOrderByWithRelationInput;
};
export type auth_user_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    user_id_group_id?: Prisma.auth_user_groupsUser_idGroup_idCompoundUniqueInput;
    AND?: Prisma.auth_user_groupsWhereInput | Prisma.auth_user_groupsWhereInput[];
    OR?: Prisma.auth_user_groupsWhereInput[];
    NOT?: Prisma.auth_user_groupsWhereInput | Prisma.auth_user_groupsWhereInput[];
    user_id?: Prisma.IntFilter<"auth_user_groups"> | number;
    group_id?: Prisma.IntFilter<"auth_user_groups"> | number;
    auth_group?: Prisma.XOR<Prisma.Auth_groupScalarRelationFilter, Prisma.auth_groupWhereInput>;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
}, "id" | "user_id_group_id">;
export type auth_user_groupsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
    _count?: Prisma.auth_user_groupsCountOrderByAggregateInput;
    _avg?: Prisma.auth_user_groupsAvgOrderByAggregateInput;
    _max?: Prisma.auth_user_groupsMaxOrderByAggregateInput;
    _min?: Prisma.auth_user_groupsMinOrderByAggregateInput;
    _sum?: Prisma.auth_user_groupsSumOrderByAggregateInput;
};
export type auth_user_groupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.auth_user_groupsScalarWhereWithAggregatesInput | Prisma.auth_user_groupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.auth_user_groupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.auth_user_groupsScalarWhereWithAggregatesInput | Prisma.auth_user_groupsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"auth_user_groups"> | bigint | number;
    user_id?: Prisma.IntWithAggregatesFilter<"auth_user_groups"> | number;
    group_id?: Prisma.IntWithAggregatesFilter<"auth_user_groups"> | number;
};
export type auth_user_groupsCreateInput = {
    id?: bigint | number;
    auth_group: Prisma.auth_groupCreateNestedOneWithoutAuth_user_groupsInput;
    auth_user: Prisma.auth_userCreateNestedOneWithoutAuth_user_groupsInput;
};
export type auth_user_groupsUncheckedCreateInput = {
    id?: bigint | number;
    user_id: number;
    group_id: number;
};
export type auth_user_groupsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_group?: Prisma.auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput;
};
export type auth_user_groupsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_groupsCreateManyInput = {
    id?: bigint | number;
    user_id: number;
    group_id: number;
};
export type auth_user_groupsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type auth_user_groupsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Auth_user_groupsListRelationFilter = {
    every?: Prisma.auth_user_groupsWhereInput;
    some?: Prisma.auth_user_groupsWhereInput;
    none?: Prisma.auth_user_groupsWhereInput;
};
export type auth_user_groupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type auth_user_groupsUser_idGroup_idCompoundUniqueInput = {
    user_id: number;
    group_id: number;
};
export type auth_user_groupsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
};
export type auth_user_groupsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
};
export type auth_user_groupsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
};
export type auth_user_groupsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
};
export type auth_user_groupsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    group_id?: Prisma.SortOrder;
};
export type auth_user_groupsCreateNestedManyWithoutAuth_groupInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_user_groupsCreateWithoutAuth_groupInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_groupInputEnvelope;
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
};
export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_user_groupsCreateWithoutAuth_groupInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_groupInputEnvelope;
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
};
export type auth_user_groupsUpdateManyWithoutAuth_groupNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_user_groupsCreateWithoutAuth_groupInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput[];
    upsert?: Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_groupInputEnvelope;
    set?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    delete?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    update?: Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput[];
    updateMany?: Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput | Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput[];
    deleteMany?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
};
export type auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput> | Prisma.auth_user_groupsCreateWithoutAuth_groupInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_groupInput[];
    upsert?: Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_groupInputEnvelope;
    set?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    delete?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    update?: Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput | Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput[];
    updateMany?: Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput | Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput[];
    deleteMany?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
};
export type auth_user_groupsCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_groupsCreateWithoutAuth_userInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_userInputEnvelope;
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
};
export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_groupsCreateWithoutAuth_userInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_userInputEnvelope;
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
};
export type auth_user_groupsUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_groupsCreateWithoutAuth_userInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_userInputEnvelope;
    set?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    delete?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    update?: Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput | Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
};
export type auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput> | Prisma.auth_user_groupsCreateWithoutAuth_userInput[] | Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput | Prisma.auth_user_groupsCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.auth_user_groupsCreateManyAuth_userInputEnvelope;
    set?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    disconnect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    delete?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    connect?: Prisma.auth_user_groupsWhereUniqueInput | Prisma.auth_user_groupsWhereUniqueInput[];
    update?: Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput | Prisma.auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
};
export type auth_user_groupsCreateWithoutAuth_groupInput = {
    id?: bigint | number;
    auth_user: Prisma.auth_userCreateNestedOneWithoutAuth_user_groupsInput;
};
export type auth_user_groupsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number;
    user_id: number;
};
export type auth_user_groupsCreateOrConnectWithoutAuth_groupInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput>;
};
export type auth_user_groupsCreateManyAuth_groupInputEnvelope = {
    data: Prisma.auth_user_groupsCreateManyAuth_groupInput | Prisma.auth_user_groupsCreateManyAuth_groupInput[];
    skipDuplicates?: boolean;
};
export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_user_groupsUpdateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>;
    create: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_groupInput>;
};
export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateWithoutAuth_groupInput, Prisma.auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>;
};
export type auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: Prisma.auth_user_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateManyMutationInput, Prisma.auth_user_groupsUncheckedUpdateManyWithoutAuth_groupInput>;
};
export type auth_user_groupsScalarWhereInput = {
    AND?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
    OR?: Prisma.auth_user_groupsScalarWhereInput[];
    NOT?: Prisma.auth_user_groupsScalarWhereInput | Prisma.auth_user_groupsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"auth_user_groups"> | bigint | number;
    user_id?: Prisma.IntFilter<"auth_user_groups"> | number;
    group_id?: Prisma.IntFilter<"auth_user_groups"> | number;
};
export type auth_user_groupsCreateWithoutAuth_userInput = {
    id?: bigint | number;
    auth_group: Prisma.auth_groupCreateNestedOneWithoutAuth_user_groupsInput;
};
export type auth_user_groupsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number;
    group_id: number;
};
export type auth_user_groupsCreateOrConnectWithoutAuth_userInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput>;
};
export type auth_user_groupsCreateManyAuth_userInputEnvelope = {
    data: Prisma.auth_user_groupsCreateManyAuth_userInput | Prisma.auth_user_groupsCreateManyAuth_userInput[];
    skipDuplicates?: boolean;
};
export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_user_groupsUpdateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedUpdateWithoutAuth_userInput>;
    create: Prisma.XOR<Prisma.auth_user_groupsCreateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedCreateWithoutAuth_userInput>;
};
export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.auth_user_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateWithoutAuth_userInput, Prisma.auth_user_groupsUncheckedUpdateWithoutAuth_userInput>;
};
export type auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput = {
    where: Prisma.auth_user_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateManyMutationInput, Prisma.auth_user_groupsUncheckedUpdateManyWithoutAuth_userInput>;
};
export type auth_user_groupsCreateManyAuth_groupInput = {
    id?: bigint | number;
    user_id: number;
};
export type auth_user_groupsUpdateWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput;
};
export type auth_user_groupsUncheckedUpdateWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_groupsUncheckedUpdateManyWithoutAuth_groupInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_groupsCreateManyAuth_userInput = {
    id?: bigint | number;
    group_id: number;
};
export type auth_user_groupsUpdateWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auth_group?: Prisma.auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput;
};
export type auth_user_groupsUncheckedUpdateWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_groupsUncheckedUpdateManyWithoutAuth_userInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type auth_user_groupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    group_id?: boolean;
    auth_group?: boolean | Prisma.auth_groupDefaultArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth_user_groups"]>;
export type auth_user_groupsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    group_id?: boolean;
};
export type auth_user_groupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "group_id", ExtArgs["result"]["auth_user_groups"]>;
export type auth_user_groupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_group?: boolean | Prisma.auth_groupDefaultArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
};
export type $auth_user_groupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "auth_user_groups";
    objects: {
        auth_group: Prisma.$auth_groupPayload<ExtArgs>;
        auth_user: Prisma.$auth_userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: number;
        group_id: number;
    }, ExtArgs["result"]["auth_user_groups"]>;
    composites: {};
};
export type auth_user_groupsGetPayload<S extends boolean | null | undefined | auth_user_groupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload, S>;
export type auth_user_groupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<auth_user_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auth_user_groupsCountAggregateInputType | true;
};
export interface auth_user_groupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['auth_user_groups'];
        meta: {
            name: 'auth_user_groups';
        };
    };
    findUnique<T extends auth_user_groupsFindUniqueArgs>(args: Prisma.SelectSubset<T, auth_user_groupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends auth_user_groupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, auth_user_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends auth_user_groupsFindFirstArgs>(args?: Prisma.SelectSubset<T, auth_user_groupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends auth_user_groupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, auth_user_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends auth_user_groupsFindManyArgs>(args?: Prisma.SelectSubset<T, auth_user_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends auth_user_groupsCreateArgs>(args: Prisma.SelectSubset<T, auth_user_groupsCreateArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends auth_user_groupsCreateManyArgs>(args?: Prisma.SelectSubset<T, auth_user_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends auth_user_groupsDeleteArgs>(args: Prisma.SelectSubset<T, auth_user_groupsDeleteArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends auth_user_groupsUpdateArgs>(args: Prisma.SelectSubset<T, auth_user_groupsUpdateArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends auth_user_groupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, auth_user_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends auth_user_groupsUpdateManyArgs>(args: Prisma.SelectSubset<T, auth_user_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends auth_user_groupsUpsertArgs>(args: Prisma.SelectSubset<T, auth_user_groupsUpsertArgs<ExtArgs>>): Prisma.Prisma__auth_user_groupsClient<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends auth_user_groupsCountArgs>(args?: Prisma.Subset<T, auth_user_groupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auth_user_groupsCountAggregateOutputType> : number>;
    aggregate<T extends Auth_user_groupsAggregateArgs>(args: Prisma.Subset<T, Auth_user_groupsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_groupsAggregateType<T>>;
    groupBy<T extends auth_user_groupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: auth_user_groupsGroupByArgs['orderBy'];
    } : {
        orderBy?: auth_user_groupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, auth_user_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: auth_user_groupsFieldRefs;
}
export interface Prisma__auth_user_groupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_group<T extends Prisma.auth_groupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_groupDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_groupClient<runtime.Types.Result.GetResult<Prisma.$auth_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    auth_user<T extends Prisma.auth_userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_userDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface auth_user_groupsFieldRefs {
    readonly id: Prisma.FieldRef<"auth_user_groups", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"auth_user_groups", 'Int'>;
    readonly group_id: Prisma.FieldRef<"auth_user_groups", 'Int'>;
}
export type auth_user_groupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where: Prisma.auth_user_groupsWhereUniqueInput;
};
export type auth_user_groupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where: Prisma.auth_user_groupsWhereUniqueInput;
};
export type auth_user_groupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_groupsWhereInput;
    orderBy?: Prisma.auth_user_groupsOrderByWithRelationInput | Prisma.auth_user_groupsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_groupsScalarFieldEnum | Prisma.Auth_user_groupsScalarFieldEnum[];
};
export type auth_user_groupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_groupsWhereInput;
    orderBy?: Prisma.auth_user_groupsOrderByWithRelationInput | Prisma.auth_user_groupsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_groupsScalarFieldEnum | Prisma.Auth_user_groupsScalarFieldEnum[];
};
export type auth_user_groupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where?: Prisma.auth_user_groupsWhereInput;
    orderBy?: Prisma.auth_user_groupsOrderByWithRelationInput | Prisma.auth_user_groupsOrderByWithRelationInput[];
    cursor?: Prisma.auth_user_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_user_groupsScalarFieldEnum | Prisma.Auth_user_groupsScalarFieldEnum[];
};
export type auth_user_groupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_user_groupsCreateInput, Prisma.auth_user_groupsUncheckedCreateInput>;
};
export type auth_user_groupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.auth_user_groupsCreateManyInput | Prisma.auth_user_groupsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type auth_user_groupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateInput, Prisma.auth_user_groupsUncheckedUpdateInput>;
    where: Prisma.auth_user_groupsWhereUniqueInput;
};
export type auth_user_groupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.auth_user_groupsUpdateManyMutationInput, Prisma.auth_user_groupsUncheckedUpdateManyInput>;
    where?: Prisma.auth_user_groupsWhereInput;
    limit?: number;
};
export type auth_user_groupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where: Prisma.auth_user_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_user_groupsCreateInput, Prisma.auth_user_groupsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.auth_user_groupsUpdateInput, Prisma.auth_user_groupsUncheckedUpdateInput>;
};
export type auth_user_groupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
    where: Prisma.auth_user_groupsWhereUniqueInput;
};
export type auth_user_groupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_groupsWhereInput;
    limit?: number;
};
export type auth_user_groupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_user_groupsSelect<ExtArgs> | null;
    omit?: Prisma.auth_user_groupsOmit<ExtArgs> | null;
    include?: Prisma.auth_user_groupsInclude<ExtArgs> | null;
};
