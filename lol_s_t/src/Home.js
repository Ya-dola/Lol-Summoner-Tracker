import React, {Fragment} from 'react';
import {Main} from "grommet";
import HeaderBar from "./HeaderBar";
import LaneSummoner from "./LaneSummoner";

function Home() {

    return (
        <Fragment>
            {/*<h1>Ello</h1>*/}
            <Main fill="vertical" direction="column" justify="start" align="center">
                <HeaderBar/>
                <LaneSummoner/>
                {/*<LaneSummoner/>*/}
                {/*<LaneSummoner/>*/}
                {/*<LaneSummoner/>*/}
                {/*<LaneSummoner/>*/}
            </Main>
        </Fragment>
    );
}

export default Home;
