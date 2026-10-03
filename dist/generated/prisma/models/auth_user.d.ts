import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type auth_userModel = runtime.Types.Result.DefaultSelection<Prisma.$auth_userPayload>;
export type AggregateAuth_user = {
    _count: Auth_userCountAggregateOutputType | null;
    _avg: Auth_userAvgAggregateOutputType | null;
    _sum: Auth_userSumAggregateOutputType | null;
    _min: Auth_userMinAggregateOutputType | null;
    _max: Auth_userMaxAggregateOutputType | null;
};
export type Auth_userAvgAggregateOutputType = {
    id: number | null;
};
export type Auth_userSumAggregateOutputType = {
    id: number | null;
};
export type Auth_userMinAggregateOutputType = {
    id: number | null;
    password: string | null;
    last_login: Date | null;
    is_superuser: boolean | null;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    is_staff: boolean | null;
    is_active: boolean | null;
    date_joined: Date | null;
};
export type Auth_userMaxAggregateOutputType = {
    id: number | null;
    password: string | null;
    last_login: Date | null;
    is_superuser: boolean | null;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    is_staff: boolean | null;
    is_active: boolean | null;
    date_joined: Date | null;
};
export type Auth_userCountAggregateOutputType = {
    id: number;
    password: number;
    last_login: number;
    is_superuser: number;
    username: number;
    first_name: number;
    last_name: number;
    email: number;
    is_staff: number;
    is_active: number;
    date_joined: number;
    _all: number;
};
export type Auth_userAvgAggregateInputType = {
    id?: true;
};
export type Auth_userSumAggregateInputType = {
    id?: true;
};
export type Auth_userMinAggregateInputType = {
    id?: true;
    password?: true;
    last_login?: true;
    is_superuser?: true;
    username?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    is_staff?: true;
    is_active?: true;
    date_joined?: true;
};
export type Auth_userMaxAggregateInputType = {
    id?: true;
    password?: true;
    last_login?: true;
    is_superuser?: true;
    username?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    is_staff?: true;
    is_active?: true;
    date_joined?: true;
};
export type Auth_userCountAggregateInputType = {
    id?: true;
    password?: true;
    last_login?: true;
    is_superuser?: true;
    username?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    is_staff?: true;
    is_active?: true;
    date_joined?: true;
    _all?: true;
};
export type Auth_userAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_userWhereInput;
    orderBy?: Prisma.auth_userOrderByWithRelationInput | Prisma.auth_userOrderByWithRelationInput[];
    cursor?: Prisma.auth_userWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Auth_userCountAggregateInputType;
    _avg?: Auth_userAvgAggregateInputType;
    _sum?: Auth_userSumAggregateInputType;
    _min?: Auth_userMinAggregateInputType;
    _max?: Auth_userMaxAggregateInputType;
};
export type GetAuth_userAggregateType<T extends Auth_userAggregateArgs> = {
    [P in keyof T & keyof AggregateAuth_user]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuth_user[P]> : Prisma.GetScalarType<T[P], AggregateAuth_user[P]>;
};
export type auth_userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_userWhereInput;
    orderBy?: Prisma.auth_userOrderByWithAggregationInput | Prisma.auth_userOrderByWithAggregationInput[];
    by: Prisma.Auth_userScalarFieldEnum[] | Prisma.Auth_userScalarFieldEnum;
    having?: Prisma.auth_userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Auth_userCountAggregateInputType | true;
    _avg?: Auth_userAvgAggregateInputType;
    _sum?: Auth_userSumAggregateInputType;
    _min?: Auth_userMinAggregateInputType;
    _max?: Auth_userMaxAggregateInputType;
};
export type Auth_userGroupByOutputType = {
    id: number;
    password: string;
    last_login: Date | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    _count: Auth_userCountAggregateOutputType | null;
    _avg: Auth_userAvgAggregateOutputType | null;
    _sum: Auth_userSumAggregateOutputType | null;
    _min: Auth_userMinAggregateOutputType | null;
    _max: Auth_userMaxAggregateOutputType | null;
};
export type GetAuth_userGroupByPayload<T extends auth_userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Auth_userGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Auth_userGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Auth_userGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Auth_userGroupByOutputType[P]>;
}>>;
export type auth_userWhereInput = {
    AND?: Prisma.auth_userWhereInput | Prisma.auth_userWhereInput[];
    OR?: Prisma.auth_userWhereInput[];
    NOT?: Prisma.auth_userWhereInput | Prisma.auth_userWhereInput[];
    id?: Prisma.IntFilter<"auth_user"> | number;
    password?: Prisma.StringFilter<"auth_user"> | string;
    last_login?: Prisma.DateTimeNullableFilter<"auth_user"> | Date | string | null;
    is_superuser?: Prisma.BoolFilter<"auth_user"> | boolean;
    username?: Prisma.StringFilter<"auth_user"> | string;
    first_name?: Prisma.StringFilter<"auth_user"> | string;
    last_name?: Prisma.StringFilter<"auth_user"> | string;
    email?: Prisma.StringFilter<"auth_user"> | string;
    is_staff?: Prisma.BoolFilter<"auth_user"> | boolean;
    is_active?: Prisma.BoolFilter<"auth_user"> | boolean;
    date_joined?: Prisma.DateTimeFilter<"auth_user"> | Date | string;
    auth_user_groups?: Prisma.Auth_user_groupsListRelationFilter;
    auth_user_user_permissions?: Prisma.Auth_user_user_permissionsListRelationFilter;
    django_admin_log?: Prisma.Django_admin_logListRelationFilter;
};
export type auth_userOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_login?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_superuser?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    is_staff?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    date_joined?: Prisma.SortOrder;
    auth_user_groups?: Prisma.auth_user_groupsOrderByRelationAggregateInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsOrderByRelationAggregateInput;
    django_admin_log?: Prisma.django_admin_logOrderByRelationAggregateInput;
    _relevance?: Prisma.auth_userOrderByRelevanceInput;
};
export type auth_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    AND?: Prisma.auth_userWhereInput | Prisma.auth_userWhereInput[];
    OR?: Prisma.auth_userWhereInput[];
    NOT?: Prisma.auth_userWhereInput | Prisma.auth_userWhereInput[];
    password?: Prisma.StringFilter<"auth_user"> | string;
    last_login?: Prisma.DateTimeNullableFilter<"auth_user"> | Date | string | null;
    is_superuser?: Prisma.BoolFilter<"auth_user"> | boolean;
    first_name?: Prisma.StringFilter<"auth_user"> | string;
    last_name?: Prisma.StringFilter<"auth_user"> | string;
    email?: Prisma.StringFilter<"auth_user"> | string;
    is_staff?: Prisma.BoolFilter<"auth_user"> | boolean;
    is_active?: Prisma.BoolFilter<"auth_user"> | boolean;
    date_joined?: Prisma.DateTimeFilter<"auth_user"> | Date | string;
    auth_user_groups?: Prisma.Auth_user_groupsListRelationFilter;
    auth_user_user_permissions?: Prisma.Auth_user_user_permissionsListRelationFilter;
    django_admin_log?: Prisma.Django_admin_logListRelationFilter;
}, "id" | "username">;
export type auth_userOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_login?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_superuser?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    is_staff?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    date_joined?: Prisma.SortOrder;
    _count?: Prisma.auth_userCountOrderByAggregateInput;
    _avg?: Prisma.auth_userAvgOrderByAggregateInput;
    _max?: Prisma.auth_userMaxOrderByAggregateInput;
    _min?: Prisma.auth_userMinOrderByAggregateInput;
    _sum?: Prisma.auth_userSumOrderByAggregateInput;
};
export type auth_userScalarWhereWithAggregatesInput = {
    AND?: Prisma.auth_userScalarWhereWithAggregatesInput | Prisma.auth_userScalarWhereWithAggregatesInput[];
    OR?: Prisma.auth_userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.auth_userScalarWhereWithAggregatesInput | Prisma.auth_userScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"auth_user"> | number;
    password?: Prisma.StringWithAggregatesFilter<"auth_user"> | string;
    last_login?: Prisma.DateTimeNullableWithAggregatesFilter<"auth_user"> | Date | string | null;
    is_superuser?: Prisma.BoolWithAggregatesFilter<"auth_user"> | boolean;
    username?: Prisma.StringWithAggregatesFilter<"auth_user"> | string;
    first_name?: Prisma.StringWithAggregatesFilter<"auth_user"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"auth_user"> | string;
    email?: Prisma.StringWithAggregatesFilter<"auth_user"> | string;
    is_staff?: Prisma.BoolWithAggregatesFilter<"auth_user"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"auth_user"> | boolean;
    date_joined?: Prisma.DateTimeWithAggregatesFilter<"auth_user"> | Date | string;
};
export type auth_userCreateInput = {
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsCreateNestedManyWithoutAuth_userInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logCreateNestedManyWithoutAuth_userInput;
};
export type auth_userUncheckedCreateInput = {
    id?: number;
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput;
};
export type auth_userUpdateInput = {
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUpdateManyWithoutAuth_userNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userCreateManyInput = {
    id?: number;
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
};
export type auth_userUpdateManyMutationInput = {
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type auth_userUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type auth_userOrderByRelevanceInput = {
    fields: Prisma.auth_userOrderByRelevanceFieldEnum | Prisma.auth_userOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type auth_userCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_login?: Prisma.SortOrder;
    is_superuser?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    is_staff?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    date_joined?: Prisma.SortOrder;
};
export type auth_userAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type auth_userMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_login?: Prisma.SortOrder;
    is_superuser?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    is_staff?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    date_joined?: Prisma.SortOrder;
};
export type auth_userMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    last_login?: Prisma.SortOrder;
    is_superuser?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    is_staff?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    date_joined?: Prisma.SortOrder;
};
export type auth_userSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Auth_userScalarRelationFilter = {
    is?: Prisma.auth_userWhereInput;
    isNot?: Prisma.auth_userWhereInput;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type auth_userCreateNestedOneWithoutAuth_user_groupsInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_groupsInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutAuth_user_groupsInput;
    connect?: Prisma.auth_userWhereUniqueInput;
};
export type auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_groupsInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutAuth_user_groupsInput;
    upsert?: Prisma.auth_userUpsertWithoutAuth_user_groupsInput;
    connect?: Prisma.auth_userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.auth_userUpdateToOneWithWhereWithoutAuth_user_groupsInput, Prisma.auth_userUpdateWithoutAuth_user_groupsInput>, Prisma.auth_userUncheckedUpdateWithoutAuth_user_groupsInput>;
};
export type auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput;
    connect?: Prisma.auth_userWhereUniqueInput;
};
export type auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput;
    upsert?: Prisma.auth_userUpsertWithoutAuth_user_user_permissionsInput;
    connect?: Prisma.auth_userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.auth_userUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput, Prisma.auth_userUpdateWithoutAuth_user_user_permissionsInput>, Prisma.auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
};
export type auth_userCreateNestedOneWithoutDjango_admin_logInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedCreateWithoutDjango_admin_logInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutDjango_admin_logInput;
    connect?: Prisma.auth_userWhereUniqueInput;
};
export type auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput = {
    create?: Prisma.XOR<Prisma.auth_userCreateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedCreateWithoutDjango_admin_logInput>;
    connectOrCreate?: Prisma.auth_userCreateOrConnectWithoutDjango_admin_logInput;
    upsert?: Prisma.auth_userUpsertWithoutDjango_admin_logInput;
    connect?: Prisma.auth_userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.auth_userUpdateToOneWithWhereWithoutDjango_admin_logInput, Prisma.auth_userUpdateWithoutDjango_admin_logInput>, Prisma.auth_userUncheckedUpdateWithoutDjango_admin_logInput>;
};
export type auth_userCreateWithoutAuth_user_groupsInput = {
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logCreateNestedManyWithoutAuth_userInput;
};
export type auth_userUncheckedCreateWithoutAuth_user_groupsInput = {
    id?: number;
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput;
};
export type auth_userCreateOrConnectWithoutAuth_user_groupsInput = {
    where: Prisma.auth_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_groupsInput>;
};
export type auth_userUpsertWithoutAuth_user_groupsInput = {
    update: Prisma.XOR<Prisma.auth_userUpdateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedUpdateWithoutAuth_user_groupsInput>;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_groupsInput>;
    where?: Prisma.auth_userWhereInput;
};
export type auth_userUpdateToOneWithWhereWithoutAuth_user_groupsInput = {
    where?: Prisma.auth_userWhereInput;
    data: Prisma.XOR<Prisma.auth_userUpdateWithoutAuth_user_groupsInput, Prisma.auth_userUncheckedUpdateWithoutAuth_user_groupsInput>;
};
export type auth_userUpdateWithoutAuth_user_groupsInput = {
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userUncheckedUpdateWithoutAuth_user_groupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userCreateWithoutAuth_user_user_permissionsInput = {
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logCreateNestedManyWithoutAuth_userInput;
};
export type auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number;
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput;
    django_admin_log?: Prisma.django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput;
};
export type auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: Prisma.auth_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>;
};
export type auth_userUpsertWithoutAuth_user_user_permissionsInput = {
    update: Prisma.XOR<Prisma.auth_userUpdateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>;
    where?: Prisma.auth_userWhereInput;
};
export type auth_userUpdateToOneWithWhereWithoutAuth_user_user_permissionsInput = {
    where?: Prisma.auth_userWhereInput;
    data: Prisma.XOR<Prisma.auth_userUpdateWithoutAuth_user_user_permissionsInput, Prisma.auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>;
};
export type auth_userUpdateWithoutAuth_user_user_permissionsInput = {
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput;
    django_admin_log?: Prisma.django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userCreateWithoutDjango_admin_logInput = {
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsCreateNestedManyWithoutAuth_userInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput;
};
export type auth_userUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number;
    password: string;
    last_login?: Date | string | null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput;
};
export type auth_userCreateOrConnectWithoutDjango_admin_logInput = {
    where: Prisma.auth_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedCreateWithoutDjango_admin_logInput>;
};
export type auth_userUpsertWithoutDjango_admin_logInput = {
    update: Prisma.XOR<Prisma.auth_userUpdateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedUpdateWithoutDjango_admin_logInput>;
    create: Prisma.XOR<Prisma.auth_userCreateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedCreateWithoutDjango_admin_logInput>;
    where?: Prisma.auth_userWhereInput;
};
export type auth_userUpdateToOneWithWhereWithoutDjango_admin_logInput = {
    where?: Prisma.auth_userWhereInput;
    data: Prisma.XOR<Prisma.auth_userUpdateWithoutDjango_admin_logInput, Prisma.auth_userUncheckedUpdateWithoutDjango_admin_logInput>;
};
export type auth_userUpdateWithoutDjango_admin_logInput = {
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUpdateManyWithoutAuth_userNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput;
};
export type auth_userUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    last_login?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_superuser?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    is_staff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    date_joined?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auth_user_groups?: Prisma.auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput;
    auth_user_user_permissions?: Prisma.auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput;
};
export type Auth_userCountOutputType = {
    auth_user_groups: number;
    auth_user_user_permissions: number;
    django_admin_log: number;
};
export type Auth_userCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user_groups?: boolean | Auth_userCountOutputTypeCountAuth_user_groupsArgs;
    auth_user_user_permissions?: boolean | Auth_userCountOutputTypeCountAuth_user_user_permissionsArgs;
    django_admin_log?: boolean | Auth_userCountOutputTypeCountDjango_admin_logArgs;
};
export type Auth_userCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Auth_userCountOutputTypeSelect<ExtArgs> | null;
};
export type Auth_userCountOutputTypeCountAuth_user_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_groupsWhereInput;
};
export type Auth_userCountOutputTypeCountAuth_user_user_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_user_user_permissionsWhereInput;
};
export type Auth_userCountOutputTypeCountDjango_admin_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_admin_logWhereInput;
};
export type auth_userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    password?: boolean;
    last_login?: boolean;
    is_superuser?: boolean;
    username?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
    date_joined?: boolean;
    auth_user_groups?: boolean | Prisma.auth_user$auth_user_groupsArgs<ExtArgs>;
    auth_user_user_permissions?: boolean | Prisma.auth_user$auth_user_user_permissionsArgs<ExtArgs>;
    django_admin_log?: boolean | Prisma.auth_user$django_admin_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Auth_userCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auth_user"]>;
