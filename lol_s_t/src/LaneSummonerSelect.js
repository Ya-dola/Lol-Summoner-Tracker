import React, {Fragment} from "react";
import {Box, CheckBox, Image, Text} from "grommet";

function LaneSummonerSelect(props) {
    return (
        <Fragment>
            {/*Role Row*/}
            <Box align="center" justify="center" direction="row" pad="small" margin="small" overflow="hidden"
                 responsive width="large">

                {/*Lane Summoner Information*/}
                <Box align="center" justify="center" width="medium" height="small" direction="column" gap="medium"
                     responsive wrap overflow="hidden">
                    <Image src={props.laneIcon} fit="contain" width={"100px"}/>
                    <Text textAlign="start" size="large">
                        {props.lane}
                    </Text>
                </Box>

                {/*Summoner Spells Checkbox*/}
                <Box align="left" justify="center" width="medium" height="auto" direction="column" gap="small"
                     overflow="hidden" responsive wrap>
                    <CheckBox label={"Flash"} checked={props.summsFlash}
                              onChange={(event) => {
                                  props.setSummsFlash(event.target.checked);
                              }}/>
                    <CheckBox label={"Ignite"} checked={props.summsIgnite}
                              onChange={(event) => {
                                  props.setSummsIgnite(event.target.checked);
                              }}/>
                    <CheckBox label={"Teleport"} checked={props.summsTeleport}
                              onChange={(event) => {
                                  props.setSummsTeleport(event.target.checked);
                              }}/>
                    <CheckBox label={"Ghost"} checked={props.summsGhost}
                              onChange={(event) => {
                                  props.setSummsGhost(event.target.checked);
                              }}/>
                    <CheckBox label={"Heal"} checked={props.summsHeal}
                              onChange={(event) => {
                                  props.setSummsHeal(event.target.checked);
                              }}/>
                    <CheckBox label={"Exhaust"} checked={props.summsExhaust}
                              onChange={(event) => {
                                  props.setSummsExhaust(event.target.checked);
                              }}/>
                    <CheckBox label={"Barrier"} checked={props.summsBarrier}
                              onChange={(event) => {
                                  props.setSummsBarrier(event.target.checked);
                              }}/>
                    <CheckBox label={"Cleanse"} checked={props.summsCleanse}
                              onChange={(event) => {
                                  props.setSummsCleanse(event.target.checked);
                              }}/>
                    <CheckBox label={"Smite"} checked={props.summsSmite}
                              onChange={(event) => {
                                  props.setSummsSmite(event.target.checked);
                              }}/>
                </Box>
            </Box>
        </Fragment>
    );
}

export default LaneSummonerSelect;