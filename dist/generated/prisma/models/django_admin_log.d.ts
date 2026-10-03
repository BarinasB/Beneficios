import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type django_admin_logModel = runtime.Types.Result.DefaultSelection<Prisma.$django_admin_logPayload>;
export type AggregateDjango_admin_log = {
    _count: Django_admin_logCountAggregateOutputType | null;
    _avg: Django_admin_logAvgAggregateOutputType | null;
    _sum: Django_admin_logSumAggregateOutputType | null;
    _min: Django_admin_logMinAggregateOutputType | null;
    _max: Django_admin_logMaxAggregateOutputType | null;
};
export type Django_admin_logAvgAggregateOutputType = {
    id: number | null;
    action_flag: number | null;
    content_type_id: number | null;
    user_id: number | null;
};
export type Django_admin_logSumAggregateOutputType = {
    id: number | null;
    action_flag: number | null;
    content_type_id: number | null;
    user_id: number | null;
};
export type Django_admin_logMinAggregateOutputType = {
    id: number | null;
    action_time: Date | null;
    object_id: string | null;
    object_repr: string | null;
    action_flag: number | null;
    change_message: string | null;
    content_type_id: number | null;
    user_id: number | null;
};
export type Django_admin_logMaxAggregateOutputType = {
    id: number | null;
    action_time: Date | null;
    object_id: string | null;
    object_repr: string | null;
    action_flag: number | null;
    change_message: string | null;
    content_type_id: number | null;
    user_id: number | null;
};
export type Django_admin_logCountAggregateOutputType = {
    id: number;
    action_time: number;
    object_id: number;
    object_repr: number;
    action_flag: number;
    change_message: number;
    content_type_id: number;
    user_id: number;
    _all: number;
};
export type Django_admin_logAvgAggregateInputType = {
    id?: true;
    action_flag?: true;
    content_type_id?: true;
    user_id?: true;
};
export type Django_admin_logSumAggregateInputType = {
    id?: true;
    action_flag?: true;
    content_type_id?: true;
    user_id?: true;
};
export type Django_admin_logMinAggregateInputType = {
    id?: true;
    action_time?: true;
    object_id?: true;
    object_repr?: true;
    action_flag?: true;
    change_message?: true;
    content_type_id?: true;
    user_id?: true;
};
export type Django_admin_logMaxAggregateInputType = {
    id?: true;
    action_time?: true;
    object_id?: true;
    object_repr?: true;
    action_flag?: true;
    change_message?: true;
    content_type_id?: true;
    user_id?: true;
};
export type Django_admin_logCountAggregateInputType = {
    id?: true;
    action_time?: true;
    object_id?: true;
    object_repr?: true;
    action_flag?: true;
    change_message?: true;
    content_type_id?: true;
    user_id?: true;
    _all?: true;
};
export type Django_admin_logAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_admin_logWhereInput;
    orderBy?: Prisma.django_admin_logOrderByWithRelationInput | Prisma.django_admin_logOrderByWithRelationInput[];
    cursor?: Prisma.django_admin_logWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Django_admin_logCountAggregateInputType;
    _avg?: Django_admin_logAvgAggregateInputType;
    _sum?: Django_admin_logSumAggregateInputType;
    _min?: Django_admin_logMinAggregateInputType;
    _max?: Django_admin_logMaxAggregateInputType;
};
export type GetDjango_admin_logAggregateType<T extends Django_admin_logAggregateArgs> = {
    [P in keyof T & keyof AggregateDjango_admin_log]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDjango_admin_log[P]> : Prisma.GetScalarType<T[P], AggregateDjango_admin_log[P]>;
};
export type django_admin_logGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_admin_logWhereInput;
    orderBy?: Prisma.django_admin_logOrderByWithAggregationInput | Prisma.django_admin_logOrderByWithAggregationInput[];
    by: Prisma.Django_admin_logScalarFieldEnum[] | Prisma.Django_admin_logScalarFieldEnum;
    having?: Prisma.django_admin_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Django_admin_logCountAggregateInputType | true;
    _avg?: Django_admin_logAvgAggregateInputType;
    _sum?: Django_admin_logSumAggregateInputType;
    _min?: Django_admin_logMinAggregateInputType;
    _max?: Django_admin_logMaxAggregateInputType;
};
export type Django_admin_logGroupByOutputType = {
    id: number;
    action_time: Date;
    object_id: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    content_type_id: number | null;
    user_id: number;
    _count: Django_admin_logCountAggregateOutputType | null;
    _avg: Django_admin_logAvgAggregateOutputType | null;
    _sum: Django_admin_logSumAggregateOutputType | null;
    _min: Django_admin_logMinAggregateOutputType | null;
    _max: Django_admin_logMaxAggregateOutputType | null;
};
export type GetDjango_admin_logGroupByPayload<T extends django_admin_logGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Django_admin_logGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Django_admin_logGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Django_admin_logGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Django_admin_logGroupByOutputType[P]>;
}>>;
export type django_admin_logWhereInput = {
    AND?: Prisma.django_admin_logWhereInput | Prisma.django_admin_logWhereInput[];
    OR?: Prisma.django_admin_logWhereInput[];
    NOT?: Prisma.django_admin_logWhereInput | Prisma.django_admin_logWhereInput[];
    id?: Prisma.IntFilter<"django_admin_log"> | number;
    action_time?: Prisma.DateTimeFilter<"django_admin_log"> | Date | string;
    object_id?: Prisma.StringNullableFilter<"django_admin_log"> | string | null;
    object_repr?: Prisma.StringFilter<"django_admin_log"> | string;
    action_flag?: Prisma.IntFilter<"django_admin_log"> | number;
    change_message?: Prisma.StringFilter<"django_admin_log"> | string;
    content_type_id?: Prisma.IntNullableFilter<"django_admin_log"> | number | null;
    user_id?: Prisma.IntFilter<"django_admin_log"> | number;
    django_content_type?: Prisma.XOR<Prisma.Django_content_typeNullableScalarRelationFilter, Prisma.django_content_typeWhereInput> | null;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
};
export type django_admin_logOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    action_time?: Prisma.SortOrder;
    object_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    object_repr?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    change_message?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    django_content_type?: Prisma.django_content_typeOrderByWithRelationInput;
    auth_user?: Prisma.auth_userOrderByWithRelationInput;
    _relevance?: Prisma.django_admin_logOrderByRelevanceInput;
};
export type django_admin_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.django_admin_logWhereInput | Prisma.django_admin_logWhereInput[];
    OR?: Prisma.django_admin_logWhereInput[];
    NOT?: Prisma.django_admin_logWhereInput | Prisma.django_admin_logWhereInput[];
    action_time?: Prisma.DateTimeFilter<"django_admin_log"> | Date | string;
    object_id?: Prisma.StringNullableFilter<"django_admin_log"> | string | null;
    object_repr?: Prisma.StringFilter<"django_admin_log"> | string;
    action_flag?: Prisma.IntFilter<"django_admin_log"> | number;
    change_message?: Prisma.StringFilter<"django_admin_log"> | string;
    content_type_id?: Prisma.IntNullableFilter<"django_admin_log"> | number | null;
    user_id?: Prisma.IntFilter<"django_admin_log"> | number;
    django_content_type?: Prisma.XOR<Prisma.Django_content_typeNullableScalarRelationFilter, Prisma.django_content_typeWhereInput> | null;
    auth_user?: Prisma.XOR<Prisma.Auth_userScalarRelationFilter, Prisma.auth_userWhereInput>;
}, "id">;
export type django_admin_logOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    action_time?: Prisma.SortOrder;
    object_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    object_repr?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    change_message?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    _count?: Prisma.django_admin_logCountOrderByAggregateInput;
    _avg?: Prisma.django_admin_logAvgOrderByAggregateInput;
    _max?: Prisma.django_admin_logMaxOrderByAggregateInput;
    _min?: Prisma.django_admin_logMinOrderByAggregateInput;
    _sum?: Prisma.django_admin_logSumOrderByAggregateInput;
};
export type django_admin_logScalarWhereWithAggregatesInput = {
    AND?: Prisma.django_admin_logScalarWhereWithAggregatesInput | Prisma.django_admin_logScalarWhereWithAggregatesInput[];
    OR?: Prisma.django_admin_logScalarWhereWithAggregatesInput[];
    NOT?: Prisma.django_admin_logScalarWhereWithAggregatesInput | Prisma.django_admin_logScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"django_admin_log"> | number;
    action_time?: Prisma.DateTimeWithAggregatesFilter<"django_admin_log"> | Date | string;
    object_id?: Prisma.StringNullableWithAggregatesFilter<"django_admin_log"> | string | null;
    object_repr?: Prisma.StringWithAggregatesFilter<"django_admin_log"> | string;
    action_flag?: Prisma.IntWithAggregatesFilter<"django_admin_log"> | number;
    change_message?: Prisma.StringWithAggregatesFilter<"django_admin_log"> | string;
    content_type_id?: Prisma.IntNullableWithAggregatesFilter<"django_admin_log"> | number | null;
    user_id?: Prisma.IntWithAggregatesFilter<"django_admin_log"> | number;
};
export type django_admin_logCreateInput = {
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    django_content_type?: Prisma.django_content_typeCreateNestedOneWithoutDjango_admin_logInput;
    auth_user: Prisma.auth_userCreateNestedOneWithoutDjango_admin_logInput;
};
export type django_admin_logUncheckedCreateInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    content_type_id?: number | null;
    user_id: number;
};
export type django_admin_logUpdateInput = {
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    django_content_type?: Prisma.django_content_typeUpdateOneWithoutDjango_admin_logNestedInput;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput;
};
export type django_admin_logUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type django_admin_logCreateManyInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    content_type_id?: number | null;
    user_id: number;
};
export type django_admin_logUpdateManyMutationInput = {
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type django_admin_logUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Django_admin_logListRelationFilter = {
    every?: Prisma.django_admin_logWhereInput;
    some?: Prisma.django_admin_logWhereInput;
    none?: Prisma.django_admin_logWhereInput;
};
export type django_admin_logOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type django_admin_logOrderByRelevanceInput = {
    fields: Prisma.django_admin_logOrderByRelevanceFieldEnum | Prisma.django_admin_logOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type django_admin_logCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action_time?: Prisma.SortOrder;
    object_id?: Prisma.SortOrder;
    object_repr?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    change_message?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type django_admin_logAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type django_admin_logMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action_time?: Prisma.SortOrder;
    object_id?: Prisma.SortOrder;
    object_repr?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    change_message?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type django_admin_logMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action_time?: Prisma.SortOrder;
    object_id?: Prisma.SortOrder;
    object_repr?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    change_message?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type django_admin_logSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    action_flag?: Prisma.SortOrder;
    content_type_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type django_admin_logCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput> | Prisma.django_admin_logCreateWithoutAuth_userInput[] | Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput | Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.django_admin_logCreateManyAuth_userInputEnvelope;
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
};
export type django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput> | Prisma.django_admin_logCreateWithoutAuth_userInput[] | Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput | Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.django_admin_logCreateManyAuth_userInputEnvelope;
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
};
export type django_admin_logUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput> | Prisma.django_admin_logCreateWithoutAuth_userInput[] | Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput | Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.django_admin_logCreateManyAuth_userInputEnvelope;
    set?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    disconnect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    delete?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    update?: Prisma.django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.django_admin_logUpdateManyWithWhereWithoutAuth_userInput | Prisma.django_admin_logUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
};
export type django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput> | Prisma.django_admin_logCreateWithoutAuth_userInput[] | Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput | Prisma.django_admin_logCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.django_admin_logCreateManyAuth_userInputEnvelope;
    set?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    disconnect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    delete?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    update?: Prisma.django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.django_admin_logUpdateManyWithWhereWithoutAuth_userInput | Prisma.django_admin_logUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type django_admin_logCreateNestedManyWithoutDjango_content_typeInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | Prisma.django_admin_logCreateWithoutDjango_content_typeInput[] | Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput | Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput[];
    createMany?: Prisma.django_admin_logCreateManyDjango_content_typeInputEnvelope;
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
};
export type django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | Prisma.django_admin_logCreateWithoutDjango_content_typeInput[] | Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput | Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput[];
    createMany?: Prisma.django_admin_logCreateManyDjango_content_typeInputEnvelope;
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
};
export type django_admin_logUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | Prisma.django_admin_logCreateWithoutDjango_content_typeInput[] | Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput | Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput[];
    upsert?: Prisma.django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput | Prisma.django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput[];
    createMany?: Prisma.django_admin_logCreateManyDjango_content_typeInputEnvelope;
    set?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    disconnect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    delete?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    update?: Prisma.django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput | Prisma.django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput[];
    updateMany?: Prisma.django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput | Prisma.django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput[];
    deleteMany?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
};
export type django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput> | Prisma.django_admin_logCreateWithoutDjango_content_typeInput[] | Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput[];
    connectOrCreate?: Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput | Prisma.django_admin_logCreateOrConnectWithoutDjango_content_typeInput[];
    upsert?: Prisma.django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput | Prisma.django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput[];
    createMany?: Prisma.django_admin_logCreateManyDjango_content_typeInputEnvelope;
    set?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    disconnect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    delete?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    connect?: Prisma.django_admin_logWhereUniqueInput | Prisma.django_admin_logWhereUniqueInput[];
    update?: Prisma.django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput | Prisma.django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput[];
    updateMany?: Prisma.django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput | Prisma.django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput[];
    deleteMany?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
};
export type django_admin_logCreateWithoutAuth_userInput = {
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    django_content_type?: Prisma.django_content_typeCreateNestedOneWithoutDjango_admin_logInput;
};
export type django_admin_logUncheckedCreateWithoutAuth_userInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    content_type_id?: number | null;
};
export type django_admin_logCreateOrConnectWithoutAuth_userInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput>;
};
export type django_admin_logCreateManyAuth_userInputEnvelope = {
    data: Prisma.django_admin_logCreateManyAuth_userInput | Prisma.django_admin_logCreateManyAuth_userInput[];
    skipDuplicates?: boolean;
};
export type django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.django_admin_logUpdateWithoutAuth_userInput, Prisma.django_admin_logUncheckedUpdateWithoutAuth_userInput>;
    create: Prisma.XOR<Prisma.django_admin_logCreateWithoutAuth_userInput, Prisma.django_admin_logUncheckedCreateWithoutAuth_userInput>;
};
export type django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.django_admin_logUpdateWithoutAuth_userInput, Prisma.django_admin_logUncheckedUpdateWithoutAuth_userInput>;
};
export type django_admin_logUpdateManyWithWhereWithoutAuth_userInput = {
    where: Prisma.django_admin_logScalarWhereInput;
    data: Prisma.XOR<Prisma.django_admin_logUpdateManyMutationInput, Prisma.django_admin_logUncheckedUpdateManyWithoutAuth_userInput>;
};
export type django_admin_logScalarWhereInput = {
    AND?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
    OR?: Prisma.django_admin_logScalarWhereInput[];
    NOT?: Prisma.django_admin_logScalarWhereInput | Prisma.django_admin_logScalarWhereInput[];
    id?: Prisma.IntFilter<"django_admin_log"> | number;
    action_time?: Prisma.DateTimeFilter<"django_admin_log"> | Date | string;
    object_id?: Prisma.StringNullableFilter<"django_admin_log"> | string | null;
    object_repr?: Prisma.StringFilter<"django_admin_log"> | string;
    action_flag?: Prisma.IntFilter<"django_admin_log"> | number;
    change_message?: Prisma.StringFilter<"django_admin_log"> | string;
    content_type_id?: Prisma.IntNullableFilter<"django_admin_log"> | number | null;
    user_id?: Prisma.IntFilter<"django_admin_log"> | number;
};
export type django_admin_logCreateWithoutDjango_content_typeInput = {
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    auth_user: Prisma.auth_userCreateNestedOneWithoutDjango_admin_logInput;
};
export type django_admin_logUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    user_id: number;
};
export type django_admin_logCreateOrConnectWithoutDjango_content_typeInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput>;
};
export type django_admin_logCreateManyDjango_content_typeInputEnvelope = {
    data: Prisma.django_admin_logCreateManyDjango_content_typeInput | Prisma.django_admin_logCreateManyDjango_content_typeInput[];
    skipDuplicates?: boolean;
};
export type django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.django_admin_logUpdateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>;
    create: Prisma.XOR<Prisma.django_admin_logCreateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedCreateWithoutDjango_content_typeInput>;
};
export type django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: Prisma.django_admin_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.django_admin_logUpdateWithoutDjango_content_typeInput, Prisma.django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>;
};
export type django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: Prisma.django_admin_logScalarWhereInput;
    data: Prisma.XOR<Prisma.django_admin_logUpdateManyMutationInput, Prisma.django_admin_logUncheckedUpdateManyWithoutDjango_content_typeInput>;
};
export type django_admin_logCreateManyAuth_userInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    content_type_id?: number | null;
};
export type django_admin_logUpdateWithoutAuth_userInput = {
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    django_content_type?: Prisma.django_content_typeUpdateOneWithoutDjango_admin_logNestedInput;
};
export type django_admin_logUncheckedUpdateWithoutAuth_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type django_admin_logUncheckedUpdateManyWithoutAuth_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    content_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type django_admin_logCreateManyDjango_content_typeInput = {
    id?: number;
    action_time: Date | string;
    object_id?: string | null;
    object_repr: string;
    action_flag: number;
    change_message: string;
    user_id: number;
};
export type django_admin_logUpdateWithoutDjango_content_typeInput = {
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user?: Prisma.auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput;
};
export type django_admin_logUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type django_admin_logUncheckedUpdateManyWithoutDjango_content_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    object_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    object_repr?: Prisma.StringFieldUpdateOperationsInput | string;
    action_flag?: Prisma.IntFieldUpdateOperationsInput | number;
    change_message?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type django_admin_logSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    action_time?: boolean;
    object_id?: boolean;
    object_repr?: boolean;
    action_flag?: boolean;
    change_message?: boolean;
    content_type_id?: boolean;
    user_id?: boolean;
    django_content_type?: boolean | Prisma.django_admin_log$django_content_typeArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["django_admin_log"]>;
