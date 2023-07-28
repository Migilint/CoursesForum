import {withLayout} from "@/layout/Layout";
import {Htag} from "@/components";
import React from 'react';



function Error500() {
    return (
        <>
            <Htag tag={"h1"}>Ошибка 500</Htag>
        </>
    );
}

export default withLayout(Error500);