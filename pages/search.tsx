import {withLayout} from "@/layout/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "@/interfaces/menu.interface";
import {firstLevelMenu} from "@/helpers/helpers";
import {TopLevelCategory} from "@/interfaces/page.interface";
import TopPage from "@/pages/[type]/[alias]";
import {API} from "@/helpers/api";


function Search({menu}:HomeProps ) {



    return (
        <>
            Search
        </>
    );
}

export default withLayout(Search);



export const getStaticProps: GetStaticProps<HomeProps>  = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

export interface HomeProps extends Record<string, unknown> {
    menu:  MenuItem[],
    firstCategory: TopLevelCategory;
}