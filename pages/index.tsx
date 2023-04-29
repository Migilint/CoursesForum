import {Button, Htag, Ptag, Tag} from "@/components";

export default function Home() {

  return (
      <div>
          <Htag tag='h1'>Text</Htag>
          <Button appearance='primary' arrow={"right"}>Кнопка</Button>
          <Button appearance='ghost'>Кнопка</Button>
          <Ptag> Hello my friends </Ptag>
          <Ptag size={'b'}> Hello my friends </Ptag>
          <Ptag size={'s'}> Hello my friends </Ptag>
          <Tag size='s'>Ghost</Tag>
          <Tag size='m' color='red'>Red</Tag>
          <Tag size='m' color='green'>Green</Tag>
          <Tag size='s' color='primary'>Color primary</Tag>
      </div>
  );
}
