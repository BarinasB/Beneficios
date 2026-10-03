import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type django_content_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$django_content_typePayload>;
export type AggregateDjango_content_type = {
    _count: Django_content_typeCountAggregateOutputType | null;
    _avg: Django_content_typeAvgAggregateOutputType | null;
    _sum: Django_content_typeSumAggregateOutputType | null;
    _min: Django_content_typeMinAggregateOutputType | null;
    _max: Django_content_typeMaxAggregateOutputType | null;
};
export type Django_content_typeAvgAggregateOutputType = {
    id: number | null;
};
export type Django_content_typeSumAggregateOutputType = {
    id: number | null;
};
export type Django_content_typeMinAggregateOutputType = {
    id: number | null;
    app_label: string | null;
    model: string | null;
};
export type Django_content_typeMaxAggregateOutputType = {
    id: number | null;
    app_label: string | null;
    model: string | null;
};
export type Django_content_typeCountAggregateOutputType = {
    id: number;
    app_label: number;
    model: number;
    _all: number;
};
export type Django_content_typeAvgAggregateInputType = {
    id?: true;
};
export type Django_content_typeSumAggregateInputType = {
    id?: true;
};
export type Django_content_typeMinAggregateInputType = {
    id?: true;
    app_label?: true;
    model?: true;
};
export type Django_content_typeMaxAggregateInputType = {
    id?: true;
    app_label?: true;
    model?: true;
};
export type Django_content_typeCountAggregateInputType = {
    id?: true;
    app_label?: true;
    model?: true;
    _all?: true;
};
export type Django_content_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_content_typeWhereInput;
    orderBy?: Prisma.django_content_typeOrderByWithRelationInput | Prisma.django_content_typeOrderByWithRelationInput[];
    cursor?: Prisma.django_content_typeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Django_content_typeCountAggregateInputType;
    _avg?: Django_content_typeAvgAggregateInputType;
    _sum?: Django_content_typeSumAggregateInputType;
    _min?: Django_content_typeMinAggregateInputType;
    _max?: Django_content_typeMaxAggregateInputType;
};
export type GetDjango_content_typeAggregateType<T extends Django_content_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateDjango_content_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDjango_content_type[P]> : Prisma.GetScalarType<T[P], AggregateDjango_content_type[P]>;
};
export type django_content_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_content_typeWhereInput;
    orderBy?: Prisma.django_content_typeOrderByWithAggregationInput | Prisma.django_content_typeOrderByWithAggregationInput[];
    by: Prisma.Django_content_typeScalarFieldEnum[] | Prisma.Django_content_typeScalarFieldEnum;
    having?: Prisma.django_content_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Django_content_typeCountAggregateInputType | true;
    _avg?: Django_content_typeAvgAggregateInputType;
    _sum?: Django_content_typeSumAggregateInputType;
    _min?: Django_content_typeMinAggregateInputType;
    _max?: Django_content_typeMaxAggregateInputType;
};
export type Django_content_typeGroupByOutputType = {
    id: number;
    app_label: string;
    model: string;
    _count: Django_content_typeCountAggregateOutputType | null;
    _avg: Django_content_typeAvgAggregateOutputType | null;
    _sum: Django_content_typeSumAggregateOutputType | null;
    _min: Django_content_typeMinAggregateOutputType | null;
    _max: Django_content_typeMaxAggregateOutputType | null;
};
export type GetDjango_content_typeGroupByPayload<T extends django_content_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Django_content_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Django_content_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Django_content_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Django_content_typeGroupByOutputType[P]>;
}>>;
export type django_content_typeWhereInput = {
    AND?: Prisma.django_content_typeWhereInput | Prisma.django_content_typeWhereInput[];
    OR?: Prisma.django_content_typeWhereInput[];
    NOT?: Prisma.django_content_typeWhereInput | Prisma.django_content_typeWhereInput[];
    id?: Prisma.IntFilter<"django_content_type"> | number;
    app_label?: Prisma.StringFilter<"django_content_type"> | string;
    model?: Prisma.StringFilter<"django_content_type"> | string;
    auth_permission?: Prisma.Auth_permissionListRelationFilter;
    django_admin_log?: Prisma.Django_admin_logListRelationFilter;
};
export type django_content_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    app_label?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    auth_permission?: Prisma.auth_permissionOrderByRelationAggregateInput;
    django_admin_log?: Prisma.django_admin_logOrderByRelationAggregateInput;
    _relevance?: Prisma.django_content_typeOrderByRelevanceInput;
};
export type django_content_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    app_label_model?: Prisma.django_content_typeApp_labelModelCompoundUniqueInput;
    AND?: Prisma.django_content_typeWhereInput | Prisma.django_content_typeWhereInput[];
    OR?: Prisma.django_content_typeWhereInput[];
    NOT?: Prisma.django_content_typeWhereInput | Prisma.django_content_typeWhereInput[];
    app_label?: Prisma.StringFilter<"django_content_type"> | string;
    model?: Prisma.StringFilter<"django_content_type"> | string;
    auth_permission?: Prisma.Auth_permissionListRelationFilter;
    django_admin_log?: Prisma.Django_admin_logListRelationFilter;
}, "id" | "app_label_model">;
export type django_content_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    app_label?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    _count?: Prisma.django_content_typeCountOrderByAggregateInput;
    _avg?: Prisma.django_content_typeAvgOrderByAggregateInput;
    _max?: Prisma.django_content_typeMaxOrderByAggregateInput;
    _min?: Prisma.django_content_typeMinOrderByAggregateInput;
    _sum?: Prisma.django_content_typeSumOrderByAggregateInput;
};
export type django_content_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.django_content_typeScalarWhereWithAggregatesInput | Prisma.django_content_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.django_content_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.django_content_typeScalarWhereWithAggregatesInput | Prisma.django_content_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"django_content_type"> | number;
    app_label?: Prisma.StringWithAggregatesFilter<"django_content_type"> | string;
    model?: Prisma.StringWithAggregatesFilter<"django_content_type"> | string;
};
export type django_content_typeCreateInput = {
    app_label: string;
    model: string;
    auth_permission?: Prisma.auth_permissionCreateNestedManyWithoutDjango_content_typeInput;
    django_admin_log?: Prisma.django_admin_logCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeUncheckedCreateInput = {
    id?: number;
    app_label: string;
    model: string;
    auth_permission?: Prisma.auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput;
    django_admin_log?: Prisma.django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeUpdateInput = {
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_permission?: Prisma.auth_permissionUpdateManyWithoutDjango_content_typeNestedInput;
    django_admin_log?: Prisma.django_admin_logUpdateManyWithoutDjango_content_typeNestedInput;
};
export type django_content_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_permission?: Prisma.auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput;
    django_admin_log?: Prisma.django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput;
};
export type django_content_typeCreateManyInput = {
    id?: number;
    app_label: string;
    model: string;
};
export type django_content_typeUpdateManyMutationInput = {
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type django_content_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Django_content_typeScalarRelationFilter = {
    is?: Prisma.django_content_typeWhereInput;
    isNot?: Prisma.django_content_typeWhereInput;
};
export type Django_content_typeNullableScalarRelationFilter = {
    is?: Prisma.django_content_typeWhereInput | null;
    isNot?: Prisma.django_content_typeWhereInput | null;
};
export type django_content_typeOrderByRelevanceInput = {
    fields: Prisma.django_content_typeOrderByRelevanceFieldEnum | Prisma.django_content_typeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type django_content_typeApp_labelModelCompoundUniqueInput = {
    app_label: string;
    model: string;
};
export type django_content_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app_label?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
};
export type django_content_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type django_content_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app_label?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
};
export type django_content_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app_label?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
};
export type django_content_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type django_content_typeCreateNestedOneWithoutAuth_permissionInput = {
    create?: Prisma.XOR<Prisma.django_content_typeCreateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedCreateWithoutAuth_permissionInput>;
    connectOrCreate?: Prisma.django_content_typeCreateOrConnectWithoutAuth_permissionInput;
    connect?: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.django_content_typeCreateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedCreateWithoutAuth_permissionInput>;
    connectOrCreate?: Prisma.django_content_typeCreateOrConnectWithoutAuth_permissionInput;
    upsert?: Prisma.django_content_typeUpsertWithoutAuth_permissionInput;
    connect?: Prisma.django_content_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.django_content_typeUpdateToOneWithWhereWithoutAuth_permissionInput, Prisma.django_content_typeUpdateWithoutAuth_permissionInput>, Prisma.django_content_typeUncheckedUpdateWithoutAuth_permissionInput>;
};
export type django_content_typeCreateNestedOneWithoutDjango_admin_logInput = {
    create?: Prisma.XOR<Prisma.django_content_typeCreateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedCreateWithoutDjango_admin_logInput>;
    connectOrCreate?: Prisma.django_content_typeCreateOrConnectWithoutDjango_admin_logInput;
    connect?: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeUpdateOneWithoutDjango_admin_logNestedInput = {
    create?: Prisma.XOR<Prisma.django_content_typeCreateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedCreateWithoutDjango_admin_logInput>;
    connectOrCreate?: Prisma.django_content_typeCreateOrConnectWithoutDjango_admin_logInput;
    upsert?: Prisma.django_content_typeUpsertWithoutDjango_admin_logInput;
    disconnect?: Prisma.django_content_typeWhereInput | boolean;
    delete?: Prisma.django_content_typeWhereInput | boolean;
    connect?: Prisma.django_content_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.django_content_typeUpdateToOneWithWhereWithoutDjango_admin_logInput, Prisma.django_content_typeUpdateWithoutDjango_admin_logInput>, Prisma.django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>;
};
export type django_content_typeCreateWithoutAuth_permissionInput = {
    app_label: string;
    model: string;
    django_admin_log?: Prisma.django_admin_logCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeUncheckedCreateWithoutAuth_permissionInput = {
    id?: number;
    app_label: string;
    model: string;
    django_admin_log?: Prisma.django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeCreateOrConnectWithoutAuth_permissionInput = {
    where: Prisma.django_content_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_content_typeCreateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedCreateWithoutAuth_permissionInput>;
};
export type django_content_typeUpsertWithoutAuth_permissionInput = {
    update: Prisma.XOR<Prisma.django_content_typeUpdateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedUpdateWithoutAuth_permissionInput>;
    create: Prisma.XOR<Prisma.django_content_typeCreateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedCreateWithoutAuth_permissionInput>;
    where?: Prisma.django_content_typeWhereInput;
};
export type django_content_typeUpdateToOneWithWhereWithoutAuth_permissionInput = {
    where?: Prisma.django_content_typeWhereInput;
    data: Prisma.XOR<Prisma.django_content_typeUpdateWithoutAuth_permissionInput, Prisma.django_content_typeUncheckedUpdateWithoutAuth_permissionInput>;
};
export type django_content_typeUpdateWithoutAuth_permissionInput = {
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    django_admin_log?: Prisma.django_admin_logUpdateManyWithoutDjango_content_typeNestedInput;
};
export type django_content_typeUncheckedUpdateWithoutAuth_permissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    django_admin_log?: Prisma.django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput;
};
export type django_content_typeCreateWithoutDjango_admin_logInput = {
    app_label: string;
    model: string;
    auth_permission?: Prisma.auth_permissionCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number;
    app_label: string;
    model: string;
    auth_permission?: Prisma.auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput;
};
export type django_content_typeCreateOrConnectWithoutDjango_admin_logInput = {
    where: Prisma.django_content_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_content_typeCreateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedCreateWithoutDjango_admin_logInput>;
};
export type django_content_typeUpsertWithoutDjango_admin_logInput = {
    update: Prisma.XOR<Prisma.django_content_typeUpdateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>;
    create: Prisma.XOR<Prisma.django_content_typeCreateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedCreateWithoutDjango_admin_logInput>;
    where?: Prisma.django_content_typeWhereInput;
};
export type django_content_typeUpdateToOneWithWhereWithoutDjango_admin_logInput = {
    where?: Prisma.django_content_typeWhereInput;
    data: Prisma.XOR<Prisma.django_content_typeUpdateWithoutDjango_admin_logInput, Prisma.django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>;
};
export type django_content_typeUpdateWithoutDjango_admin_logInput = {
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_permission?: Prisma.auth_permissionUpdateManyWithoutDjango_content_typeNestedInput;
};
export type django_content_typeUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    app_label?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_permission?: Prisma.auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput;
};
export type Django_content_typeCountOutputType = {
    auth_permission: number;
    django_admin_log: number;
};
export type Django_content_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_permission?: boolean | Django_content_typeCountOutputTypeCountAuth_permissionArgs;
    django_admin_log?: boolean | Django_content_typeCountOutputTypeCountDjango_admin_logArgs;
};
export type Django_content_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Django_content_typeCountOutputTypeSelect<ExtArgs> | null;
};
export type Django_content_typeCountOutputTypeCountAuth_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auth_permissionWhereInput;
};
export type Django_content_typeCountOutputTypeCountDjango_admin_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_admin_logWhereInput;
};
export type django_content_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    app_label?: boolean;
    model?: boolean;
    auth_permission?: boolean | Prisma.django_content_type$auth_permissionArgs<ExtArgs>;
    django_admin_log?: boolean | Prisma.django_content_type$django_admin_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Django_content_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["django_content_type"]>;
