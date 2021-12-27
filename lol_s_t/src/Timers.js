import {Fragment} from "react";
import LaneSummonerTimer from "./LaneSummonerTimer";
import HeaderBar from "./HeaderBar";
import {Main, Text} from "grommet";
import TopIcon from "./pos_icons/icon-position-top.png"
import {useLocation} from "react-router-dom";

function Timers() {
    let timerState = useLocation().state;
    return (
        <Fragment>
            <Main fill="vertical" direction="column" justify="start" align="center" overflow="hidden">
                <HeaderBar/>
                <LaneSummonerTimer lane={"Top"} laneIcon={TopIcon}
                                   summFlash={timerState.summsTopFlash}
                                   summIgnite={timerState.summsTopIgnite}
                                   summTeleport={timerState.summsTopTeleport}
                                   summGhost={timerState.summsTopGhost}
                                   summHeal={timerState.summsTopHeal}
                                   summExhaust={timerState.summsTopExhaust}
                                   summBarrier={timerState.summsTopBarrier}
                                   summCleanse={timerState.summsTopCleanse}
                                   summSmite={timerState.summsTopSmite}
                />

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