export type django_admin_logSelectScalar = {
    id?: boolean;
    action_time?: boolean;
    object_id?: boolean;
    object_repr?: boolean;
    action_flag?: boolean;
    change_message?: boolean;
    content_type_id?: boolean;
    user_id?: boolean;
};
export type django_admin_logOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "action_time" | "object_id" | "object_repr" | "action_flag" | "change_message" | "content_type_id" | "user_id", ExtArgs["result"]["django_admin_log"]>;
export type django_admin_logInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    django_content_type?: boolean | Prisma.django_admin_log$django_content_typeArgs<ExtArgs>;
    auth_user?: boolean | Prisma.auth_userDefaultArgs<ExtArgs>;
};
export type $django_admin_logPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "django_admin_log";
    objects: {
        django_content_type: Prisma.$django_content_typePayload<ExtArgs> | null;
        auth_user: Prisma.$auth_userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        action_time: Date;
        object_id: string | null;
        object_repr: string;
        action_flag: number;
        change_message: string;
        content_type_id: number | null;
        user_id: number;
    }, ExtArgs["result"]["django_admin_log"]>;
    composites: {};
};
export type django_admin_logGetPayload<S extends boolean | null | undefined | django_admin_logDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload, S>;
export type django_admin_logCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<django_admin_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Django_admin_logCountAggregateInputType | true;
};
export interface django_admin_logDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['django_admin_log'];
        meta: {
            name: 'django_admin_log';
        };
    };
    findUnique<T extends django_admin_logFindUniqueArgs>(args: Prisma.SelectSubset<T, django_admin_logFindUniqueArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends django_admin_logFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, django_admin_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends django_admin_logFindFirstArgs>(args?: Prisma.SelectSubset<T, django_admin_logFindFirstArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends django_admin_logFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, django_admin_logFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends django_admin_logFindManyArgs>(args?: Prisma.SelectSubset<T, django_admin_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends django_admin_logCreateArgs>(args: Prisma.SelectSubset<T, django_admin_logCreateArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends django_admin_logCreateManyArgs>(args?: Prisma.SelectSubset<T, django_admin_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends django_admin_logDeleteArgs>(args: Prisma.SelectSubset<T, django_admin_logDeleteArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends django_admin_logUpdateArgs>(args: Prisma.SelectSubset<T, django_admin_logUpdateArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends django_admin_logDeleteManyArgs>(args?: Prisma.SelectSubset<T, django_admin_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends django_admin_logUpdateManyArgs>(args: Prisma.SelectSubset<T, django_admin_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends django_admin_logUpsertArgs>(args: Prisma.SelectSubset<T, django_admin_logUpsertArgs<ExtArgs>>): Prisma.Prisma__django_admin_logClient<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends django_admin_logCountArgs>(args?: Prisma.Subset<T, django_admin_logCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Django_admin_logCountAggregateOutputType> : number>;
    aggregate<T extends Django_admin_logAggregateArgs>(args: Prisma.Subset<T, Django_admin_logAggregateArgs>): Prisma.PrismaPromise<GetDjango_admin_logAggregateType<T>>;
    groupBy<T extends django_admin_logGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: django_admin_logGroupByArgs['orderBy'];
    } : {
        orderBy?: django_admin_logGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, django_admin_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_admin_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: django_admin_logFieldRefs;
}
export interface Prisma__django_admin_logClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    django_content_type<T extends Prisma.django_admin_log$django_content_typeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.django_admin_log$django_content_typeArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    auth_user<T extends Prisma.auth_userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_userDefaultArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface django_admin_logFieldRefs {
    readonly id: Prisma.FieldRef<"django_admin_log", 'Int'>;
    readonly action_time: Prisma.FieldRef<"django_admin_log", 'DateTime'>;
    readonly object_id: Prisma.FieldRef<"django_admin_log", 'String'>;
    readonly object_repr: Prisma.FieldRef<"django_admin_log", 'String'>;
    readonly action_flag: Prisma.FieldRef<"django_admin_log", 'Int'>;
    readonly change_message: Prisma.FieldRef<"django_admin_log", 'String'>;
    readonly content_type_id: Prisma.FieldRef<"django_admin_log", 'Int'>;
    readonly user_id: Prisma.FieldRef<"django_admin_log", 'Int'>;
}
export type django_admin_logFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where: Prisma.django_admin_logWhereUniqueInput;
};
export type django_admin_logFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where: Prisma.django_admin_logWhereUniqueInput;
};
export type django_admin_logFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where?: Prisma.django_admin_logWhereInput;
    orderBy?: Prisma.django_admin_logOrderByWithRelationInput | Prisma.django_admin_logOrderByWithRelationInput[];
    cursor?: Prisma.django_admin_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_admin_logScalarFieldEnum | Prisma.Django_admin_logScalarFieldEnum[];
};
export type django_admin_logFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where?: Prisma.django_admin_logWhereInput;
    orderBy?: Prisma.django_admin_logOrderByWithRelationInput | Prisma.django_admin_logOrderByWithRelationInput[];
    cursor?: Prisma.django_admin_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_admin_logScalarFieldEnum | Prisma.Django_admin_logScalarFieldEnum[];
};
export type django_admin_logFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where?: Prisma.django_admin_logWhereInput;
    orderBy?: Prisma.django_admin_logOrderByWithRelationInput | Prisma.django_admin_logOrderByWithRelationInput[];
    cursor?: Prisma.django_admin_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_admin_logScalarFieldEnum | Prisma.Django_admin_logScalarFieldEnum[];
};
export type django_admin_logCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_admin_logCreateInput, Prisma.django_admin_logUncheckedCreateInput>;
};
export type django_admin_logCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.django_admin_logCreateManyInput | Prisma.django_admin_logCreateManyInput[];
    skipDuplicates?: boolean;
};
export type django_admin_logUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_admin_logUpdateInput, Prisma.django_admin_logUncheckedUpdateInput>;
    where: Prisma.django_admin_logWhereUniqueInput;
};
export type django_admin_logUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.django_admin_logUpdateManyMutationInput, Prisma.django_admin_logUncheckedUpdateManyInput>;
    where?: Prisma.django_admin_logWhereInput;
    limit?: number;
};
export type django_admin_logUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where: Prisma.django_admin_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_admin_logCreateInput, Prisma.django_admin_logUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.django_admin_logUpdateInput, Prisma.django_admin_logUncheckedUpdateInput>;
};
export type django_admin_logDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
    where: Prisma.django_admin_logWhereUniqueInput;
};
export type django_admin_logDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_admin_logWhereInput;
    limit?: number;
};
export type django_admin_log$django_content_typeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where?: Prisma.django_content_typeWhereInput;
};
export type django_admin_logDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_admin_logSelect<ExtArgs> | null;
    omit?: Prisma.django_admin_logOmit<ExtArgs> | null;
    include?: Prisma.django_admin_logInclude<ExtArgs> | null;
};
