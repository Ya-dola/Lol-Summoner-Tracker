import React, {Fragment, useState} from 'react';
import {Main, Text} from "grommet";
import HeaderBar from "./HeaderBar";
import LaneSummonerTimer from "./LaneSummonerTimer";
import LaneSummonerSelect from "./LaneSummonerSelect";
import TopIcon from "./pos_icons/icon-position-top.png"
import JgIcon from "./pos_icons/icon-position-jungle.png"
import MidIcon from "./pos_icons/icon-position-middle.png"
import BotIcon from "./pos_icons/icon-position-bottom.png"
import SuppIcon from "./pos_icons/icon-position-utility.png"

function Home() {

    const [summsTopFlash, setSummsTopFlash] = useState(true);
    const [summsTopIgnite, setSummsTopIgnite] = useState(false);
    const [summsTopTeleport, setSummsTopTeleport] = useState(false);
    const [summsTopGhost, setSummsTopGhost] = useState(false);
    const [summsTopHeal, setSummsTopHeal] = useState(false);
    const [summsTopExhaust, setSummsTopExhaust] = useState(false);
    const [summsTopBarrier, setSummsTopBarrier] = useState(false);
    const [summsTopCleanse, setSummsTopCleanse] = useState(false);
    const [summsTopSmite, setSummsTopSmite] = useState(false);


    return (<Fragment>
        <Main fill="vertical" direction="column" justify="start" align="center" overflow="hidden">
            <HeaderBar/>
            <LaneSummonerTimer lane={"Top"} laneIcon={TopIcon}/>
            <LaneSummonerSelect lane={"Top"} laneIcon={TopIcon}
                                summsFlash={summsTopFlash} setSummsFlash={setSummsTopFlash}
                                summsIgnite={summsTopIgnite} setSummsIgnite={setSummsTopIgnite}
                                summsTeleport={summsTopTeleport} setSummsTeleport={setSummsTopTeleport}
                                summsGhost={summsTopGhost} setSummsGhost={setSummsTopGhost}
                                summsHeal={summsTopHeal} setSummsHeal={setSummsTopHeal}
                                summsExhaust={summsTopExhaust} setSummsExhaust={setSummsTopExhaust}
                                summsBarrier={summsTopBarrier} setSummsBarrier={setSummsTopBarrier}
                                summsCleanse={summsTopCleanse} setSummsCleanse={setSummsTopCleanse}
                                summsSmite={summsTopSmite} setSummsSmite={setSummsTopSmite}/>

            {/*DEBUG*/}
            <Text>Top Flash: {summsTopFlash.toString()}</Text>
            <Text>Top Ignite: {summsTopIgnite.toString()}</Text>
            <Text>Top Teleport: {summsTopTeleport.toString()}</Text>
            <Text>Top Ghost: {summsTopGhost.toString()}</Text>
            <Text>Top Heal: {summsTopHeal.toString()}</Text>
            <Text>Top Exhaust: {summsTopExhaust.toString()}</Text>
            <Text>Top Barrier: {summsTopBarrier.toString()}</Text>
            <Text>Top Cleanse: {summsTopCleanse.toString()}</Text>
            <Text>Top Smite: {summsTopSmite.toString()}</Text>


            {/*<LaneSummonerTimer lane={"Jungle"} laneIcon={JgIcon}/>*/}
            {/*<LaneSummonerTimer lane={"Mid"} laneIcon={MidIcon}/>*/}
            {/*<LaneSummonerTimer lane={"Bot"} laneIcon={BotIcon}/>*/}
            {/*<LaneSummonerTimer lane={"Support"} laneIcon={SuppIcon}/>*/}
        </Main>
    </Fragment>);
}

export default Home;
