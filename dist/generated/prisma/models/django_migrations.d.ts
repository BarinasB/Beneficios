import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type django_migrationsModel = runtime.Types.Result.DefaultSelection<Prisma.$django_migrationsPayload>;
export type AggregateDjango_migrations = {
    _count: Django_migrationsCountAggregateOutputType | null;
    _avg: Django_migrationsAvgAggregateOutputType | null;
    _sum: Django_migrationsSumAggregateOutputType | null;
    _min: Django_migrationsMinAggregateOutputType | null;
    _max: Django_migrationsMaxAggregateOutputType | null;
};
export type Django_migrationsAvgAggregateOutputType = {
    id: number | null;
};
export type Django_migrationsSumAggregateOutputType = {
    id: bigint | null;
};
export type Django_migrationsMinAggregateOutputType = {
    id: bigint | null;
    app: string | null;
    name: string | null;
    applied: Date | null;
};
export type Django_migrationsMaxAggregateOutputType = {
    id: bigint | null;
    app: string | null;
    name: string | null;
    applied: Date | null;
};
export type Django_migrationsCountAggregateOutputType = {
    id: number;
    app: number;
    name: number;
    applied: number;
    _all: number;
};
export type Django_migrationsAvgAggregateInputType = {
    id?: true;
};
export type Django_migrationsSumAggregateInputType = {
    id?: true;
};
export type Django_migrationsMinAggregateInputType = {
    id?: true;
    app?: true;
    name?: true;
    applied?: true;
};
export type Django_migrationsMaxAggregateInputType = {
    id?: true;
    app?: true;
    name?: true;
    applied?: true;
};
export type Django_migrationsCountAggregateInputType = {
    id?: true;
    app?: true;
    name?: true;
    applied?: true;
    _all?: true;
};
export type Django_migrationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_migrationsWhereInput;
    orderBy?: Prisma.django_migrationsOrderByWithRelationInput | Prisma.django_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.django_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Django_migrationsCountAggregateInputType;
    _avg?: Django_migrationsAvgAggregateInputType;
    _sum?: Django_migrationsSumAggregateInputType;
    _min?: Django_migrationsMinAggregateInputType;
    _max?: Django_migrationsMaxAggregateInputType;
};
export type GetDjango_migrationsAggregateType<T extends Django_migrationsAggregateArgs> = {
    [P in keyof T & keyof AggregateDjango_migrations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDjango_migrations[P]> : Prisma.GetScalarType<T[P], AggregateDjango_migrations[P]>;
};
export type django_migrationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_migrationsWhereInput;
    orderBy?: Prisma.django_migrationsOrderByWithAggregationInput | Prisma.django_migrationsOrderByWithAggregationInput[];
    by: Prisma.Django_migrationsScalarFieldEnum[] | Prisma.Django_migrationsScalarFieldEnum;
    having?: Prisma.django_migrationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Django_migrationsCountAggregateInputType | true;
    _avg?: Django_migrationsAvgAggregateInputType;
    _sum?: Django_migrationsSumAggregateInputType;
    _min?: Django_migrationsMinAggregateInputType;
    _max?: Django_migrationsMaxAggregateInputType;
};
export type Django_migrationsGroupByOutputType = {
    id: bigint;
    app: string;
    name: string;
    applied: Date;
    _count: Django_migrationsCountAggregateOutputType | null;
    _avg: Django_migrationsAvgAggregateOutputType | null;
    _sum: Django_migrationsSumAggregateOutputType | null;
    _min: Django_migrationsMinAggregateOutputType | null;
    _max: Django_migrationsMaxAggregateOutputType | null;
};
export type GetDjango_migrationsGroupByPayload<T extends django_migrationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Django_migrationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Django_migrationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Django_migrationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Django_migrationsGroupByOutputType[P]>;
}>>;
export type django_migrationsWhereInput = {
    AND?: Prisma.django_migrationsWhereInput | Prisma.django_migrationsWhereInput[];
    OR?: Prisma.django_migrationsWhereInput[];
    NOT?: Prisma.django_migrationsWhereInput | Prisma.django_migrationsWhereInput[];
    id?: Prisma.BigIntFilter<"django_migrations"> | bigint | number;
    app?: Prisma.StringFilter<"django_migrations"> | string;
    name?: Prisma.StringFilter<"django_migrations"> | string;
    applied?: Prisma.DateTimeFilter<"django_migrations"> | Date | string;
};
export type django_migrationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    app?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applied?: Prisma.SortOrder;
    _relevance?: Prisma.django_migrationsOrderByRelevanceInput;
};
export type django_migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.django_migrationsWhereInput | Prisma.django_migrationsWhereInput[];
    OR?: Prisma.django_migrationsWhereInput[];
    NOT?: Prisma.django_migrationsWhereInput | Prisma.django_migrationsWhereInput[];
    app?: Prisma.StringFilter<"django_migrations"> | string;
    name?: Prisma.StringFilter<"django_migrations"> | string;
    applied?: Prisma.DateTimeFilter<"django_migrations"> | Date | string;
}, "id">;
export type django_migrationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    app?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applied?: Prisma.SortOrder;
    _count?: Prisma.django_migrationsCountOrderByAggregateInput;
    _avg?: Prisma.django_migrationsAvgOrderByAggregateInput;
    _max?: Prisma.django_migrationsMaxOrderByAggregateInput;
    _min?: Prisma.django_migrationsMinOrderByAggregateInput;
    _sum?: Prisma.django_migrationsSumOrderByAggregateInput;
};
export type django_migrationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.django_migrationsScalarWhereWithAggregatesInput | Prisma.django_migrationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.django_migrationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.django_migrationsScalarWhereWithAggregatesInput | Prisma.django_migrationsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"django_migrations"> | bigint | number;
    app?: Prisma.StringWithAggregatesFilter<"django_migrations"> | string;
    name?: Prisma.StringWithAggregatesFilter<"django_migrations"> | string;
    applied?: Prisma.DateTimeWithAggregatesFilter<"django_migrations"> | Date | string;
};
export type django_migrationsCreateInput = {
    id?: bigint | number;
    app: string;
    name: string;
    applied: Date | string;
};
export type django_migrationsUncheckedCreateInput = {
    id?: bigint | number;
    app: string;
    name: string;
    applied: Date | string;
};
export type django_migrationsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    app?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applied?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_migrationsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    app?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applied?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_migrationsCreateManyInput = {
    id?: bigint | number;
    app: string;
    name: string;
    applied: Date | string;
};
export type django_migrationsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    app?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applied?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_migrationsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    app?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applied?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_migrationsOrderByRelevanceInput = {
    fields: Prisma.django_migrationsOrderByRelevanceFieldEnum | Prisma.django_migrationsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type django_migrationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applied?: Prisma.SortOrder;
};
export type django_migrationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type django_migrationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applied?: Prisma.SortOrder;
};
export type django_migrationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    app?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applied?: Prisma.SortOrder;
};
export type django_migrationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type django_migrationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    app?: boolean;
    name?: boolean;
    applied?: boolean;
}, ExtArgs["result"]["django_migrations"]>;
export type django_migrationsSelectScalar = {
    id?: boolean;
    app?: boolean;
    name?: boolean;
    applied?: boolean;
};
export type django_migrationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "app" | "name" | "applied", ExtArgs["result"]["django_migrations"]>;
export type $django_migrationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "django_migrations";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        app: string;
        name: string;
        applied: Date;
    }, ExtArgs["result"]["django_migrations"]>;
    composites: {};
};
export type django_migrationsGetPayload<S extends boolean | null | undefined | django_migrationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload, S>;
export type django_migrationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<django_migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Django_migrationsCountAggregateInputType | true;
};
export interface django_migrationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['django_migrations'];
        meta: {
            name: 'django_migrations';
        };
    };
    findUnique<T extends django_migrationsFindUniqueArgs>(args: Prisma.SelectSubset<T, django_migrationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends django_migrationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, django_migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends django_migrationsFindFirstArgs>(args?: Prisma.SelectSubset<T, django_migrationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends django_migrationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, django_migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends django_migrationsFindManyArgs>(args?: Prisma.SelectSubset<T, django_migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends django_migrationsCreateArgs>(args: Prisma.SelectSubset<T, django_migrationsCreateArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends django_migrationsCreateManyArgs>(args?: Prisma.SelectSubset<T, django_migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends django_migrationsDeleteArgs>(args: Prisma.SelectSubset<T, django_migrationsDeleteArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends django_migrationsUpdateArgs>(args: Prisma.SelectSubset<T, django_migrationsUpdateArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends django_migrationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, django_migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends django_migrationsUpdateManyArgs>(args: Prisma.SelectSubset<T, django_migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends django_migrationsUpsertArgs>(args: Prisma.SelectSubset<T, django_migrationsUpsertArgs<ExtArgs>>): Prisma.Prisma__django_migrationsClient<runtime.Types.Result.GetResult<Prisma.$django_migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends django_migrationsCountArgs>(args?: Prisma.Subset<T, django_migrationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Django_migrationsCountAggregateOutputType> : number>;
    aggregate<T extends Django_migrationsAggregateArgs>(args: Prisma.Subset<T, Django_migrationsAggregateArgs>): Prisma.PrismaPromise<GetDjango_migrationsAggregateType<T>>;
    groupBy<T extends django_migrationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: django_migrationsGroupByArgs['orderBy'];
    } : {
        orderBy?: django_migrationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, django_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: django_migrationsFieldRefs;
}
export interface Prisma__django_migrationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface django_migrationsFieldRefs {
    readonly id: Prisma.FieldRef<"django_migrations", 'BigInt'>;
    readonly app: Prisma.FieldRef<"django_migrations", 'String'>;
    readonly name: Prisma.FieldRef<"django_migrations", 'String'>;
    readonly applied: Prisma.FieldRef<"django_migrations", 'DateTime'>;
}
export type django_migrationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where: Prisma.django_migrationsWhereUniqueInput;
};
export type django_migrationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where: Prisma.django_migrationsWhereUniqueInput;
};
export type django_migrationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where?: Prisma.django_migrationsWhereInput;
    orderBy?: Prisma.django_migrationsOrderByWithRelationInput | Prisma.django_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.django_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_migrationsScalarFieldEnum | Prisma.Django_migrationsScalarFieldEnum[];
};
export type django_migrationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where?: Prisma.django_migrationsWhereInput;
    orderBy?: Prisma.django_migrationsOrderByWithRelationInput | Prisma.django_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.django_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_migrationsScalarFieldEnum | Prisma.Django_migrationsScalarFieldEnum[];
};
export type django_migrationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where?: Prisma.django_migrationsWhereInput;
    orderBy?: Prisma.django_migrationsOrderByWithRelationInput | Prisma.django_migrationsOrderByWithRelationInput[];
    cursor?: Prisma.django_migrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_migrationsScalarFieldEnum | Prisma.Django_migrationsScalarFieldEnum[];
};
export type django_migrationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_migrationsCreateInput, Prisma.django_migrationsUncheckedCreateInput>;
};
export type django_migrationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.django_migrationsCreateManyInput | Prisma.django_migrationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type django_migrationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_migrationsUpdateInput, Prisma.django_migrationsUncheckedUpdateInput>;
    where: Prisma.django_migrationsWhereUniqueInput;
};
export type django_migrationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.django_migrationsUpdateManyMutationInput, Prisma.django_migrationsUncheckedUpdateManyInput>;
    where?: Prisma.django_migrationsWhereInput;
    limit?: number;
};
export type django_migrationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where: Prisma.django_migrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_migrationsCreateInput, Prisma.django_migrationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.django_migrationsUpdateInput, Prisma.django_migrationsUncheckedUpdateInput>;
};
export type django_migrationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
    where: Prisma.django_migrationsWhereUniqueInput;
};
export type django_migrationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_migrationsWhereInput;
    limit?: number;
};
export type django_migrationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_migrationsSelect<ExtArgs> | null;
    omit?: Prisma.django_migrationsOmit<ExtArgs> | null;
};