export type auth_userSelectScalar = {
    id?: boolean;
    password?: boolean;
    last_login?: boolean;
    is_superuser?: boolean;
    username?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
    date_joined?: boolean;
};
export type auth_userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "password" | "last_login" | "is_superuser" | "username" | "first_name" | "last_name" | "email" | "is_staff" | "is_active" | "date_joined", ExtArgs["result"]["auth_user"]>;
export type auth_userInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user_groups?: boolean | Prisma.auth_user$auth_user_groupsArgs<ExtArgs>;
    auth_user_user_permissions?: boolean | Prisma.auth_user$auth_user_user_permissionsArgs<ExtArgs>;
    django_admin_log?: boolean | Prisma.auth_user$django_admin_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Auth_userCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $auth_userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "auth_user";
    objects: {
        auth_user_groups: Prisma.$auth_user_groupsPayload<ExtArgs>[];
        auth_user_user_permissions: Prisma.$auth_user_user_permissionsPayload<ExtArgs>[];
        django_admin_log: Prisma.$django_admin_logPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        password: string;
        last_login: Date | null;
        is_superuser: boolean;
        username: string;
        first_name: string;
        last_name: string;
        email: string;
        is_staff: boolean;
        is_active: boolean;
        date_joined: Date;
    }, ExtArgs["result"]["auth_user"]>;
    composites: {};
};
export type auth_userGetPayload<S extends boolean | null | undefined | auth_userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$auth_userPayload, S>;
export type auth_userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<auth_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Auth_userCountAggregateInputType | true;
};
export interface auth_userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['auth_user'];
        meta: {
            name: 'auth_user';
        };
    };
    findUnique<T extends auth_userFindUniqueArgs>(args: Prisma.SelectSubset<T, auth_userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends auth_userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, auth_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends auth_userFindFirstArgs>(args?: Prisma.SelectSubset<T, auth_userFindFirstArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends auth_userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, auth_userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends auth_userFindManyArgs>(args?: Prisma.SelectSubset<T, auth_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends auth_userCreateArgs>(args: Prisma.SelectSubset<T, auth_userCreateArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends auth_userCreateManyArgs>(args?: Prisma.SelectSubset<T, auth_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends auth_userDeleteArgs>(args: Prisma.SelectSubset<T, auth_userDeleteArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends auth_userUpdateArgs>(args: Prisma.SelectSubset<T, auth_userUpdateArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends auth_userDeleteManyArgs>(args?: Prisma.SelectSubset<T, auth_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends auth_userUpdateManyArgs>(args: Prisma.SelectSubset<T, auth_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends auth_userUpsertArgs>(args: Prisma.SelectSubset<T, auth_userUpsertArgs<ExtArgs>>): Prisma.Prisma__auth_userClient<runtime.Types.Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends auth_userCountArgs>(args?: Prisma.Subset<T, auth_userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Auth_userCountAggregateOutputType> : number>;
    aggregate<T extends Auth_userAggregateArgs>(args: Prisma.Subset<T, Auth_userAggregateArgs>): Prisma.PrismaPromise<GetAuth_userAggregateType<T>>;
    groupBy<T extends auth_userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: auth_userGroupByArgs['orderBy'];
    } : {
        orderBy?: auth_userGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, auth_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: auth_userFieldRefs;
}
export interface Prisma__auth_userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_user_groups<T extends Prisma.auth_user$auth_user_groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_user$auth_user_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_user_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auth_user_user_permissions<T extends Prisma.auth_user$auth_user_user_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_user$auth_user_user_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_user_user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    django_admin_log<T extends Prisma.auth_user$django_admin_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.auth_user$django_admin_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface auth_userFieldRefs {
    readonly id: Prisma.FieldRef<"auth_user", 'Int'>;
    readonly password: Prisma.FieldRef<"auth_user", 'String'>;
    readonly last_login: Prisma.FieldRef<"auth_user", 'DateTime'>;
    readonly is_superuser: Prisma.FieldRef<"auth_user", 'Boolean'>;
    readonly username: Prisma.FieldRef<"auth_user", 'String'>;
    readonly first_name: Prisma.FieldRef<"auth_user", 'String'>;
    readonly last_name: Prisma.FieldRef<"auth_user", 'String'>;
    readonly email: Prisma.FieldRef<"auth_user", 'String'>;
    readonly is_staff: Prisma.FieldRef<"auth_user", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"auth_user", 'Boolean'>;
    readonly date_joined: Prisma.FieldRef<"auth_user", 'DateTime'>;
}
export type auth_userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where: Prisma.auth_userWhereUniqueInput;
};
export type auth_userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where: Prisma.auth_userWhereUniqueInput;
};
export type auth_userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where?: Prisma.auth_userWhereInput;
    orderBy?: Prisma.auth_userOrderByWithRelationInput | Prisma.auth_userOrderByWithRelationInput[];
    cursor?: Prisma.auth_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_userScalarFieldEnum | Prisma.Auth_userScalarFieldEnum[];
};
export type auth_userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where?: Prisma.auth_userWhereInput;
    orderBy?: Prisma.auth_userOrderByWithRelationInput | Prisma.auth_userOrderByWithRelationInput[];
    cursor?: Prisma.auth_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_userScalarFieldEnum | Prisma.Auth_userScalarFieldEnum[];
};
export type auth_userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where?: Prisma.auth_userWhereInput;
    orderBy?: Prisma.auth_userOrderByWithRelationInput | Prisma.auth_userOrderByWithRelationInput[];
    cursor?: Prisma.auth_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Auth_userScalarFieldEnum | Prisma.Auth_userScalarFieldEnum[];
};
export type auth_userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_userCreateInput, Prisma.auth_userUncheckedCreateInput>;
};
export type auth_userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.auth_userCreateManyInput | Prisma.auth_userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type auth_userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.auth_userUpdateInput, Prisma.auth_userUncheckedUpdateInput>;
    where: Prisma.auth_userWhereUniqueInput;
};
export type auth_userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.auth_userUpdateManyMutationInput, Prisma.auth_userUncheckedUpdateManyInput>;
    where?: Prisma.auth_userWhereInput;
    limit?: number;
};
export type auth_userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where: Prisma.auth_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.auth_userCreateInput, Prisma.auth_userUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.auth_userUpdateInput, Prisma.auth_userUncheckedUpdateInput>;
};
export type auth_userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
    where: Prisma.auth_userWhereUniqueInput;
};
export type auth_userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_userWhereInput;
    limit?: number;
};
export type auth_user$auth_user_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type auth_user$auth_user_user_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type auth_user$django_admin_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type auth_userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.auth_userSelect<ExtArgs> | null;
    omit?: Prisma.auth_userOmit<ExtArgs> | null;
    include?: Prisma.auth_userInclude<ExtArgs> | null;
};
