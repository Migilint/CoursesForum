import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";
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