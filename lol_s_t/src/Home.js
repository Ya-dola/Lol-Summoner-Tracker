import React, {Fragment, useState} from 'react';
import {Main} from "grommet";
import HeaderBar from "./HeaderBar";
import LaneSummonerSelect from "./LaneSummonerSelect";
import StartGameButton from "./StartGameButton";
import TopIcon from "./pos_icons/icon-position-top.png"
import JgIcon from "./pos_icons/icon-position-jungle.png"
import MidIcon from "./pos_icons/icon-position-middle.png"
import BotIcon from "./pos_icons/icon-position-bottom.png"
import SuppIcon from "./pos_icons/icon-position-utility.png"

function Home() {

    // Top Summoner Spells
    const [summsTopFlash, setSummsTopFlash] = useState(true);
    const [summsTopIgnite, setSummsTopIgnite] = useState(false);
    const [summsTopTeleport, setSummsTopTeleport] = useState(true);
    const [summsTopGhost, setSummsTopGhost] = useState(false);
    const [summsTopHeal, setSummsTopHeal] = useState(false);
    const [summsTopExhaust, setSummsTopExhaust] = useState(false);
    const [summsTopBarrier, setSummsTopBarrier] = useState(false);
    const [summsTopCleanse, setSummsTopCleanse] = useState(false);
    const [summsTopSmite, setSummsTopSmite] = useState(false);

    // Jg Summoner Spells
    const [summsJgFlash, setSummsJgFlash] = useState(true);
    const [summsJgIgnite, setSummsJgIgnite] = useState(false);
    const [summsJgTeleport, setSummsJgTeleport] = useState(false);
    const [summsJgGhost, setSummsJgGhost] = useState(false);
    const [summsJgHeal, setSummsJgHeal] = useState(false);
    const [summsJgExhaust, setSummsJgExhaust] = useState(false);
    const [summsJgBarrier, setSummsJgBarrier] = useState(false);
    const [summsJgCleanse, setSummsJgCleanse] = useState(false);
    const [summsJgSmite, setSummsJgSmite] = useState(true);

    // Mid Summoner Spells
    const [summsMidFlash, setSummsMidFlash] = useState(true);
    const [summsMidIgnite, setSummsMidIgnite] = useState(true);
    const [summsMidTeleport, setSummsMidTeleport] = useState(false);
    const [summsMidGhost, setSummsMidGhost] = useState(false);
    const [summsMidHeal, setSummsMidHeal] = useState(false);
    const [summsMidExhaust, setSummsMidExhaust] = useState(false);
    const [summsMidBarrier, setSummsMidBarrier] = useState(false);
    const [summsMidCleanse, setSummsMidCleanse] = useState(false);
    const [summsMidSmite, setSummsMidSmite] = useState(false);

    // Bot Summoner Spells
    const [summsBotFlash, setSummsBotFlash] = useState(true);
    const [summsBotIgnite, setSummsBotIgnite] = useState(false);
    const [summsBotTeleport, setSummsBotTeleport] = useState(false);
    const [summsBotGhost, setSummsBotGhost] = useState(false);
    const [summsBotHeal, setSummsBotHeal] = useState(true);
    const [summsBotExhaust, setSummsBotExhaust] = useState(false);
    const [summsBotBarrier, setSummsBotBarrier] = useState(false);
    const [summsBotCleanse, setSummsBotCleanse] = useState(false);
    const [summsBotSmite, setSummsBotSmite] = useState(false);

    // Supp Summoner Spells
    const [summsSuppFlash, setSummsSuppFlash] = useState(true);
    const [summsSuppIgnite, setSummsSuppIgnite] = useState(true);
    const [summsSuppTeleport, setSummsSuppTeleport] = useState(false);
    const [summsSuppGhost, setSummsSuppGhost] = useState(false);
    const [summsSuppHeal, setSummsSuppHeal] = useState(false);
    const [summsSuppExhaust, setSummsSuppExhaust] = useState(false);
    const [summsSuppBarrier, setSummsSuppBarrier] = useState(false);
    const [summsSuppCleanse, setSummsSuppCleanse] = useState(false);
    const [summsSuppSmite, setSummsSuppSmite] = useState(false);


    return (
        <Fragment>
            <Main fill="vertical" direction="column" justify="start" align="center" overflow="hidden">
                <HeaderBar/>
                {/*<LaneSummonerTimer lane={"Top"} laneIcon={TopIcon}/>*/}


                {/*Start Game Button*/}
                <StartGameButton
                    // Top Summoner Spell States
                    summsTopFlash={summsTopFlash.valueOf()} summsTopIgnite={summsTopIgnite.valueOf()}
                    summsTopTeleport={summsTopTeleport.valueOf()} summsTopGhost={summsTopGhost.valueOf()}
                    summsTopHeal={summsTopHeal.valueOf()} summsTopExhaust={summsTopExhaust.valueOf()}
                    summsTopBarrier={summsTopBarrier.valueOf()} summsTopCleanse={summsTopCleanse.valueOf()}
                    summsTopSmite={summsTopSmite.valueOf()}

                    // Jg Summoner Spell States
                    summsJgFlash={summsJgFlash.valueOf()} summsJgIgnite={summsJgIgnite.valueOf()}
                    summsJgTeleport={summsJgTeleport.valueOf()} summsJgGhost={summsJgGhost.valueOf()}
                    summsJgHeal={summsJgHeal.valueOf()} summsJgExhaust={summsJgExhaust.valueOf()}
                    summsJgBarrier={summsJgBarrier.valueOf()} summsJgCleanse={summsJgCleanse.valueOf()}
                    summsJgSmite={summsJgSmite.valueOf()}

                    // Mid Summoner Spell States
                    summsMidFlash={summsMidFlash.valueOf()} summsMidIgnite={summsMidIgnite.valueOf()}
                    summsMidTeleport={summsMidTeleport.valueOf()} summsMidGhost={summsMidGhost.valueOf()}
                    summsMidHeal={summsMidHeal.valueOf()} summsMidExhaust={summsMidExhaust.valueOf()}
                    summsMidBarrier={summsMidBarrier.valueOf()} summsMidCleanse={summsMidCleanse.valueOf()}
                    summsMidSmite={summsMidSmite.valueOf()}

                    // Bot Summoner Spell States
                    summsBotFlash={summsBotFlash.valueOf()} summsBotIgnite={summsBotIgnite.valueOf()}
                    summsBotTeleport={summsBotTeleport.valueOf()} summsBotGhost={summsBotGhost.valueOf()}
                    summsBotHeal={summsBotHeal.valueOf()} summsBotExhaust={summsBotExhaust.valueOf()}
                    summsBotBarrier={summsBotBarrier.valueOf()} summsBotCleanse={summsBotCleanse.valueOf()}
                    summsBotSmite={summsBotSmite.valueOf()}

                    // Supp Summoner Spell States
                    summsSuppFlash={summsSuppFlash.valueOf()} summsSuppIgnite={summsSuppIgnite.valueOf()}
                    summsSuppTeleport={summsSuppTeleport.valueOf()} summsSuppGhost={summsSuppGhost.valueOf()}
                    summsSuppHeal={summsSuppHeal.valueOf()} summsSuppExhaust={summsSuppExhaust.valueOf()}
                    summsSuppBarrier={summsSuppBarrier.valueOf()} summsSuppCleanse={summsSuppCleanse.valueOf()}
                    summsSuppSmite={summsSuppSmite.valueOf()}
                />

                {/*Top Select Summoners*/}
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

                {/*Jungle Select Summoners*/}
                <LaneSummonerSelect lane={"Jungle"} laneIcon={JgIcon}
                                    summsFlash={summsJgFlash} setSummsFlash={setSummsJgFlash}
                                    summsIgnite={summsJgIgnite} setSummsIgnite={setSummsJgIgnite}
                                    summsTeleport={summsJgTeleport} setSummsTeleport={setSummsJgTeleport}
                                    summsGhost={summsJgGhost} setSummsGhost={setSummsJgGhost}
                                    summsHeal={summsJgHeal} setSummsHeal={setSummsJgHeal}
                                    summsExhaust={summsJgExhaust} setSummsExhaust={setSummsJgExhaust}
                                    summsBarrier={summsJgBarrier} setSummsBarrier={setSummsJgBarrier}
                                    summsCleanse={summsJgCleanse} setSummsCleanse={setSummsJgCleanse}
                                    summsSmite={summsJgSmite} setSummsSmite={setSummsJgSmite}/>

                {/*Mid Select Summoners*/}
                <LaneSummonerSelect lane={"Mid"} laneIcon={MidIcon}
                                    summsFlash={summsMidFlash} setSummsFlash={setSummsMidFlash}
                                    summsIgnite={summsMidIgnite} setSummsIgnite={setSummsMidIgnite}
                                    summsTeleport={summsMidTeleport} setSummsTeleport={setSummsMidTeleport}
                                    summsGhost={summsMidGhost} setSummsGhost={setSummsMidGhost}
                                    summsHeal={summsMidHeal} setSummsHeal={setSummsMidHeal}
                                    summsExhaust={summsMidExhaust} setSummsExhaust={setSummsMidExhaust}
                                    summsBarrier={summsMidBarrier} setSummsBarrier={setSummsMidBarrier}
                                    summsCleanse={summsMidCleanse} setSummsCleanse={setSummsMidCleanse}
                                    summsSmite={summsMidSmite} setSummsSmite={setSummsMidSmite}/>

                {/*Bot Select Summoners*/}
                <LaneSummonerSelect lane={"Bot"} laneIcon={BotIcon}
                                    summsFlash={summsBotFlash} setSummsFlash={setSummsBotFlash}
                                    summsIgnite={summsBotIgnite} setSummsIgnite={setSummsBotIgnite}
                                    summsTeleport={summsBotTeleport} setSummsTeleport={setSummsBotTeleport}
                                    summsGhost={summsBotGhost} setSummsGhost={setSummsBotGhost}
                                    summsHeal={summsBotHeal} setSummsHeal={setSummsBotHeal}
                                    summsExhaust={summsBotExhaust} setSummsExhaust={setSummsBotExhaust}
                                    summsBarrier={summsBotBarrier} setSummsBarrier={setSummsBotBarrier}
                                    summsCleanse={summsBotCleanse} setSummsCleanse={setSummsBotCleanse}
                                    summsSmite={summsBotSmite} setSummsSmite={setSummsBotSmite}/>

                {/*Support Select Summoners*/}
                <LaneSummonerSelect lane={"Support"} laneIcon={SuppIcon}
                                    summsFlash={summsSuppFlash} setSummsFlash={setSummsSuppFlash}
                                    summsIgnite={summsSuppIgnite} setSummsIgnite={setSummsSuppIgnite}
                                    summsTeleport={summsSuppTeleport} setSummsTeleport={setSummsSuppTeleport}
                                    summsGhost={summsSuppGhost} setSummsGhost={setSummsSuppGhost}
                                    summsHeal={summsSuppHeal} setSummsHeal={setSummsSuppHeal}
                                    summsExhaust={summsSuppExhaust} setSummsExhaust={setSummsSuppExhaust}
                                    summsBarrier={summsSuppBarrier} setSummsBarrier={setSummsSuppBarrier}
                                    summsCleanse={summsSuppCleanse} setSummsCleanse={setSummsSuppCleanse}
                                    summsSmite={summsSuppSmite} setSummsSmite={setSummsSuppSmite}/>

                {/*Start Game Button*/}
                <StartGameButton
                    // Top Summoner Spell States
                    summsTopFlash={summsTopFlash.valueOf()} summsTopIgnite={summsTopIgnite.valueOf()}
                    summsTopTeleport={summsTopTeleport.valueOf()} summsTopGhost={summsTopGhost.valueOf()}
                    summsTopHeal={summsTopHeal.valueOf()} summsTopExhaust={summsTopExhaust.valueOf()}
                    summsTopBarrier={summsTopBarrier.valueOf()} summsTopCleanse={summsTopCleanse.valueOf()}
                    summsTopSmite={summsTopSmite.valueOf()}

                    // Jg Summoner Spell States
                    summsJgFlash={summsJgFlash.valueOf()} summsJgIgnite={summsJgIgnite.valueOf()}
                    summsJgTeleport={summsJgTeleport.valueOf()} summsJgGhost={summsJgGhost.valueOf()}
                    summsJgHeal={summsJgHeal.valueOf()} summsJgExhaust={summsJgExhaust.valueOf()}
                    summsJgBarrier={summsJgBarrier.valueOf()} summsJgCleanse={summsJgCleanse.valueOf()}
                    summsJgSmite={summsJgSmite.valueOf()}

                    // Mid Summoner Spell States
                    summsMidFlash={summsMidFlash.valueOf()} summsMidIgnite={summsMidIgnite.valueOf()}
                    summsMidTeleport={summsMidTeleport.valueOf()} summsMidGhost={summsMidGhost.valueOf()}
                    summsMidHeal={summsMidHeal.valueOf()} summsMidExhaust={summsMidExhaust.valueOf()}
                    summsMidBarrier={summsMidBarrier.valueOf()} summsMidCleanse={summsMidCleanse.valueOf()}
                    summsMidSmite={summsMidSmite.valueOf()}

                    // Bot Summoner Spell States
                    summsBotFlash={summsBotFlash.valueOf()} summsBotIgnite={summsBotIgnite.valueOf()}
                    summsBotTeleport={summsBotTeleport.valueOf()} summsBotGhost={summsBotGhost.valueOf()}
                    summsBotHeal={summsBotHeal.valueOf()} summsBotExhaust={summsBotExhaust.valueOf()}
                    summsBotBarrier={summsBotBarrier.valueOf()} summsBotCleanse={summsBotCleanse.valueOf()}
                    summsBotSmite={summsBotSmite.valueOf()}

                    // Supp Summoner Spell States
                    summsSuppFlash={summsSuppFlash.valueOf()} summsSuppIgnite={summsSuppIgnite.valueOf()}
                    summsSuppTeleport={summsSuppTeleport.valueOf()} summsSuppGhost={summsSuppGhost.valueOf()}
                    summsSuppHeal={summsSuppHeal.valueOf()} summsSuppExhaust={summsSuppExhaust.valueOf()}
                    summsSuppBarrier={summsSuppBarrier.valueOf()} summsSuppCleanse={summsSuppCleanse.valueOf()}
                    summsSuppSmite={summsSuppSmite.valueOf()}
                />

                {/*DEBUG*/}
                {/*<Text>Top Flash: {summsTopFlash.toString()}</Text>*/}
                {/*<Text>Top Ignite: {summsTopIgnite.toString()}</Text>*/}
                {/*<Text>Top Teleport: {summsTopTeleport.toString()}</Text>*/}
                {/*<Text>Top Ghost: {summsTopGhost.toString()}</Text>*/}
                {/*<Text>Top Heal: {summsTopHeal.toString()}</Text>*/}
                {/*<Text>Top Exhaust: {summsTopExhaust.toString()}</Text>*/}
                {/*<Text>Top Barrier: {summsTopBarrier.toString()}</Text>*/}
                {/*<Text>Top Cleanse: {summsTopCleanse.toString()}</Text>*/}
                {/*<Text>Top Smite: {summsTopSmite.toString()}</Text>*/}
            </Main>
        </Fragment>);
}

export default Home;
