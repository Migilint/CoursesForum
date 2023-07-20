import {Button, Htag, Input, Ptag, Rating, Tag, TextArea} from "@/components";
import {useEffect, useState} from "react";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/helpers/api";


function Home({menu}:HomeProps ) {
    const [rating, setRating] = useState<number>(4);


  return (
      <>
          <Button appearance='primary' arrow={"right"}>Кнопка</Button>
          <Button appearance='ghost'>Кнопка</Button>
          <Ptag> Hello my friends </Ptag>
          <Ptag size={'b'}> Hello my friends </Ptag>
          <Ptag size={'s'}> Hello my friends </Ptag>
          <Tag size='s'>Ghost</Tag>
          <Tag size='m' color='red'>Red</Tag>
          <Tag size='m' color='green'>Green</Tag>
          <Tag size='s' color='primary'>Color primary</Tag>
          <Rating rating={rating} isEditable setRating={setRating}/>
          <Input placeholder={"test"} />
          <TextArea placeholder={"test"} />

      </>
  );
}

export default withLayout(Home);

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
    firstCategory: number;
}