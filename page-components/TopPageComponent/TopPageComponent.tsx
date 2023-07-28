import {TopPageComponentProps} from "@/page-components/TopPageComponent/TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import React, {useEffect, useReducer} from "react";
import {Advantage, HhData, Htag, Product, Sort, Tag} from "@/components";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {SortEnum} from "@/components/Sort/Sort.props";
import {sortReducer} from "@/page-components/TopPageComponent/sort.reducer";
import {useScrollY} from "@/hooks/useScrollY";
import {useReducedMotion} from "framer-motion";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const shouldReduceMotion = useReducedMotion();
    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'m'} aria-label={products.length + "элементов"}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div role={"list"}>
                {sortedProducts && sortedProducts.map(p => (<Product role={"list-item"} layout={!shouldReduceMotion} key={p._id} product={p}/>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.some(item => item.description.length > 1 && item.title.length > 1) &&
                <>
                    <Htag tag={"h2"}>Преимущества</Htag>
                    <Advantage advantages={page.advantages}/>
                </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag={"h2"}>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color={'primary'}>{t}</Tag>)}
        </div>
    );
};