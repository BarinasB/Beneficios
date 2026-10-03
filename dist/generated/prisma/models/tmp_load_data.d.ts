import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tmp_load_dataModel = runtime.Types.Result.DefaultSelection<Prisma.$tmp_load_dataPayload>;
export type AggregateTmp_load_data = {
    _count: Tmp_load_dataCountAggregateOutputType | null;
    _avg: Tmp_load_dataAvgAggregateOutputType | null;
    _sum: Tmp_load_dataSumAggregateOutputType | null;
    _min: Tmp_load_dataMinAggregateOutputType | null;
    _max: Tmp_load_dataMaxAggregateOutputType | null;
};
export type Tmp_load_dataAvgAggregateOutputType = {
    id: number | null;
};
export type Tmp_load_dataSumAggregateOutputType = {
    id: number | null;
};
export type Tmp_load_dataMinAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    state: string | null;
};
export type Tmp_load_dataMaxAggregateOutputType = {
    id: number | null;
    kind_document: string | null;
    document: string | null;
    state: string | null;
};
export type Tmp_load_dataCountAggregateOutputType = {
    id: number;
    kind_document: number;
    document: number;
    state: number;
    _all: number;
};
export type Tmp_load_dataAvgAggregateInputType = {
    id?: true;
};
export type Tmp_load_dataSumAggregateInputType = {
    id?: true;
};
export type Tmp_load_dataMinAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    state?: true;
};
export type Tmp_load_dataMaxAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    state?: true;
};
export type Tmp_load_dataCountAggregateInputType = {
    id?: true;
    kind_document?: true;
    document?: true;
    state?: true;
    _all?: true;
};
export type Tmp_load_dataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_load_dataWhereInput;
    orderBy?: Prisma.tmp_load_dataOrderByWithRelationInput | Prisma.tmp_load_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_load_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tmp_load_dataCountAggregateInputType;
    _avg?: Tmp_load_dataAvgAggregateInputType;
    _sum?: Tmp_load_dataSumAggregateInputType;
    _min?: Tmp_load_dataMinAggregateInputType;
    _max?: Tmp_load_dataMaxAggregateInputType;
};
export type GetTmp_load_dataAggregateType<T extends Tmp_load_dataAggregateArgs> = {
    [P in keyof T & keyof AggregateTmp_load_data]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTmp_load_data[P]> : Prisma.GetScalarType<T[P], AggregateTmp_load_data[P]>;
};
export type tmp_load_dataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_load_dataWhereInput;
    orderBy?: Prisma.tmp_load_dataOrderByWithAggregationInput | Prisma.tmp_load_dataOrderByWithAggregationInput[];
    by: Prisma.Tmp_load_dataScalarFieldEnum[] | Prisma.Tmp_load_dataScalarFieldEnum;
    having?: Prisma.tmp_load_dataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tmp_load_dataCountAggregateInputType | true;
    _avg?: Tmp_load_dataAvgAggregateInputType;
    _sum?: Tmp_load_dataSumAggregateInputType;
    _min?: Tmp_load_dataMinAggregateInputType;
    _max?: Tmp_load_dataMaxAggregateInputType;
};
export type Tmp_load_dataGroupByOutputType = {
    id: number;
    kind_document: string | null;
    document: string | null;
    state: string | null;
    _count: Tmp_load_dataCountAggregateOutputType | null;
    _avg: Tmp_load_dataAvgAggregateOutputType | null;
    _sum: Tmp_load_dataSumAggregateOutputType | null;
    _min: Tmp_load_dataMinAggregateOutputType | null;
    _max: Tmp_load_dataMaxAggregateOutputType | null;
};
export type GetTmp_load_dataGroupByPayload<T extends tmp_load_dataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tmp_load_dataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tmp_load_dataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tmp_load_dataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tmp_load_dataGroupByOutputType[P]>;
}>>;
export type tmp_load_dataWhereInput = {
    AND?: Prisma.tmp_load_dataWhereInput | Prisma.tmp_load_dataWhereInput[];
    OR?: Prisma.tmp_load_dataWhereInput[];
    NOT?: Prisma.tmp_load_dataWhereInput | Prisma.tmp_load_dataWhereInput[];
    id?: Prisma.IntFilter<"tmp_load_data"> | number;
    kind_document?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
    document?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
    state?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
};
export type tmp_load_dataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.tmp_load_dataOrderByRelevanceInput;
};
export type tmp_load_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.tmp_load_dataWhereInput | Prisma.tmp_load_dataWhereInput[];
    OR?: Prisma.tmp_load_dataWhereInput[];
    NOT?: Prisma.tmp_load_dataWhereInput | Prisma.tmp_load_dataWhereInput[];
    kind_document?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
    document?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
    state?: Prisma.StringNullableFilter<"tmp_load_data"> | string | null;
}, "id">;
export type tmp_load_dataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tmp_load_dataCountOrderByAggregateInput;
    _avg?: Prisma.tmp_load_dataAvgOrderByAggregateInput;
    _max?: Prisma.tmp_load_dataMaxOrderByAggregateInput;
    _min?: Prisma.tmp_load_dataMinOrderByAggregateInput;
    _sum?: Prisma.tmp_load_dataSumOrderByAggregateInput;
};
export type tmp_load_dataScalarWhereWithAggregatesInput = {
    AND?: Prisma.tmp_load_dataScalarWhereWithAggregatesInput | Prisma.tmp_load_dataScalarWhereWithAggregatesInput[];
    OR?: Prisma.tmp_load_dataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tmp_load_dataScalarWhereWithAggregatesInput | Prisma.tmp_load_dataScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"tmp_load_data"> | number;
    kind_document?: Prisma.StringNullableWithAggregatesFilter<"tmp_load_data"> | string | null;
    document?: Prisma.StringNullableWithAggregatesFilter<"tmp_load_data"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"tmp_load_data"> | string | null;
};
export type tmp_load_dataCreateInput = {
    kind_document?: string | null;
    document?: string | null;
    state?: string | null;
};
export type tmp_load_dataUncheckedCreateInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    state?: string | null;
};
export type tmp_load_dataUpdateInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_load_dataUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_load_dataCreateManyInput = {
    id?: number;
    kind_document?: string | null;
    document?: string | null;
    state?: string | null;
};
export type tmp_load_dataUpdateManyMutationInput = {
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_load_dataUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    kind_document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tmp_load_dataOrderByRelevanceInput = {
    fields: Prisma.tmp_load_dataOrderByRelevanceFieldEnum | Prisma.tmp_load_dataOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type tmp_load_dataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_load_dataAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type tmp_load_dataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_load_dataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kind_document?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type tmp_load_dataSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type tmp_load_dataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    state?: boolean;
}, ExtArgs["result"]["tmp_load_data"]>;
export type tmp_load_dataSelectScalar = {
    id?: boolean;
    kind_document?: boolean;
    document?: boolean;
    state?: boolean;
};
export type tmp_load_dataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kind_document" | "document" | "state", ExtArgs["result"]["tmp_load_data"]>;
export type $tmp_load_dataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tmp_load_data";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        kind_document: string | null;
        document: string | null;
        state: string | null;
    }, ExtArgs["result"]["tmp_load_data"]>;
    composites: {};
};
export type tmp_load_dataGetPayload<S extends boolean | null | undefined | tmp_load_dataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload, S>;
export type tmp_load_dataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tmp_load_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tmp_load_dataCountAggregateInputType | true;
};
export interface tmp_load_dataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tmp_load_data'];
        meta: {
            name: 'tmp_load_data';
        };
    };
    findUnique<T extends tmp_load_dataFindUniqueArgs>(args: Prisma.SelectSubset<T, tmp_load_dataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tmp_load_dataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tmp_load_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tmp_load_dataFindFirstArgs>(args?: Prisma.SelectSubset<T, tmp_load_dataFindFirstArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tmp_load_dataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tmp_load_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tmp_load_dataFindManyArgs>(args?: Prisma.SelectSubset<T, tmp_load_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tmp_load_dataCreateArgs>(args: Prisma.SelectSubset<T, tmp_load_dataCreateArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tmp_load_dataCreateManyArgs>(args?: Prisma.SelectSubset<T, tmp_load_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends tmp_load_dataDeleteArgs>(args: Prisma.SelectSubset<T, tmp_load_dataDeleteArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tmp_load_dataUpdateArgs>(args: Prisma.SelectSubset<T, tmp_load_dataUpdateArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tmp_load_dataDeleteManyArgs>(args?: Prisma.SelectSubset<T, tmp_load_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tmp_load_dataUpdateManyArgs>(args: Prisma.SelectSubset<T, tmp_load_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends tmp_load_dataUpsertArgs>(args: Prisma.SelectSubset<T, tmp_load_dataUpsertArgs<ExtArgs>>): Prisma.Prisma__tmp_load_dataClient<runtime.Types.Result.GetResult<Prisma.$tmp_load_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tmp_load_dataCountArgs>(args?: Prisma.Subset<T, tmp_load_dataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tmp_load_dataCountAggregateOutputType> : number>;
    aggregate<T extends Tmp_load_dataAggregateArgs>(args: Prisma.Subset<T, Tmp_load_dataAggregateArgs>): Prisma.PrismaPromise<GetTmp_load_dataAggregateType<T>>;
    groupBy<T extends tmp_load_dataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tmp_load_dataGroupByArgs['orderBy'];
    } : {
        orderBy?: tmp_load_dataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tmp_load_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTmp_load_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tmp_load_dataFieldRefs;
}
export interface Prisma__tmp_load_dataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tmp_load_dataFieldRefs {
    readonly id: Prisma.FieldRef<"tmp_load_data", 'Int'>;
    readonly kind_document: Prisma.FieldRef<"tmp_load_data", 'String'>;
    readonly document: Prisma.FieldRef<"tmp_load_data", 'String'>;
    readonly state: Prisma.FieldRef<"tmp_load_data", 'String'>;
}
export type tmp_load_dataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_load_dataWhereUniqueInput;
};
export type tmp_load_dataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_load_dataWhereUniqueInput;
};
export type tmp_load_dataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_load_dataWhereInput;
    orderBy?: Prisma.tmp_load_dataOrderByWithRelationInput | Prisma.tmp_load_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_load_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_load_dataScalarFieldEnum | Prisma.Tmp_load_dataScalarFieldEnum[];
};
export type tmp_load_dataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_load_dataWhereInput;
    orderBy?: Prisma.tmp_load_dataOrderByWithRelationInput | Prisma.tmp_load_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_load_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_load_dataScalarFieldEnum | Prisma.Tmp_load_dataScalarFieldEnum[];
};
export type tmp_load_dataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where?: Prisma.tmp_load_dataWhereInput;
    orderBy?: Prisma.tmp_load_dataOrderByWithRelationInput | Prisma.tmp_load_dataOrderByWithRelationInput[];
    cursor?: Prisma.tmp_load_dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tmp_load_dataScalarFieldEnum | Prisma.Tmp_load_dataScalarFieldEnum[];
};
export type tmp_load_dataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.tmp_load_dataCreateInput, Prisma.tmp_load_dataUncheckedCreateInput>;
};
export type tmp_load_dataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tmp_load_dataCreateManyInput | Prisma.tmp_load_dataCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tmp_load_dataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tmp_load_dataUpdateInput, Prisma.tmp_load_dataUncheckedUpdateInput>;
    where: Prisma.tmp_load_dataWhereUniqueInput;
};
export type tmp_load_dataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tmp_load_dataUpdateManyMutationInput, Prisma.tmp_load_dataUncheckedUpdateManyInput>;
    where?: Prisma.tmp_load_dataWhereInput;
    limit?: number;
};
export type tmp_load_dataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_load_dataWhereUniqueInput;
    create: Prisma.XOR<Prisma.tmp_load_dataCreateInput, Prisma.tmp_load_dataUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tmp_load_dataUpdateInput, Prisma.tmp_load_dataUncheckedUpdateInput>;
};
export type tmp_load_dataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
    where: Prisma.tmp_load_dataWhereUniqueInput;
};
export type tmp_load_dataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tmp_load_dataWhereInput;
    limit?: number;
};
export type tmp_load_dataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tmp_load_dataSelect<ExtArgs> | null;
    omit?: Prisma.tmp_load_dataOmit<ExtArgs> | null;
};
