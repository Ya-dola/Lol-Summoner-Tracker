import React, {Fragment} from 'react';
import {Main} from "grommet";
import HeaderBar from "./HeaderBar";

function Home() {

    return (
        <Fragment>
            {/*<h1>Ello</h1>*/}
            <Main fill="vertical" flex="grow" overflow="auto" direction="column" justify="start" align="center">
                <HeaderBar/>
            </Main>
        </Fragment>
    );
}

export default Home;
