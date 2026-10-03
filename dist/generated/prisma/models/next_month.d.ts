import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type next_monthModel = runtime.Types.Result.DefaultSelection<Prisma.$next_monthPayload>;
export type AggregateNext_month = {
    _count: Next_monthCountAggregateOutputType | null;
    _avg: Next_monthAvgAggregateOutputType | null;
    _sum: Next_monthSumAggregateOutputType | null;
    _min: Next_monthMinAggregateOutputType | null;
    _max: Next_monthMaxAggregateOutputType | null;
};
export type Next_monthAvgAggregateOutputType = {
    id: number | null;
};
export type Next_monthSumAggregateOutputType = {
    id: number | null;
};
export type Next_monthMinAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
};
export type Next_monthMaxAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
};
export type Next_monthCountAggregateOutputType = {
    id: number;
    kind_document: number;
    document: number;
    amount: number;
    state: number;
    _all: number;
};
export type Next_monthAvgAggregateInputType = {
    id?: true;
};
export type Next_monthSumAggregateInputType = {
    id?: true;
};
export type Next_monthMinAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
};
export type Next_monthMaxAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
};
export type Next_monthCountAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
    _all?: true;
};
export type Next_monthAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.next_monthWhereInput;
    orderBy?: Prisma.next_monthOrderByWithRelationInput | Prisma.next_monthOrderByWithRelationInput[];
    cursor?: Prisma.next_monthWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Next_monthCountAggregateInputType;
    _avg?: Next_monthAvgAggregateInputType;
    _sum?: Next_monthSumAggregateInputType;
    _min?: Next_monthMinAggregateInputType;
    _max?: Next_monthMaxAggregateInputType;
};
export type GetNext_monthAggregateType<T extends Next_monthAggregateArgs> = {
    [P in keyof T & keyof AggregateNext_month]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNext_month[P]> : Prisma.GetScalarType<T[P], AggregateNext_month[P]>;
};
export type next_monthGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.next_monthWhereInput;
    orderBy?: Prisma.next_monthOrderByWithAggregationInput | Prisma.next_monthOrderByWithAggregationInput[];
    by: Prisma.Next_monthScalarFieldEnum[] | Prisma.Next_monthScalarFieldEnum;
    having?: Prisma.next_monthScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Next_monthCountAggregateInputType | true;
    _avg?: Next_monthAvgAggregateInputType;
    _sum?: Next_monthSumAggregateInputType;
    _min?: Next_monthMinAggregateInputType;
    _max?: Next_monthMaxAggregateInputType;
};
export type Next_monthGroupByOutputType = {
    id: number;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
    _count: Next_monthCountAggregateOutputType | null;
    _avg: Next_monthAvgAggregateOutputType | null;
    _sum: Next_monthSumAggregateOutputType | null;
    _min: Next_monthMinAggregateOutputType | null;
    _max: Next_monthMaxAggregateOutputType | null;
};
export type GetNext_monthGroupByPayload<T extends next_monthGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Next_monthGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Next_monthGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Next_monthGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Next_monthGroupByOutputType[P]>;
}>>;
export type next_monthWhereInput = {
    AND?: Prisma.next_monthWhereInput | Prisma.next_monthWhereInput[];
    OR?: Prisma.next_monthWhereInput[];
    NOT?: Prisma.next_monthWhereInput | Prisma.next_monthWhereInput[];
    id?: Prisma.IntFilter<"next_month"> | number;
    kind_document?: Prisma.StringNullableFilter<"next_month"> | string | null;
    document?: Prisma.StringNullableFilter<"next_month"> | string | null;
    amount?: Prisma.StringNullableFilter<"next_month"> | string | null;
    state?: Prisma.StringNullableFilter<"next_month"> | string | null;
};
export type next_monthOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.next_monthOrderByRelevanceInput;
};
export type next_monthWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.next_monthWhereInput | Prisma.next_monthWhereInput[];
    OR?: Prisma.next_monthWhereInput[];
    NOT?: Prisma.next_monthWhereInput | Prisma.next_monthWhereInput[];
    kind_document?: Prisma.StringNullableFilter<"next_month"> | string | null;
    document?: Prisma.StringNullableFilter<"next_month"> | string | null;
    amount?: Prisma.StringNullableFilter<"next_month"> | string | null;
    state?: Prisma.StringNullableFilter<"next_month"> | string | null;
}, "id">;
export type next_monthOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.next_monthCountOrderByAggregateInput;
    _avg?: Prisma.next_monthAvgOrderByAggregateInput;
    _max?: Prisma.next_monthMaxOrderByAggregateInput;
    _min?: Prisma.next_monthMinOrderByAggregateInput;
    _sum?: Prisma.next_monthSumOrderByAggregateInput;
};
export type next_monthScalarWhereWithAggregatesInput = {
    AND?: Prisma.next_monthScalarWhereWithAggregatesInput | Prisma.next_monthScalarWhereWithAggregatesInput[];
    OR?: Prisma.next_monthScalarWhereWithAggregatesInput[];
    NOT?: Prisma.next_monthScalarWhereWithAggregatesInput | Prisma.next_monthScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"next_month"> | number;
    kind_document?: Prisma.StringNullableWithAggregatesFilter<"next_month"> | string | null;
    document?: Prisma.StringNullableWithAggregatesFilter<"next_month"> | string | null;
    amount?: Prisma.StringNullableWithAggregatesFilter<"next_month"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"next_month"> | string | null;
};
export type next_monthCreateInput = {
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type next_monthUncheckedCreateInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type next_monthUpdateInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type next_monthUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type next_monthCreateManyInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type next_monthUpdateManyMutationInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type next_monthUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type next_monthOrderByRelevanceInput = {
    fields: Prisma.next_monthOrderByRelevanceFieldEnum | Prisma.next_monthOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type next_monthCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type next_monthAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type next_monthMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type next_monthMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type next_monthSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type next_monthSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    amount?: boolean;
    state?: boolean;
}, ExtArgs["result"]["next_month"]>;
export type next_monthSelectScalar = {
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    amount?: boolean;
    state?: boolean;
};
export type next_monthOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kind_document" | "document" | "amount" | "state", ExtArgs["result"]["next_month"]>;
export type $next_monthPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "next_month";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        kind_document: string | null;
        document: string | null;
        amount: string | null;
        state: string | null;
    }, ExtArgs["result"]["next_month"]>;
    composites: {};
};
export type next_monthGetPayload<S extends boolean | null | undefined | next_monthDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$next_monthPayload, S>;
export type next_monthCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<next_monthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Next_monthCountAggregateInputType | true;
};
export interface next_monthDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['next_month'];
        meta: {
            name: 'next_month';
        };
    };
    findUnique<T extends next_monthFindUniqueArgs>(args: Prisma.SelectSubset<T, next_monthFindUniqueArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends next_monthFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, next_monthFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends next_monthFindFirstArgs>(args?: Prisma.SelectSubset<T, next_monthFindFirstArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends next_monthFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, next_monthFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends next_monthFindManyArgs>(args?: Prisma.SelectSubset<T, next_monthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends next_monthCreateArgs>(args: Prisma.SelectSubset<T, next_monthCreateArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends next_monthCreateManyArgs>(args?: Prisma.SelectSubset<T, next_monthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends next_monthDeleteArgs>(args: Prisma.SelectSubset<T, next_monthDeleteArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends next_monthUpdateArgs>(args: Prisma.SelectSubset<T, next_monthUpdateArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends next_monthDeleteManyArgs>(args?: Prisma.SelectSubset<T, next_monthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends next_monthUpdateManyArgs>(args: Prisma.SelectSubset<T, next_monthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends next_monthUpsertArgs>(args: Prisma.SelectSubset<T, next_monthUpsertArgs<ExtArgs>>): Prisma.Prisma__next_monthClient<runtime.Types.Result.GetResult<Prisma.$next_monthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends next_monthCountArgs>(args?: Prisma.Subset<T, next_monthCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Next_monthCountAggregateOutputType> : number>;
    aggregate<T extends Next_monthAggregateArgs>(args: Prisma.Subset<T, Next_monthAggregateArgs>): Prisma.PrismaPromise<GetNext_monthAggregateType<T>>;
    groupBy<T extends next_monthGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: next_monthGroupByArgs['orderBy'];
    } : {
        orderBy?: next_monthGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, next_monthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNext_monthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: next_monthFieldRefs;
}
export interface Prisma__next_monthClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface next_monthFieldRefs {
    readonly id: Prisma.FieldRef<"next_month", 'Int'>;
    readonly kind_document: Prisma.FieldRef<"next_month", 'String'>;
    readonly document: Prisma.FieldRef<"next_month", 'String'>;
    readonly amount: Prisma.FieldRef<"next_month", 'String'>;
    readonly state: Prisma.FieldRef<"next_month", 'String'>;
}
export type next_monthFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where: Prisma.next_monthWhereUniqueInput;
};
export type next_monthFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where: Prisma.next_monthWhereUniqueInput;
};
export type next_monthFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where?: Prisma.next_monthWhereInput;
    orderBy?: Prisma.next_monthOrderByWithRelationInput | Prisma.next_monthOrderByWithRelationInput[];
    cursor?: Prisma.next_monthWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Next_monthScalarFieldEnum | Prisma.Next_monthScalarFieldEnum[];
};
export type next_monthFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where?: Prisma.next_monthWhereInput;
    orderBy?: Prisma.next_monthOrderByWithRelationInput | Prisma.next_monthOrderByWithRelationInput[];
    cursor?: Prisma.next_monthWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Next_monthScalarFieldEnum | Prisma.Next_monthScalarFieldEnum[];
};
export type next_monthFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where?: Prisma.next_monthWhereInput;
    orderBy?: Prisma.next_monthOrderByWithRelationInput | Prisma.next_monthOrderByWithRelationInput[];
    cursor?: Prisma.next_monthWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Next_monthScalarFieldEnum | Prisma.Next_monthScalarFieldEnum[];
};
export type next_monthCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.next_monthCreateInput, Prisma.next_monthUncheckedCreateInput>;
};
export type next_monthCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.next_monthCreateManyInput | Prisma.next_monthCreateManyInput[];
    skipDuplicates?: boolean;
};
export type next_monthUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.next_monthUpdateInput, Prisma.next_monthUncheckedUpdateInput>;
    where: Prisma.next_monthWhereUniqueInput;
};
export type next_monthUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.next_monthUpdateManyMutationInput, Prisma.next_monthUncheckedUpdateManyInput>;
    where?: Prisma.next_monthWhereInput;
    limit?: number;
};
export type next_monthUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where: Prisma.next_monthWhereUniqueInput;
    create: Prisma.XOR<Prisma.next_monthCreateInput, Prisma.next_monthUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.next_monthUpdateInput, Prisma.next_monthUncheckedUpdateInput>;
};
export type next_monthDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
    where: Prisma.next_monthWhereUniqueInput;
};
export type next_monthDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.next_monthWhereInput;
    limit?: number;
};
export type next_monthDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.next_monthSelect<ExtArgs> | null;
    omit?: Prisma.next_monthOmit<ExtArgs> | null;
};
