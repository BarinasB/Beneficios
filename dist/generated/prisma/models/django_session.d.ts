import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type django_sessionModel = runtime.Types.Result.DefaultSelection<Prisma.$django_sessionPayload>;
export type AggregateDjango_session = {
    _count: Django_sessionCountAggregateOutputType | null;
    _min: Django_sessionMinAggregateOutputType | null;
    _max: Django_sessionMaxAggregateOutputType | null;
};
export type Django_sessionMinAggregateOutputType = {
    session_key: string | null;
    session_data: string | null;
    expire_date: Date | null;
};
export type Django_sessionMaxAggregateOutputType = {
    session_key: string | null;
    session_data: string | null;
    expire_date: Date | null;
};
export type Django_sessionCountAggregateOutputType = {
    session_key: number;
    session_data: number;
    expire_date: number;
    _all: number;
};
export type Django_sessionMinAggregateInputType = {
    session_key?: true;
    session_data?: true;
    expire_date?: true;
};
export type Django_sessionMaxAggregateInputType = {
    session_key?: true;
    session_data?: true;
    expire_date?: true;
};
export type Django_sessionCountAggregateInputType = {
    session_key?: true;
    session_data?: true;
    expire_date?: true;
    _all?: true;
};
export type Django_sessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_sessionWhereInput;
    orderBy?: Prisma.django_sessionOrderByWithRelationInput | Prisma.django_sessionOrderByWithRelationInput[];
    cursor?: Prisma.django_sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Django_sessionCountAggregateInputType;
    _min?: Django_sessionMinAggregateInputType;
    _max?: Django_sessionMaxAggregateInputType;
};
export type GetDjango_sessionAggregateType<T extends Django_sessionAggregateArgs> = {
    [P in keyof T & keyof AggregateDjango_session]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDjango_session[P]> : Prisma.GetScalarType<T[P], AggregateDjango_session[P]>;
};
export type django_sessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_sessionWhereInput;
    orderBy?: Prisma.django_sessionOrderByWithAggregationInput | Prisma.django_sessionOrderByWithAggregationInput[];
    by: Prisma.Django_sessionScalarFieldEnum[] | Prisma.Django_sessionScalarFieldEnum;
    having?: Prisma.django_sessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Django_sessionCountAggregateInputType | true;
    _min?: Django_sessionMinAggregateInputType;
    _max?: Django_sessionMaxAggregateInputType;
};
export type Django_sessionGroupByOutputType = {
    session_key: string;
    session_data: string;
    expire_date: Date;
    _count: Django_sessionCountAggregateOutputType | null;
    _min: Django_sessionMinAggregateOutputType | null;
    _max: Django_sessionMaxAggregateOutputType | null;
};
export type GetDjango_sessionGroupByPayload<T extends django_sessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Django_sessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Django_sessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Django_sessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Django_sessionGroupByOutputType[P]>;
}>>;
export type django_sessionWhereInput = {
    AND?: Prisma.django_sessionWhereInput | Prisma.django_sessionWhereInput[];
    OR?: Prisma.django_sessionWhereInput[];
    NOT?: Prisma.django_sessionWhereInput | Prisma.django_sessionWhereInput[];
    session_key?: Prisma.StringFilter<"django_session"> | string;
    session_data?: Prisma.StringFilter<"django_session"> | string;
    expire_date?: Prisma.DateTimeFilter<"django_session"> | Date | string;
};
export type django_sessionOrderByWithRelationInput = {
    session_key?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    expire_date?: Prisma.SortOrder;
    _relevance?: Prisma.django_sessionOrderByRelevanceInput;
};
export type django_sessionWhereUniqueInput = Prisma.AtLeast<{
    session_key?: string;
    AND?: Prisma.django_sessionWhereInput | Prisma.django_sessionWhereInput[];
    OR?: Prisma.django_sessionWhereInput[];
    NOT?: Prisma.django_sessionWhereInput | Prisma.django_sessionWhereInput[];
    session_data?: Prisma.StringFilter<"django_session"> | string;
    expire_date?: Prisma.DateTimeFilter<"django_session"> | Date | string;
}, "session_key">;
export type django_sessionOrderByWithAggregationInput = {
    session_key?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    expire_date?: Prisma.SortOrder;
    _count?: Prisma.django_sessionCountOrderByAggregateInput;
    _max?: Prisma.django_sessionMaxOrderByAggregateInput;
    _min?: Prisma.django_sessionMinOrderByAggregateInput;
};
export type django_sessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.django_sessionScalarWhereWithAggregatesInput | Prisma.django_sessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.django_sessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.django_sessionScalarWhereWithAggregatesInput | Prisma.django_sessionScalarWhereWithAggregatesInput[];
    session_key?: Prisma.StringWithAggregatesFilter<"django_session"> | string;
    session_data?: Prisma.StringWithAggregatesFilter<"django_session"> | string;
    expire_date?: Prisma.DateTimeWithAggregatesFilter<"django_session"> | Date | string;
};
export type django_sessionCreateInput = {
    session_key: string;
    session_data: string;
    expire_date: Date | string;
};
export type django_sessionUncheckedCreateInput = {
    session_key: string;
    session_data: string;
    expire_date: Date | string;
};
export type django_sessionUpdateInput = {
    session_key?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.StringFieldUpdateOperationsInput | string;
    expire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_sessionUncheckedUpdateInput = {
    session_key?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.StringFieldUpdateOperationsInput | string;
    expire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_sessionCreateManyInput = {
    session_key: string;
    session_data: string;
    expire_date: Date | string;
};
export type django_sessionUpdateManyMutationInput = {
    session_key?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.StringFieldUpdateOperationsInput | string;
    expire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_sessionUncheckedUpdateManyInput = {
    session_key?: Prisma.StringFieldUpdateOperationsInput | string;
    session_data?: Prisma.StringFieldUpdateOperationsInput | string;
    expire_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type django_sessionOrderByRelevanceInput = {
    fields: Prisma.django_sessionOrderByRelevanceFieldEnum | Prisma.django_sessionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type django_sessionCountOrderByAggregateInput = {
    session_key?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    expire_date?: Prisma.SortOrder;
};
export type django_sessionMaxOrderByAggregateInput = {
    session_key?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    expire_date?: Prisma.SortOrder;
};
export type django_sessionMinOrderByAggregateInput = {
    session_key?: Prisma.SortOrder;
    session_data?: Prisma.SortOrder;
    expire_date?: Prisma.SortOrder;
};
export type django_sessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    session_key?: boolean;
    session_data?: boolean;
    expire_date?: boolean;
}, ExtArgs["result"]["django_session"]>;
export type django_sessionSelectScalar = {
    session_key?: boolean;
    session_data?: boolean;
    expire_date?: boolean;
};
export type django_sessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"session_key" | "session_data" | "expire_date", ExtArgs["result"]["django_session"]>;
export type $django_sessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "django_session";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        session_key: string;
        session_data: string;
        expire_date: Date;
    }, ExtArgs["result"]["django_session"]>;
    composites: {};
};
export type django_sessionGetPayload<S extends boolean | null | undefined | django_sessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$django_sessionPayload, S>;
export type django_sessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<django_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Django_sessionCountAggregateInputType | true;
};
export interface django_sessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['django_session'];
        meta: {
            name: 'django_session';
        };
    };
    findUnique<T extends django_sessionFindUniqueArgs>(args: Prisma.SelectSubset<T, django_sessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends django_sessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, django_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends django_sessionFindFirstArgs>(args?: Prisma.SelectSubset<T, django_sessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends django_sessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, django_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends django_sessionFindManyArgs>(args?: Prisma.SelectSubset<T, django_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends django_sessionCreateArgs>(args: Prisma.SelectSubset<T, django_sessionCreateArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends django_sessionCreateManyArgs>(args?: Prisma.SelectSubset<T, django_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends django_sessionDeleteArgs>(args: Prisma.SelectSubset<T, django_sessionDeleteArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends django_sessionUpdateArgs>(args: Prisma.SelectSubset<T, django_sessionUpdateArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends django_sessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, django_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends django_sessionUpdateManyArgs>(args: Prisma.SelectSubset<T, django_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends django_sessionUpsertArgs>(args: Prisma.SelectSubset<T, django_sessionUpsertArgs<ExtArgs>>): Prisma.Prisma__django_sessionClient<runtime.Types.Result.GetResult<Prisma.$django_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends django_sessionCountArgs>(args?: Prisma.Subset<T, django_sessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Django_sessionCountAggregateOutputType> : number>;
    aggregate<T extends Django_sessionAggregateArgs>(args: Prisma.Subset<T, Django_sessionAggregateArgs>): Prisma.PrismaPromise<GetDjango_sessionAggregateType<T>>;
    groupBy<T extends django_sessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: django_sessionGroupByArgs['orderBy'];
    } : {
        orderBy?: django_sessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, django_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: django_sessionFieldRefs;
}
export interface Prisma__django_sessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface django_sessionFieldRefs {
    readonly session_key: Prisma.FieldRef<"django_session", 'String'>;
    readonly session_data: Prisma.FieldRef<"django_session", 'String'>;
    readonly expire_date: Prisma.FieldRef<"django_session", 'DateTime'>;
}
export type django_sessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where: Prisma.django_sessionWhereUniqueInput;
};
export type django_sessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where: Prisma.django_sessionWhereUniqueInput;
};
export type django_sessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where?: Prisma.django_sessionWhereInput;
    orderBy?: Prisma.django_sessionOrderByWithRelationInput | Prisma.django_sessionOrderByWithRelationInput[];
    cursor?: Prisma.django_sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_sessionScalarFieldEnum | Prisma.Django_sessionScalarFieldEnum[];
};
export type django_sessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where?: Prisma.django_sessionWhereInput;
    orderBy?: Prisma.django_sessionOrderByWithRelationInput | Prisma.django_sessionOrderByWithRelationInput[];
    cursor?: Prisma.django_sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_sessionScalarFieldEnum | Prisma.Django_sessionScalarFieldEnum[];
};
export type django_sessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where?: Prisma.django_sessionWhereInput;
    orderBy?: Prisma.django_sessionOrderByWithRelationInput | Prisma.django_sessionOrderByWithRelationInput[];
    cursor?: Prisma.django_sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Django_sessionScalarFieldEnum | Prisma.Django_sessionScalarFieldEnum[];
};
export type django_sessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_sessionCreateInput, Prisma.django_sessionUncheckedCreateInput>;
};
export type django_sessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.django_sessionCreateManyInput | Prisma.django_sessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type django_sessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.django_sessionUpdateInput, Prisma.django_sessionUncheckedUpdateInput>;
    where: Prisma.django_sessionWhereUniqueInput;
};
export type django_sessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.django_sessionUpdateManyMutationInput, Prisma.django_sessionUncheckedUpdateManyInput>;
    where?: Prisma.django_sessionWhereInput;
    limit?: number;
};
export type django_sessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where: Prisma.django_sessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.django_sessionCreateInput, Prisma.django_sessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.django_sessionUpdateInput, Prisma.django_sessionUncheckedUpdateInput>;
};
export type django_sessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
    where: Prisma.django_sessionWhereUniqueInput;
};
export type django_sessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.django_sessionWhereInput;
    limit?: number;
};
export type django_sessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.django_sessionSelect<ExtArgs> | null;
    omit?: Prisma.django_sessionOmit<ExtArgs> | null;
};
