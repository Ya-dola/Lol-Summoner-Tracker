import React, {Fragment} from "react";
import {Box, Image, Text} from "grommet";
import SummonerSpell from "./SummonerSpell";
import FlashIcon from "./summs_icons/flash.png";
import IgniteIcon from "./summs_icons/ignite.png";
import TeleportIcon from "./summs_icons/teleport.png";
import GhostIcon from "./summs_icons/ghost.png";
import HealIcon from "./summs_icons/heal.png";
import ExhaustIcon from "./summs_icons/exhaust.png";
import BarrierIcon from "./summs_icons/barrier.png";
import CleanseIcon from "./summs_icons/cleanse.png";
import SmiteIcon from "./summs_icons/smite.png";

function LaneSummonerTimer(props) {
    return (
        <Fragment>
            {/*Role Row*/}
            <Box align="center" justify="center" direction="row" pad="small" width="large" height={"small"}
                 margin="xxxsmall" overflow="hidden" border={"horizontal"} fill={"horizontal"} responsive>

                {/*Lane Summoner Information*/}
                <Box align="center" justify="center" width="medium" height={"auto"} direction="column" gap="medium"
                     responsive overflow="hidden">
                    <Image src={props.laneIcon} fit="contain" width={"70px"}/>
                    <Text textAlign="start" size="large">
                        {props.lane}
                    </Text>
                </Box>

                {/*Selected Summoner Spells*/}

                {/*Flash*/}
                {props.summFlash ?
                    <SummonerSpell summIcon={FlashIcon} time={"T00:05:00"} maxBarValue={300} barValue={299}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Ignite*/}
                {props.summIgnite ?
                    <SummonerSpell summIcon={IgniteIcon} time={"T00:03:00"} maxBarValue={180} barValue={179}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Teleport*/}
                {props.summTeleport ?
                    <SummonerSpell summIcon={TeleportIcon} time={"T00:05:00"} maxBarValue={300} barValue={299}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Ghost*/}
                {props.summGhost ?
                    <SummonerSpell summIcon={GhostIcon} time={"T00:03:30"} maxBarValue={210} barValue={209}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Heal*/}
                {props.summHeal ?
                    <SummonerSpell summIcon={HealIcon} time={"T00:04:00"} maxBarValue={240} barValue={239}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Exhaust*/}
                {props.summExhaust ?
                    <SummonerSpell summIcon={ExhaustIcon} time={"T00:03:30"} maxBarValue={210} barValue={209}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Barrier*/}
                {props.summBarrier ?
                    <SummonerSpell summIcon={BarrierIcon} time={"T00:03:00"} maxBarValue={180} barValue={179}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Cleanse*/}
                {props.summCleanse ?
                    <SummonerSpell summIcon={CleanseIcon} time={"T00:03:30"} maxBarValue={210} barValue={209}
                                   barBp1={120} barBp2={60}/> : null}

                {/*Smite*/}
                {props.summSmite ?
                    <SummonerSpell summIcon={SmiteIcon} time={"T00:00:15"} maxBarValue={15} barValue={14}
                                   barBp1={6} barBp2={3}/> : null}
            </Box>
        </Fragment>
    );
}

export default LaneSummonerTimer;