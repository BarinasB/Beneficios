import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type auth_permissionModel = runtime.Types.Result.DefaultSelection<Prisma.$auth_permissionPayload>;
export type AggregateAuth_permission = {
    _count: Auth_permissionCountAggregateOutputType | null;
    _avg: Auth_permissionAvgAggregateOutputType | null;
    _sum: Auth_permissionSumAggregateOutputType | null;
    _min: Auth_permissionMinAggregateOutputType | null;
    _max: Auth_permissionMaxAggregateOutputType | null;
};
export type Auth_permissionAvgAggregateOutputType = {
    id: number | null;
    content_type_id: number | null;
};
export type Auth_permissionSumAggregateOutputType = {
    id: number | null;
    content_type_id: number | null;
};
export type Auth_permissionMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    content_type_id: number | null;
    codename: string | null;
};
export type Auth_permissionMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    content_type_id: number | null;
    codename: string | null;
};
export type Auth_permissionCountAggregateOutputType = {
    id: number;
    name: number;
    content_type_id: number;
    codename: number;
    _all: number;
};
export type Auth_permissionAvgAggregateInputType = {
    id?: true;
    content_type_id?: true;
};
export type Auth_permissionSumAggregateInputType = {
    id?: true;
    content_type_id?: true;
};
export type Auth_permissionMinAggregateInputType = {
    id?: true;
    name?: true;
    content_type_id?: true;
    codename?: true;
};
export type Auth_permissionMaxAggregateInputType = {
    id?: true;
    name?: true;
    content_type_id?: true;
    codename?: true;
};
export type Auth_permissionCountAggregateInputType = {
    id?: true;
    name?: true;
    content_type_id?: true;
    codename?: true;
    _all?: true;
};
export type Auth_permissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_permissionWhereInput;
    orderBy?: Prisma.auth_permissionOrderByWithRelationInput | Prisma.auth_permissionOrderByWithRelationInput[];
    cursor?: Prisma.auth_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Auth_permissionCountAggregateInputType;
    _avg?: Auth_permissionAvgAggregateInputType;
    _sum?: Auth_permissionSumAggregateInputType;
    _min?: Auth_permissionMinAggregateInputType;
    _max?: Auth_permissionMaxAggregateInputType;
};
export type GetAuth_permissionAggregateType<T extends Auth_permissionAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth_permission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth_permission[P]> : Prisma.GetScalarType<T[P], AggregateAuth_permission[P]>;
};
export type auth_permissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_permissionWhereInput;
    orderBy?: Prisma.auth_permissionOrderByWithAggregationInput | Prisma.auth_permissionOrderByWithAggregationInput[];
    by: Prisma.Auth_permissionScalarFieldEnum[] | Prisma.Auth_permissionScalarFieldEnum;
    having?: Prisma.auth_permissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auth_permissionCountAggregateInputType | true;
    _avg?: Auth_permissionAvgAggregateInputType;
    _sum?: Auth_permissionSumAggregateInputType;
    _min?: Auth_permissionMinAggregateInputType;
    _max?: Auth_permissionMaxAggregateInputType;
};
export type Auth_permissionGroupByOutputType = {
    id: number;
    name: string;
    content_type_id: number;
    codename: string;
    _count: Auth_permissionCountAggregateOutputType | null;
    _avg: Auth_permissionAvgAggregateOutputType | null;
    _sum: Auth_permissionSumAggregateOutputType | null;
    _min: Auth_permissionMinAggregateOutputType | null;
    _max: Auth_permissionMaxAggregateOutputType | null;
};
export type GetAuth_permissionGroupByPayload<T extends auth_permissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auth_permissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auth_permissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auth_permissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auth_permissionGroupByOutputType[P]>;
}>>;
export type auth_permissionWhereInput = {
    AND?: Prisma.auth_permissionWhereInput | Prisma.auth_permissionWhereInput[];
    OR?: Prisma.auth_permissionWhereInput[];
    NOT?: Prisma.auth_permissionWhereInput | Prisma.auth_permissionWhereInput[];
    id?: Prisma.IntFilter<"auth_permission"> | number;
    name?: Prisma.StringFilter<"auth_permission"> | string;
    content_type_id?: Prisma.IntFilter<"auth_permission"> | number;
    codename?: Prisma.StringFilter<"auth_permission"> | string;
    auth_group_permissions?: Prisma.Auth_group_permissionsListRelationFilter;
    django_content_type?: Prisma.XOR<Prisma.Django_content_typeScalarRelationFilter, Prisma.django_content_typeWhereInput>;
    auth_user_user_permissions?: Prisma.Auth_user_user_permissionsListRelationFilter;
};
export type auth_permissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    codename?: Prisma.SortOrder;
    auth_group_permissions?: Prisma.auth_group_permissionsOrderByRelationAggregateInput;
    django_content_type?: Prisma.django_content_typeOrderByWithRelationInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsOrderByRelationAggregateInput;
    _relevance?: Prisma.auth_permissionOrderByRelevanceInput;
};
export type auth_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    content_type_id_codename?: Prisma.auth_permissionContent_type_idCodenameCompoundUniqueInput;
    AND?: Prisma.auth_permissionWhereInput | Prisma.auth_permissionWhereInput[];
    OR?: Prisma.auth_permissionWhereInput[];
    NOT?: Prisma.auth_permissionWhereInput | Prisma.auth_permissionWhereInput[];
    name?: Prisma.StringFilter<"auth_permission"> | string;
    content_type_id?: Prisma.IntFilter<"auth_permission"> | number;
    codename?: Prisma.StringFilter<"auth_permission"> | string;
    auth_group_permissions?: Prisma.Auth_group_permissionsListRelationFilter;
    django_content_type?: Prisma.XOR<Prisma.Django_content_typeScalarRelationFilter, Prisma.django_content_typeWhereInput>;
    auth_user_user_permissions?: Prisma.Auth_user_user_permissionsListRelationFilter;
}, "id" | "content_type_id_codename">;
export type auth_permissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    codename?: Prisma.SortOrder;
    _count?: Prisma.auth_permissionCountOrderByAggregateInput;
    _avg?: Prisma.auth_permissionAvgOrderByAggregateInput;
    _max?: Prisma.auth_permissionMaxOrderByAggregateInput;
    _min?: Prisma.auth_permissionMinOrderByAggregateInput;
    _sum?: Prisma.auth_permissionSumOrderByAggregateInput;
};
export type auth_permissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.auth_permissionScalarWhereWithAggregatesInput | Prisma.auth_permissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.auth_permissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.auth_permissionScalarWhereWithAggregatesInput | Prisma.auth_permissionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"auth_permission"> | number;
    name?: Prisma.StringWithAggregatesFilter<"auth_permission"> | string;
    content_type_id?: Prisma.IntWithAggregatesFilter<"auth_permission"> | number;
    codename?: Prisma.StringWithAggregatesFilter<"auth_permission"> | string;
};
export type auth_permissionCreateInput = {
    name: string;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput;
    django_content_type: Prisma.django_content_typeCreateNestedOneWithoutAuth_permissionInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionUncheckedCreateInput = {
    id?: number;
    name: string;
    content_type_id: number;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput;
    django_content_type?: Prisma.django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionCreateManyInput = {
    id?: number;
    name: string;
    content_type_id: number;
    codename: string;
};
export type auth_permissionUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type auth_permissionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Auth_permissionScalarRelationFilter = {
    is?: Prisma.auth_permissionWhereInput;
    isNot?: Prisma.auth_permissionWhereInput;
};
export type auth_permissionOrderByRelevanceInput = {
    fields: Prisma.auth_permissionOrderByRelevanceFieldEnum | Prisma.auth_permissionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type auth_permissionContent_type_idCodenameCompoundUniqueInput = {
    content_type_id: number;
    codename: string;
};
export type auth_permissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    codename?: Prisma.SortOrder;
};
export type auth_permissionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
};
export type auth_permissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    codename?: Prisma.SortOrder;
};
export type auth_permissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    codename?: Prisma.SortOrder;
};
export type auth_permissionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
};
export type Auth_permissionListRelationFilter = {
    every?: Prisma.auth_permissionWhereInput;
    some?: Prisma.auth_permissionWhereInput;
    none?: Prisma.auth_permissionWhereInput;
};
export type auth_permissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>;
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput;
    connect?: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>;
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput;
    upsert?: Prisma.auth_permissionUpsertWithoutAuth_group_permissionsInput;
    connect?: Prisma.auth_permissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.auth_permissionUpdateToOneWithWhereWithoutAuth_group_permissionsInput, Prisma.auth_permissionUpdateWithoutAuth_group_permissionsInput>, Prisma.auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>;
};
export type auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput;
    connect?: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput;
    upsert?: Prisma.auth_permissionUpsertWithoutAuth_user_user_permissionsInput;
    connect?: Prisma.auth_permissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.auth_permissionUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUpdateWithoutAuth_user_user_permissionsInput>, Prisma.auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
};
export type auth_permissionCreateNestedManyWithoutDjango_content_typeInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | Prisma.auth_permissionCreateWithoutDjango_content_typeInput[] | Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput | Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput[];
    createMany?: Prisma.auth_permissionCreateManyDjango_content_typeInputEnvelope;
    connect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
};
export type auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | Prisma.auth_permissionCreateWithoutDjango_content_typeInput[] | Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput | Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput[];
    createMany?: Prisma.auth_permissionCreateManyDjango_content_typeInputEnvelope;
    connect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
};
export type auth_permissionUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | Prisma.auth_permissionCreateWithoutDjango_content_typeInput[] | Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput | Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput[];
    upsert?: Prisma.auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput | Prisma.auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput[];
    createMany?: Prisma.auth_permissionCreateManyDjango_content_typeInputEnvelope;
    set?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    disconnect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    delete?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    connect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    update?: Prisma.auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput | Prisma.auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput[];
    updateMany?: Prisma.auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput | Prisma.auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput[];
    deleteMany?: Prisma.auth_permissionScalarWhereInput | Prisma.auth_permissionScalarWhereInput[];
};
export type auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput> | Prisma.auth_permissionCreateWithoutDjango_content_typeInput[] | Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput | Prisma.auth_permissionCreateOrConnectWithoutDjango_content_typeInput[];
    upsert?: Prisma.auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput | Prisma.auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput[];
    createMany?: Prisma.auth_permissionCreateManyDjango_content_typeInputEnvelope;
    set?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    disconnect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    delete?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    connect?: Prisma.auth_permissionWhereUniqueInput | Prisma.auth_permissionWhereUniqueInput[];
    update?: Prisma.auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput | Prisma.auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput[];
    updateMany?: Prisma.auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput | Prisma.auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput[];
    deleteMany?: Prisma.auth_permissionScalarWhereInput | Prisma.auth_permissionScalarWhereInput[];
};
export type auth_permissionCreateWithoutAuth_group_permissionsInput = {
    name: string;
    codename: string;
    django_content_type: Prisma.django_content_typeCreateNestedOneWithoutAuth_permissionInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput = {
    id?: number;
    name: string;
    content_type_id: number;
    codename: string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput = {
    where: Prisma.auth_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>;
};
export type auth_permissionUpsertWithoutAuth_group_permissionsInput = {
    update: Prisma.XOR<Prisma.auth_permissionUpdateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>;
    where?: Prisma.auth_permissionWhereInput;
};
export type auth_permissionUpdateToOneWithWhereWithoutAuth_group_permissionsInput = {
    where?: Prisma.auth_permissionWhereInput;
    data: Prisma.XOR<Prisma.auth_permissionUpdateWithoutAuth_group_permissionsInput, Prisma.auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>;
};
export type auth_permissionUpdateWithoutAuth_group_permissionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    django_content_type?: Prisma.django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionCreateWithoutAuth_user_user_permissionsInput = {
    name: string;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput;
    django_content_type: Prisma.django_content_typeCreateNestedOneWithoutAuth_permissionInput;
};
export type auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number;
    name: string;
    content_type_id: number;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: Prisma.auth_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>;
};
export type auth_permissionUpsertWithoutAuth_user_user_permissionsInput = {
    update: Prisma.XOR<Prisma.auth_permissionUpdateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    where?: Prisma.auth_permissionWhereInput;
};
export type auth_permissionUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput = {
    where?: Prisma.auth_permissionWhereInput;
    data: Prisma.XOR<Prisma.auth_permissionUpdateWithoutAuth_user_user_permissionsInput, Prisma.auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
};
export type auth_permissionUpdateWithoutAuth_user_user_permissionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput;
    django_content_type?: Prisma.django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput;
};
export type auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionCreateWithoutDjango_content_typeInput = {
    name: string;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number;
    name: string;
    codename: string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput;
};
export type auth_permissionCreateOrConnectWithoutDjango_content_typeInput = {
    where: Prisma.auth_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput>;
};
export type auth_permissionCreateManyDjango_content_typeInputEnvelope = {
    data: Prisma.auth_permissionCreateManyDjango_content_typeInput | Prisma.auth_permissionCreateManyDjango_content_typeInput[];
    skipDuplicates?: boolean;
};
export type auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: Prisma.auth_permissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.auth_permissionUpdateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>;
    create: Prisma.XOR<Prisma.auth_permissionCreateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedCreateWithoutDjango_content_typeInput>;
};
export type auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: Prisma.auth_permissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.auth_permissionUpdateWithoutDjango_content_typeInput, Prisma.auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>;
};
export type auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: Prisma.auth_permissionScalarWhereInput;
    data: Prisma.XOR<Prisma.auth_permissionUpdateManyMutationInput, Prisma.auth_permissionUncheckedUpdateManyWithoutDjango_content_typeInput>;
};
export type auth_permissionScalarWhereInput = {
    AND?: Prisma.auth_permissionScalarWhereInput | Prisma.auth_permissionScalarWhereInput[];
    OR?: Prisma.auth_permissionScalarWhereInput[];
    NOT?: Prisma.auth_permissionScalarWhereInput | Prisma.auth_permissionScalarWhereInput[];
    id?: Prisma.IntFilter<"auth_permission"> | number;
    name?: Prisma.StringFilter<"auth_permission"> | string;
    content_type_id?: Prisma.IntFilter<"auth_permission"> | number;
    codename?: Prisma.StringFilter<"auth_permission"> | string;
};
export type auth_permissionCreateManyDjango_content_typeInput = {
    id?: number;
    name: string;
    codename: string;
};
export type auth_permissionUpdateWithoutDjango_content_typeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_group_permissions?: Prisma.auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput;
};
export type auth_permissionUncheckedUpdateManyWithoutDjango_content_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    codename?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Auth_permissionCountOutputType = {
    auth_group_permissions: number;
    auth_user_user_permissions: number;
};
export type Auth_permissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | Auth_permissionCountOutputTypeCountAuth_group_permissionsArgs;
    auth_user_user_permissions?: boolean | Auth_permissionCountOutputTypeCountAuth_user_user_permissionsArgs;
};
export type Auth_permissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Auth_permissionCountOutputTypeSelect<ExtArgs> | null;
};
export type Auth_permissionCountOutputTypeCountAuth_group_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_group_permissionsWhereInput;
};
export type Auth_permissionCountOutputTypeCountAuth_user_user_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_user_permissionsWhereInput;
};
export type auth_permissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    content_type_id?: boolean;
    codename?: boolean;
    auth_group_permissions?: boolean | Prisma.auth_permission$auth_group_permissionsArgs<ExtArgs>;
    django_content_type?: boolean | Prisma.django_content_typeDefaultArgs<ExtArgs>;
    auth_user_user_permissions?: boolean | Prisma.auth_permission$auth_user_user_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Auth_permissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth_permission"]>;
