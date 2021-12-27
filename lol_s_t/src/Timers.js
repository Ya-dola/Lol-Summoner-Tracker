import {Fragment} from "react";
import LaneSummonerTimer from "./LaneSummonerTimer";
import HeaderBar from "./HeaderBar";
import {Main} from "grommet";
import {useLocation} from "react-router-dom";
import TopIcon from "./pos_icons/icon-position-top.png"
import JgIcon from "./pos_icons/icon-position-jungle.png"
import MidIcon from "./pos_icons/icon-position-middle.png"
import BotIcon from "./pos_icons/icon-position-bottom.png"
import SuppIcon from "./pos_icons/icon-position-utility.png"

function Timers() {
    let timerState = useLocation().state;

    return (
        <Fragment>
            <Main fill="vertical" direction="column" justify="start" align="center" overflow="hidden">
                <HeaderBar/>
                
                {/*Top Summoner Timer*/}
                <LaneSummonerTimer lane={"Top"} laneIcon={TopIcon}
                                   summFlash={timerState.summsTopFlash}
                                   summIgnite={timerState.summsTopIgnite}
                                   summTeleport={timerState.summsTopTeleport}
                                   summGhost={timerState.summsTopGhost}
                                   summHeal={timerState.summsTopHeal}
                                   summExhaust={timerState.summsTopExhaust}
                                   summBarrier={timerState.summsTopBarrier}
                                   summCleanse={timerState.summsTopCleanse}
                                   summSmite={timerState.summsTopSmite}/>

                {/*Jg Summoner Timer*/}
                <LaneSummonerTimer lane={"Jungle"} laneIcon={JgIcon}
                                   summFlash={timerState.summsJgFlash}
                                   summIgnite={timerState.summsJgIgnite}
                                   summTeleport={timerState.summsJgTeleport}
                                   summGhost={timerState.summsJgGhost}
                                   summHeal={timerState.summsJgHeal}
                                   summExhaust={timerState.summsJgExhaust}
                                   summBarrier={timerState.summsJgBarrier}
                                   summCleanse={timerState.summsJgCleanse}
                                   summSmite={timerState.summsJgSmite}/>

                {/*Mid Summoner Timer*/}
                <LaneSummonerTimer lane={"Mid"} laneIcon={MidIcon}
                                   summFlash={timerState.summsMidFlash}
                                   summIgnite={timerState.summsMidIgnite}
                                   summTeleport={timerState.summsMidTeleport}
                                   summGhost={timerState.summsMidGhost}
                                   summHeal={timerState.summsMidHeal}
                                   summExhaust={timerState.summsMidExhaust}
                                   summBarrier={timerState.summsMidBarrier}
                                   summCleanse={timerState.summsMidCleanse}
                                   summSmite={timerState.summsMidSmite}/>

                {/*Bot Summoner Timer*/}
                <LaneSummonerTimer lane={"Bot"} laneIcon={BotIcon}
                                   summFlash={timerState.summsBotFlash}
                                   summIgnite={timerState.summsBotIgnite}
                                   summTeleport={timerState.summsBotTeleport}
                                   summGhost={timerState.summsBotGhost}
                                   summHeal={timerState.summsBotHeal}
                                   summExhaust={timerState.summsBotExhaust}
                                   summBarrier={timerState.summsBotBarrier}
                                   summCleanse={timerState.summsBotCleanse}
                                   summSmite={timerState.summsBotSmite}/>

                {/*Supp Summoner Timer*/}
                <LaneSummonerTimer lane={"Support"} laneIcon={SuppIcon}
                                   summFlash={timerState.summsSuppFlash}
                                   summIgnite={timerState.summsSuppIgnite}
                                   summTeleport={timerState.summsSuppTeleport}
                                   summGhost={timerState.summsSuppGhost}
                                   summHeal={timerState.summsSuppHeal}
                                   summExhaust={timerState.summsSuppExhaust}
                                   summBarrier={timerState.summsSuppBarrier}
                                   summCleanse={timerState.summsSuppCleanse}
                                   summSmite={timerState.summsSuppSmite}/>

                {/*Debug*/}
                {/*<Text>Top Flash: {timerState.summsTopFlash ? "True" : "False"}</Text>*/}
                {/*<Text>Top Ignite: {timerState.summsTopIgnite ? "True" : "False"}</Text>*/}
                {/*<Text>Top Teleport: {timerState.summsTopTeleport ? "True" : "False"}</Text>*/}
                {/*<Text>Top Ghost: {timerState.summsTopGhost ? "True" : "False"}</Text>*/}
                {/*<Text>Top Heal: {timerState.summsTopHeal ? "True" : "False"}</Text>*/}
                {/*<Text>Top Exhaust: {timerState.summsTopExhaust ? "True" : "False"}</Text>*/}
                {/*<Text>Top Barrier: {timerState.summsTopBarrier ? "True" : "False"}</Text>*/}
                {/*<Text>Top Cleanse: {timerState.summsTopCleanse ? "True" : "False"}</Text>*/}
                {/*<Text>Top Smite: {timerState.summsTopSmite ? "True" : "False"}</Text>*/}
            </Main>
        </Fragment>
    );
}

export default Timers;