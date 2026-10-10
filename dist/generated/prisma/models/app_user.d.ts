import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type app_userModel = runtime.Types.Result.DefaultSelection<Prisma.$app_userPayload>;
export type AggregateApp_user = {
    _count: App_userCountAggregateOutputType | null;
    _avg: App_userAvgAggregateOutputType | null;
    _sum: App_userSumAggregateOutputType | null;
    _min: App_userMinAggregateOutputType | null;
    _max: App_userMaxAggregateOutputType | null;
};
export type App_userAvgAggregateOutputType = {
    id: number | null;
};
export type App_userSumAggregateOutputType = {
    id: number | null;
};
export type App_userMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type App_userMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type App_userCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    firstName: number;
    lastName: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type App_userAvgAggregateInputType = {
    id?: true;
};
export type App_userSumAggregateInputType = {
    id?: true;
};
export type App_userMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type App_userMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type App_userCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type App_userAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_userWhereInput;
    orderBy?: Prisma.app_userOrderByWithRelationInput | Prisma.app_userOrderByWithRelationInput[];
    cursor?: Prisma.app_userWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | App_userCountAggregateInputType;
    _avg?: App_userAvgAggregateInputType;
    _sum?: App_userSumAggregateInputType;
    _min?: App_userMinAggregateInputType;
    _max?: App_userMaxAggregateInputType;
};
export type GetApp_userAggregateType<T extends App_userAggregateArgs> = {
    [P in keyof T & keyof AggregateApp_user]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApp_user[P]> : Prisma.GetScalarType<T[P], AggregateApp_user[P]>;
};
export type app_userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_userWhereInput;
    orderBy?: Prisma.app_userOrderByWithAggregationInput | Prisma.app_userOrderByWithAggregationInput[];
    by: Prisma.App_userScalarFieldEnum[] | Prisma.App_userScalarFieldEnum;
    having?: Prisma.app_userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: App_userCountAggregateInputType | true;
    _avg?: App_userAvgAggregateInputType;
    _sum?: App_userSumAggregateInputType;
    _min?: App_userMinAggregateInputType;
    _max?: App_userMaxAggregateInputType;
};
export type App_userGroupByOutputType = {
    id: number;
    username: string;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: App_userCountAggregateOutputType | null;
    _avg: App_userAvgAggregateOutputType | null;
    _sum: App_userSumAggregateOutputType | null;
    _min: App_userMinAggregateOutputType | null;
    _max: App_userMaxAggregateOutputType | null;
};
export type GetApp_userGroupByPayload<T extends app_userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<App_userGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof App_userGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], App_userGroupByOutputType[P]> : Prisma.GetScalarType<T[P], App_userGroupByOutputType[P]>;
}>>;
export type app_userWhereInput = {
    AND?: Prisma.app_userWhereInput | Prisma.app_userWhereInput[];
    OR?: Prisma.app_userWhereInput[];
    NOT?: Prisma.app_userWhereInput | Prisma.app_userWhereInput[];
    id?: Prisma.IntFilter<"app_user"> | number;
    username?: Prisma.StringFilter<"app_user"> | string;
    email?: Prisma.StringNullableFilter<"app_user"> | string | null;
    firstName?: Prisma.StringNullableFilter<"app_user"> | string | null;
    lastName?: Prisma.StringNullableFilter<"app_user"> | string | null;
    isActive?: Prisma.BoolFilter<"app_user"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"app_user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"app_user"> | Date | string;
};
export type app_userOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.app_userOrderByRelevanceInput;
};
export type app_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    AND?: Prisma.app_userWhereInput | Prisma.app_userWhereInput[];
    OR?: Prisma.app_userWhereInput[];
    NOT?: Prisma.app_userWhereInput | Prisma.app_userWhereInput[];
    email?: Prisma.StringNullableFilter<"app_user"> | string | null;
    firstName?: Prisma.StringNullableFilter<"app_user"> | string | null;
    lastName?: Prisma.StringNullableFilter<"app_user"> | string | null;
    isActive?: Prisma.BoolFilter<"app_user"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"app_user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"app_user"> | Date | string;
}, "id" | "username">;
export type app_userOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.app_userCountOrderByAggregateInput;
    _avg?: Prisma.app_userAvgOrderByAggregateInput;
    _max?: Prisma.app_userMaxOrderByAggregateInput;
    _min?: Prisma.app_userMinOrderByAggregateInput;
    _sum?: Prisma.app_userSumOrderByAggregateInput;
};
export type app_userScalarWhereWithAggregatesInput = {
    AND?: Prisma.app_userScalarWhereWithAggregatesInput | Prisma.app_userScalarWhereWithAggregatesInput[];
    OR?: Prisma.app_userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.app_userScalarWhereWithAggregatesInput | Prisma.app_userScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"app_user"> | number;
    username?: Prisma.StringWithAggregatesFilter<"app_user"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"app_user"> | string | null;
    firstName?: Prisma.StringNullableWithAggregatesFilter<"app_user"> | string | null;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"app_user"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"app_user"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"app_user"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"app_user"> | Date | string;
};
export type app_userCreateInput = {
    username: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type app_userUncheckedCreateInput = {
    id?: number;
    username: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type app_userUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type app_userUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type app_userCreateManyInput = {
    id?: number;
    username: string;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type app_userUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type app_userUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type app_userOrderByRelevanceInput = {
    fields: Prisma.app_userOrderByRelevanceFieldEnum | Prisma.app_userOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type app_userCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type app_userAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type app_userMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type app_userMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type app_userSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type app_userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["app_user"]>;
export type app_userSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type app_userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "email" | "firstName" | "lastName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["app_user"]>;
export type $app_userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "app_user";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        email: string | null;
        firstName: string | null;
        lastName: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["app_user"]>;
    composites: {};
};
export type app_userGetPayload<S extends boolean | null | undefined | app_userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$app_userPayload, S>;
export type app_userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<app_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: App_userCountAggregateInputType | true;
};
export interface app_userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['app_user'];
        meta: {
            name: 'app_user';
        };
    };
    findUnique<T extends app_userFindUniqueArgs>(args: Prisma.SelectSubset<T, app_userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends app_userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, app_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends app_userFindFirstArgs>(args?: Prisma.SelectSubset<T, app_userFindFirstArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends app_userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, app_userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends app_userFindManyArgs>(args?: Prisma.SelectSubset<T, app_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends app_userCreateArgs>(args: Prisma.SelectSubset<T, app_userCreateArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends app_userCreateManyArgs>(args?: Prisma.SelectSubset<T, app_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends app_userDeleteArgs>(args: Prisma.SelectSubset<T, app_userDeleteArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends app_userUpdateArgs>(args: Prisma.SelectSubset<T, app_userUpdateArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends app_userDeleteManyArgs>(args?: Prisma.SelectSubset<T, app_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends app_userUpdateManyArgs>(args: Prisma.SelectSubset<T, app_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends app_userUpsertArgs>(args: Prisma.SelectSubset<T, app_userUpsertArgs<ExtArgs>>): Prisma.Prisma__app_userClient<runtime.Types.Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends app_userCountArgs>(args?: Prisma.Subset<T, app_userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], App_userCountAggregateOutputType> : number>;
    aggregate<T extends App_userAggregateArgs>(args: Prisma.Subset<T, App_userAggregateArgs>): Prisma.PrismaPromise<GetApp_userAggregateType<T>>;
    groupBy<T extends app_userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: app_userGroupByArgs['orderBy'];
    } : {
        orderBy?: app_userGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, app_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: app_userFieldRefs;
}
export interface Prisma__app_userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface app_userFieldRefs {
    readonly id: Prisma.FieldRef<"app_user", 'Int'>;
    readonly username: Prisma.FieldRef<"app_user", 'String'>;
    readonly email: Prisma.FieldRef<"app_user", 'String'>;
    readonly firstName: Prisma.FieldRef<"app_user", 'String'>;
    readonly lastName: Prisma.FieldRef<"app_user", 'String'>;
    readonly isActive: Prisma.FieldRef<"app_user", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"app_user", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"app_user", 'DateTime'>;
}
export type app_userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where: Prisma.app_userWhereUniqueInput;
};
export type app_userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where: Prisma.app_userWhereUniqueInput;
};
export type app_userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where?: Prisma.app_userWhereInput;
    orderBy?: Prisma.app_userOrderByWithRelationInput | Prisma.app_userOrderByWithRelationInput[];
    cursor?: Prisma.app_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_userScalarFieldEnum | Prisma.App_userScalarFieldEnum[];
};
export type app_userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where?: Prisma.app_userWhereInput;
    orderBy?: Prisma.app_userOrderByWithRelationInput | Prisma.app_userOrderByWithRelationInput[];
    cursor?: Prisma.app_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_userScalarFieldEnum | Prisma.App_userScalarFieldEnum[];
};
export type app_userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where?: Prisma.app_userWhereInput;
    orderBy?: Prisma.app_userOrderByWithRelationInput | Prisma.app_userOrderByWithRelationInput[];
    cursor?: Prisma.app_userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_userScalarFieldEnum | Prisma.App_userScalarFieldEnum[];
};
export type app_userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.app_userCreateInput, Prisma.app_userUncheckedCreateInput>;
};
export type app_userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.app_userCreateManyInput | Prisma.app_userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type app_userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.app_userUpdateInput, Prisma.app_userUncheckedUpdateInput>;
    where: Prisma.app_userWhereUniqueInput;
};
export type app_userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.app_userUpdateManyMutationInput, Prisma.app_userUncheckedUpdateManyInput>;
    where?: Prisma.app_userWhereInput;
    limit?: number;
};
export type app_userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where: Prisma.app_userWhereUniqueInput;
    create: Prisma.XOR<Prisma.app_userCreateInput, Prisma.app_userUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.app_userUpdateInput, Prisma.app_userUncheckedUpdateInput>;
};
export type app_userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
    where: Prisma.app_userWhereUniqueInput;
};
export type app_userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_userWhereInput;
    limit?: number;
};
export type app_userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_userSelect<ExtArgs> | null;
    omit?: Prisma.app_userOmit<ExtArgs> | null;
};
