import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tmp_dataModel = runtime.Types.Result.DefaultSelection<Prisma.$tmp_dataPayload>;
export type AggregateTmp_data = {
    _count: Tmp_dataCountAggregateOutputType | null;
    _avg: Tmp_dataAvgAggregateOutputType | null;
    _sum: Tmp_dataSumAggregateOutputType | null;
    _min: Tmp_dataMinAggregateOutputType | null;
    _max: Tmp_dataMaxAggregateOutputType | null;
};
export type Tmp_dataAvgAggregateOutputType = {
    id: number | null;
};
export type Tmp_dataSumAggregateOutputType = {
    id: number | null;
};
export type Tmp_dataMinAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
};
export type Tmp_dataMaxAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
};
export type Tmp_dataCountAggregateOutputType = {
    id: number;
    kind_document: number;
    document: number;
    amount: number;
    state: number;
    _all: number;
};
export type Tmp_dataAvgAggregateInputType = {
    id?: true;
};
export type Tmp_dataSumAggregateInputType = {
    id?: true;
};
export type Tmp_dataMinAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
};
export type Tmp_dataMaxAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
};
export type Tmp_dataCountAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    amount?: true;
    state?: true;
    _all?: true;
};
export type Tmp_dataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_dataWhereInput;
    orderBy?: Prisma.tmp_dataOrderByWithRelationInput | Prisma.tmp_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tmp_dataCountAggregateInputType;
    _avg?: Tmp_dataAvgAggregateInputType;
    _sum?: Tmp_dataSumAggregateInputType;
    _min?: Tmp_dataMinAggregateInputType;
    _max?: Tmp_dataMaxAggregateInputType;
};
export type GetTmp_dataAggregateType<T extends Tmp_dataAggregateArgs> = {
    [P in keyof T & keyof AggregateTmp_data]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTmp_data[P]> : Prisma.GetScalarType<T[P], AggregateTmp_data[P]>;
};
export type tmp_dataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_dataWhereInput;
    orderBy?: Prisma.tmp_dataOrderByWithAggregationInput | Prisma.tmp_dataOrderByWithAggregationInput[];
    by: Prisma.Tmp_dataScalarFieldEnum[] | Prisma.Tmp_dataScalarFieldEnum;
    having?: Prisma.tmp_dataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tmp_dataCountAggregateInputType | true;
    _avg?: Tmp_dataAvgAggregateInputType;
    _sum?: Tmp_dataSumAggregateInputType;
    _min?: Tmp_dataMinAggregateInputType;
    _max?: Tmp_dataMaxAggregateInputType;
};
export type Tmp_dataGroupByOutputType = {
    id: number;
    kind_document: string | null;
    document: string | null;
    amount: string | null;
    state: string | null;
    _count: Tmp_dataCountAggregateOutputType | null;
    _avg: Tmp_dataAvgAggregateOutputType | null;
    _sum: Tmp_dataSumAggregateOutputType | null;
    _min: Tmp_dataMinAggregateOutputType | null;
    _max: Tmp_dataMaxAggregateOutputType | null;
};
export type GetTmp_dataGroupByPayload<T extends tmp_dataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tmp_dataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tmp_dataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tmp_dataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tmp_dataGroupByOutputType[P]>;
}>>;
export type tmp_dataWhereInput = {
    AND?: Prisma.tmp_dataWhereInput | Prisma.tmp_dataWhereInput[];
    OR?: Prisma.tmp_dataWhereInput[];
    NOT?: Prisma.tmp_dataWhereInput | Prisma.tmp_dataWhereInput[];
    id?: Prisma.IntFilter<"tmp_data"> | number;
    kind_document?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    document?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    amount?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    state?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
};
export type tmp_dataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.tmp_dataOrderByRelevanceInput;
};
export type tmp_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.tmp_dataWhereInput | Prisma.tmp_dataWhereInput[];
    OR?: Prisma.tmp_dataWhereInput[];
    NOT?: Prisma.tmp_dataWhereInput | Prisma.tmp_dataWhereInput[];
    kind_document?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    document?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    amount?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
    state?: Prisma.StringNullableFilter<"tmp_data"> | string | null;
}, "id">;
export type tmp_dataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tmp_dataCountOrderByAggregateInput;
    _avg?: Prisma.tmp_dataAvgOrderByAggregateInput;
    _max?: Prisma.tmp_dataMaxOrderByAggregateInput;
    _min?: Prisma.tmp_dataMinOrderByAggregateInput;
    _sum?: Prisma.tmp_dataSumOrderByAggregateInput;
};
export type tmp_dataScalarWhereWithAggregatesInput = {
    AND?: Prisma.tmp_dataScalarWhereWithAggregatesInput | Prisma.tmp_dataScalarWhereWithAggregatesInput[];
    OR?: Prisma.tmp_dataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tmp_dataScalarWhereWithAggregatesInput | Prisma.tmp_dataScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"tmp_data"> | number;
    kind_document?: Prisma.StringNullableWithAggregatesFilter<"tmp_data"> | string | null;
    document?: Prisma.StringNullableWithAggregatesFilter<"tmp_data"> | string | null;
    amount?: Prisma.StringNullableWithAggregatesFilter<"tmp_data"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"tmp_data"> | string | null;
};
export type tmp_dataCreateInput = {
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type tmp_dataUncheckedCreateInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type tmp_dataUpdateInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_dataUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_dataCreateManyInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    amount?: string | null;
    state?: string | null;
};
export type tmp_dataUpdateManyMutationInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_dataUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_dataOrderByRelevanceInput = {
    fields: Prisma.tmp_dataOrderByRelevanceFieldEnum | Prisma.tmp_dataOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type tmp_dataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_dataAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type tmp_dataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_dataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_dataSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type tmp_dataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    amount?: boolean;
    state?: boolean;
}, ExtArgs["result"]["tmp_data"]>;
export type tmp_dataSelectScalar = {
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    amount?: boolean;
    state?: boolean;
};
export type tmp_dataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kind_document" | "document" | "amount" | "state", ExtArgs["result"]["tmp_data"]>;
export type $tmp_dataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tmp_data";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        kind_document: string | null;
        document: string | null;
        amount: string | null;
        state: string | null;
    }, ExtArgs["result"]["tmp_data"]>;
    composites: {};
};
export type tmp_dataGetPayload<S extends boolean | null | undefined | tmp_dataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload, S>;
export type tmp_dataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tmp_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tmp_dataCountAggregateInputType | true;
};
export interface tmp_dataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tmp_data'];
        meta: {
            name: 'tmp_data';
        };
    };
    findUnique<T extends tmp_dataFindUniqueArgs>(args: Prisma.SelectSubset<T, tmp_dataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tmp_dataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tmp_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tmp_dataFindFirstArgs>(args?: Prisma.SelectSubset<T, tmp_dataFindFirstArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tmp_dataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tmp_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tmp_dataFindManyArgs>(args?: Prisma.SelectSubset<T, tmp_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tmp_dataCreateArgs>(args: Prisma.SelectSubset<T, tmp_dataCreateArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tmp_dataCreateManyArgs>(args?: Prisma.SelectSubset<T, tmp_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends tmp_dataDeleteArgs>(args: Prisma.SelectSubset<T, tmp_dataDeleteArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tmp_dataUpdateArgs>(args: Prisma.SelectSubset<T, tmp_dataUpdateArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tmp_dataDeleteManyArgs>(args?: Prisma.SelectSubset<T, tmp_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tmp_dataUpdateManyArgs>(args: Prisma.SelectSubset<T, tmp_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends tmp_dataUpsertArgs>(args: Prisma.SelectSubset<T, tmp_dataUpsertArgs<ExtArgs>>): Prisma.Prisma__tmp_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tmp_dataCountArgs>(args?: Prisma.Subset<T, tmp_dataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tmp_dataCountAggregateOutputType> : number>;
    aggregate<T extends Tmp_dataAggregateArgs>(args: Prisma.Subset<T, Tmp_dataAggregateArgs>): Prisma.PrismaPromise<GetTmp_dataAggregateType<T>>;
    groupBy<T extends tmp_dataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tmp_dataGroupByArgs['orderBy'];
    } : {
        orderBy?: tmp_dataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tmp_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTmp_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tmp_dataFieldRefs;
}
export interface Prisma__tmp_dataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tmp_dataFieldRefs {
    readonly id: Prisma.FieldRef<"tmp_data", 'Int'>;
    readonly kind_document: Prisma.FieldRef<"tmp_data", 'String'>;
    readonly document: Prisma.FieldRef<"tmp_data", 'String'>;
    readonly amount: Prisma.FieldRef<"tmp_data", 'String'>;
    readonly state: Prisma.FieldRef<"tmp_data", 'String'>;
}
export type tmp_dataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_dataWhereUniqueInput;
};
export type tmp_dataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_dataWhereUniqueInput;
};
export type tmp_dataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_dataWhereInput;
    orderBy?: Prisma.tmp_dataOrderByWithRelationInput | Prisma.tmp_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_dataScalarFieldEnum | Prisma.Tmp_dataScalarFieldEnum[];
};
export type tmp_dataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_dataWhereInput;
    orderBy?: Prisma.tmp_dataOrderByWithRelationInput | Prisma.tmp_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_dataScalarFieldEnum | Prisma.Tmp_dataScalarFieldEnum[];
};
export type tmp_dataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_dataWhereInput;
    orderBy?: Prisma.tmp_dataOrderByWithRelationInput | Prisma.tmp_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_dataScalarFieldEnum | Prisma.Tmp_dataScalarFieldEnum[];
};
export type tmp_dataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.tmp_dataCreateInput, Prisma.tmp_dataUncheckedCreateInput>;
};
export type tmp_dataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tmp_dataCreateManyInput | Prisma.tmp_dataCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tmp_dataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tmp_dataUpdateInput, Prisma.tmp_dataUncheckedUpdateInput>;
    where: Prisma.tmp_dataWhereUniqueInput;
};
export type tmp_dataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tmp_dataUpdateManyMutationInput, Prisma.tmp_dataUncheckedUpdateManyInput>;
    where?: Prisma.tmp_dataWhereInput;
    limit?: number;
};
export type tmp_dataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_dataWhereUniqueInput;
    create: Prisma.XOR<Prisma.tmp_dataCreateInput, Prisma.tmp_dataUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tmp_dataUpdateInput, Prisma.tmp_dataUncheckedUpdateInput>;
};
export type tmp_dataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_dataWhereUniqueInput;
};
export type tmp_dataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_dataWhereInput;
    limit?: number;
};
export type tmp_dataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_dataOmit<ExtArgs> | null;
};