export type auth_permissionSelectScalar = {
    id?: boolean;
    name?: boolean;
    content_type_id?: boolean;
    codename?: boolean;
};
export type auth_permissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "content_type_id" | "codename", ExtArgs["result"]["auth_permission"]>;
export type auth_permissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_group_permissions?: boolean | Prisma.auth_permission$auth_group_permissionsArgs<ExtArgs>;
    django_content_type?: boolean | Prisma.django_content_typeDefaultArgs<ExtArgs>;
    auth_user_user_permissions?: boolean | Prisma.auth_permission$auth_user_user_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Auth_permissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $auth_permissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "auth_permission";
    objects: {
        auth_group_permissions: Prisma.$auth_group_permissionsPayload<ExtArgs>[];
        django_content_type: Prisma.$django_content_typePayload<ExtArgs>;
        auth_user_user_permissions: Prisma.$auth_user_user_permissionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        content_type_id: number;
        codename: string;
    }, ExtArgs["result"]["auth_permission"]>;
    composites: {};
};
export type auth_permissionGetPayload<S extends boolean | null | undefined | auth_permissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload, S>;
export type auth_permissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<auth_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auth_permissionCountAggregateInputType | true;
};
export interface auth_permissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['auth_permission'];
        meta: {
            name: 'auth_permission';
        };
    };
    findUnique<T extends auth_permissionFindUniqueArgs>(args: Prisma.SelectSubset<T, auth_permissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends auth_permissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, auth_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends auth_permissionFindFirstArgs>(args?: Prisma.SelectSubset<T, auth_permissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends auth_permissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, auth_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends auth_permissionFindManyArgs>(args?: Prisma.SelectSubset<T, auth_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends auth_permissionCreateArgs>(args: Prisma.SelectSubset<T, auth_permissionCreateArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends auth_permissionCreateManyArgs>(args?: Prisma.SelectSubset<T, auth_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends auth_permissionDeleteArgs>(args: Prisma.SelectSubset<T, auth_permissionDeleteArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends auth_permissionUpdateArgs>(args: Prisma.SelectSubset<T, auth_permissionUpdateArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends auth_permissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, auth_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends auth_permissionUpdateManyArgs>(args: Prisma.SelectSubset<T, auth_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends auth_permissionUpsertArgs>(args: Prisma.SelectSubset<T, auth_permissionUpsertArgs<ExtArgs>>): Prisma.Prisma__auth_permissionClient<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends auth_permissionCountArgs>(args?: Prisma.Subset<T, auth_permissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auth_permissionCountAggregateOutputType> : number>;
    aggregate<T extends Auth_permissionAggregateArgs>(args: Prisma.Subset<T, Auth_permissionAggregateArgs>): Prisma.PrismaPromise<GetAuth_permissionAggregateType<T>>;
    groupBy<T extends auth_permissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: auth_permissionGroupByArgs['orderBy'];
    } : {
        orderBy?: auth_permissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, auth_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: auth_permissionFieldRefs;
}
export interface Prisma__auth_permissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_group_permissions<T extends Prisma.auth_permission$auth_group_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_permission$auth_group_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_group_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    django_content_type<T extends Prisma.django_content_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.django_content_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    auth_user_user_permissions<T extends Prisma.auth_permission$auth_user_user_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_permission$auth_user_user_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface auth_permissionFieldRefs {
    readonly id: Prisma.FieldRef<"auth_permission", 'Int'>;
    readonly name: Prisma.FieldRef<"auth_permission", 'String'>;
    readonly content_type_id: Prisma.FieldRef<"auth_permission", 'Int'>;
    readonly codename: Prisma.FieldRef<"auth_permission", 'String'>;
}
export type auth_permissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where?: Prisma.auth_permissionWhereInput;
    orderBy?: Prisma.auth_permissionOrderByWithRelationInput | Prisma.auth_permissionOrderByWithRelationInput[];
    cursor?: Prisma.auth_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_permissionScalarFieldEnum | Prisma.Auth_permissionScalarFieldEnum[];
};
export type auth_permissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where?: Prisma.auth_permissionWhereInput;
    orderBy?: Prisma.auth_permissionOrderByWithRelationInput | Prisma.auth_permissionOrderByWithRelationInput[];
    cursor?: Prisma.auth_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_permissionScalarFieldEnum | Prisma.Auth_permissionScalarFieldEnum[];
};
export type auth_permissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where?: Prisma.auth_permissionWhereInput;
    orderBy?: Prisma.auth_permissionOrderByWithRelationInput | Prisma.auth_permissionOrderByWithRelationInput[];
    cursor?: Prisma.auth_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_permissionScalarFieldEnum | Prisma.Auth_permissionScalarFieldEnum[];
};
export type auth_permissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_permissionCreateInput, Prisma.auth_permissionUncheckedCreateInput>;
};
export type auth_permissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.auth_permissionCreateManyInput | Prisma.auth_permissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type auth_permissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_permissionUpdateInput, Prisma.auth_permissionUncheckedUpdateInput>;
    where: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.auth_permissionUpdateManyMutationInput, Prisma.auth_permissionUncheckedUpdateManyInput>;
    where?: Prisma.auth_permissionWhereInput;
    limit?: number;
};
export type auth_permissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where: Prisma.auth_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_permissionCreateInput, Prisma.auth_permissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.auth_permissionUpdateInput, Prisma.auth_permissionUncheckedUpdateInput>;
};
export type auth_permissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
    where: Prisma.auth_permissionWhereUniqueInput;
};
export type auth_permissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_permissionWhereInput;
    limit?: number;
};
export type auth_permission$auth_group_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type auth_permission$auth_user_user_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type auth_permissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_permissionSelect<ExtArgs> | null;
    omit?: Prisma.auth_permissionOmit<ExtArgs> | null;
    include?: Prisma.auth_permissionInclude<ExtArgs> | null;
};
