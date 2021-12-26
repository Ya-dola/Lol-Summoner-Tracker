import React, {Fragment} from 'react';
import {Main} from "grommet";
import HeaderBar from "./HeaderBar";
import LaneSummoner from "./LaneSummoner";
import TopIcon from "./pos_icons/icon-position-top.png"
import JgIcon from "./pos_icons/icon-position-jungle.png"
import MidIcon from "./pos_icons/icon-position-middle.png"
import BotIcon from "./pos_icons/icon-position-bottom.png"
import SuppIcon from "./pos_icons/icon-position-utility.png"

function Home() {

    return (
        <Fragment>
            <Main fill="vertical" direction="column" justify="start" align="center">
                <HeaderBar/>
                <LaneSummoner lane={"Top"} laneIcon={TopIcon}/>
                {/*<LaneSummoner lane={"Jungle"} laneIcon={JgIcon}/>*/}
                {/*<LaneSummoner lane={"Mid"} laneIcon={MidIcon}/>*/}
                {/*<LaneSummoner lane={"Bot"} laneIcon={BotIcon}/>*/}
                {/*<LaneSummoner lane={"Support"} laneIcon={SuppIcon}/>*/}
            </Main>
        </Fragment>
    );
}

export default Home;
