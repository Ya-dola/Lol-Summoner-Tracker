import React, {Fragment} from 'react';
import {Main} from "grommet";
import HeaderBar from "./HeaderBar";
import LaneSummonerTimer from "./LaneSummonerTimer";
import TopIcon from "./pos_icons/icon-position-top.png"
import JgIcon from "./pos_icons/icon-position-jungle.png"
import MidIcon from "./pos_icons/icon-position-middle.png"
import BotIcon from "./pos_icons/icon-position-bottom.png"
import SuppIcon from "./pos_icons/icon-position-utility.png"

function Home() {

    return (
        <Fragment>
            <Main fill="vertical" direction="column" justify="start" align="center" overflow="hidden">
                <HeaderBar/>
                <LaneSummonerTimer lane={"Top"} laneIcon={TopIcon}/>
                {/*<LaneSummonerTimer lane={"Jungle"} laneIcon={JgIcon}/>*/}
                {/*<LaneSummonerTimer lane={"Mid"} laneIcon={MidIcon}/>*/}
                {/*<LaneSummonerTimer lane={"Bot"} laneIcon={BotIcon}/>*/}
                {/*<LaneSummonerTimer lane={"Support"} laneIcon={SuppIcon}/>*/}
            </Main>
        </Fragment>
    );
}

export default Home;
