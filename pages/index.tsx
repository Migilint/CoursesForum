import {Button, Htag, Input, Ptag, Rating, Tag, TextArea} from "@/components";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/helpers/api";
import styles from '@/components/Card/Card.module.css';
import cn from "classnames";


function Home({menu}: HomeProps) {
    const [rating, setRating] = useState<number>(4);


    return (
        <>
            <Htag tag={'h1'}>Приветсвую на моём веб-сайте!</Htag>
            <Ptag size={'m'}>Здесь, ты можешь увидеть все использованные компоненты к моему pet-проекту. Welcome!) </Ptag>
            <div style={{
                padding: "15px",
                marginTop: "10px",
                border: "solid 1px #DFDFDF"
            }}
            className={cn(styles.card, styles.blue)}
            >
                <Button appearance='primary' arrow={"right"} style={{marginRight: "5px"}}>Кнопка</Button>
                <Button appearance='ghost'>Кнопка</Button>
                <Ptag> Hello my friends </Ptag>
                <Ptag size={'b'}> Hello my friends </Ptag>
                <Ptag size={'s'}> Hello my friends </Ptag>
                <Tag size='s'>Ghost</Tag>
                <Tag size='m' color='red'>Red</Tag>
                <Tag size='m' color='green'>Green</Tag>
                <Tag size='s' color='primary'>Color primary</Tag>
                <Rating rating={rating} isEditable setRating={setRating}/>
                <Input placeholder={"test"} style={{marginBottom: "10px"}}/>
                <TextArea placeholder={"test"}/>
            </div>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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
    menu: MenuItem[],
    firstCategory: number;
}