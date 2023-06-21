import {Button, Htag, Ptag, Rating, Tag} from "@/components";
import {useEffect, useState} from "react";
import {withLayout} from "@/layout/Layout";


function Home() {
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
      </>
  );
}

export default withLayout(Home);