export type django_content_typeSelectScalar = {
    id?: boolean;
    app_label?: boolean;
    model?: boolean;
};
export type django_content_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "app_label" | "model", ExtArgs["result"]["django_content_type"]>;
export type django_content_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_permission?: boolean | Prisma.django_content_type$auth_permissionArgs<ExtArgs>;
    django_admin_log?: boolean | Prisma.django_content_type$django_admin_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Django_content_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $django_content_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "django_content_type";
    objects: {
        auth_permission: Prisma.$auth_permissionPayload<ExtArgs>[];
        django_admin_log: Prisma.$django_admin_logPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        app_label: string;
        model: string;
    }, ExtArgs["result"]["django_content_type"]>;
    composites: {};
};
export type django_content_typeGetPayload<S extends boolean | null | undefined | django_content_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$django_content_typePayload, S>;
export type django_content_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<django_content_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Django_content_typeCountAggregateInputType | true;
};
export interface django_content_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['django_content_type'];
        meta: {
            name: 'django_content_type';
        };
    };
    findUnique<T extends django_content_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, django_content_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends django_content_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, django_content_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends django_content_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, django_content_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends django_content_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, django_content_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends django_content_typeFindManyArgs>(args?: Prisma.SelectSubset<T, django_content_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends django_content_typeCreateArgs>(args: Prisma.SelectSubset<T, django_content_typeCreateArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends django_content_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, django_content_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends django_content_typeDeleteArgs>(args: Prisma.SelectSubset<T, django_content_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends django_content_typeUpdateArgs>(args: Prisma.SelectSubset<T, django_content_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends django_content_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, django_content_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends django_content_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, django_content_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends django_content_typeUpsertArgs>(args: Prisma.SelectSubset<T, django_content_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__django_content_typeClient<runtime.Types.Result.GetResult<Prisma.$django_content_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends django_content_typeCountArgs>(args?: Prisma.Subset<T, django_content_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Django_content_typeCountAggregateOutputType> : number>;
    aggregate<T extends Django_content_typeAggregateArgs>(args: Prisma.Subset<T, Django_content_typeAggregateArgs>): Prisma.PrismaPromise<GetDjango_content_typeAggregateType<T>>;
    groupBy<T extends django_content_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: django_content_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: django_content_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, django_content_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_content_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: django_content_typeFieldRefs;
}
export interface Prisma__django_content_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_permission<T extends Prisma.django_content_type$auth_permissionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.django_content_type$auth_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auth_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    django_admin_log<T extends Prisma.django_content_type$django_admin_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.django_content_type$django_admin_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_admin_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface django_content_typeFieldRefs {
    readonly id: Prisma.FieldRef<"django_content_type", 'Int'>;
    readonly app_label: Prisma.FieldRef<"django_content_type", 'String'>;
    readonly model: Prisma.FieldRef<"django_content_type", 'String'>;
}
export type django_content_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where?: Prisma.django_content_typeWhereInput;
    orderBy?: Prisma.django_content_typeOrderByWithRelationInput | Prisma.django_content_typeOrderByWithRelationInput[];
    cursor?: Prisma.django_content_typeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_content_typeScalarFieldEnum | Prisma.Django_content_typeScalarFieldEnum[];
};
export type django_content_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where?: Prisma.django_content_typeWhereInput;
    orderBy?: Prisma.django_content_typeOrderByWithRelationInput | Prisma.django_content_typeOrderByWithRelationInput[];
    cursor?: Prisma.django_content_typeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_content_typeScalarFieldEnum | Prisma.Django_content_typeScalarFieldEnum[];
};
export type django_content_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where?: Prisma.django_content_typeWhereInput;
    orderBy?: Prisma.django_content_typeOrderByWithRelationInput | Prisma.django_content_typeOrderByWithRelationInput[];
    cursor?: Prisma.django_content_typeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_content_typeScalarFieldEnum | Prisma.Django_content_typeScalarFieldEnum[];
};
export type django_content_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_content_typeCreateInput, Prisma.django_content_typeUncheckedCreateInput>;
};
export type django_content_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.django_content_typeCreateManyInput | Prisma.django_content_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type django_content_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_content_typeUpdateInput, Prisma.django_content_typeUncheckedUpdateInput>;
    where: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.django_content_typeUpdateManyMutationInput, Prisma.django_content_typeUncheckedUpdateManyInput>;
    where?: Prisma.django_content_typeWhereInput;
    limit?: number;
};
export type django_content_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where: Prisma.django_content_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_content_typeCreateInput, Prisma.django_content_typeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.django_content_typeUpdateInput, Prisma.django_content_typeUncheckedUpdateInput>;
};
export type django_content_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
    where: Prisma.django_content_typeWhereUniqueInput;
};
export type django_content_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_content_typeWhereInput;
    limit?: number;
};
export type django_content_type$auth_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type django_content_type$django_admin_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type django_content_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_content_typeSelect<ExtArgs> | null;
    omit?: Prisma.django_content_typeOmit<ExtArgs> | null;
    include?: Prisma.django_content_typeInclude<ExtArgs> | null;
};
