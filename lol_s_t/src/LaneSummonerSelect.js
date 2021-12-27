import React, {Fragment, useState} from "react";
import {Box, CheckBox, CheckBoxGroup, Image, Text} from "grommet";
import SummFlash from "./SummFlash";

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
                    <CheckBox id={"cbFlash"} label={"Flash"} checked={props.summsFlash}
                              onChange={(event) => {
                                  props.setSummsFlash(event.target.checked);
                              }}/>
                    <CheckBox id={"cbIgnite"} label={"Ignite"} checked={props.summsIgnite}
                              onChange={(event) => {
                                  props.setSummsIgnite(event.target.checked);
                              }}/>
                    <CheckBox id={"cbTeleport"} label={"Teleport"} checked={props.summsTeleport}
                              onChange={(event) => {
                                  props.setSummsTeleport(event.target.checked);
                              }}/>
                    <CheckBox id={"cbGhost"} label={"Ghost"} checked={props.summsGhost}
                              onChange={(event) => {
                                  props.setSummsGhost(event.target.checked);
                              }}/>
                    <CheckBox id={"cbHeal"} label={"Heal"} checked={props.summsHeal}
                              onChange={(event) => {
                                  props.setSummsHeal(event.target.checked);
                              }}/>
                    <CheckBox id={"cbExhaust"} label={"Exhaust"} checked={props.summsExhaust}
                              onChange={(event) => {
                                  props.setSummsExhaust(event.target.checked);
                              }}/>
                    <CheckBox id={"cbBarrier"} label={"Barrier"} checked={props.summsBarrier}
                              onChange={(event) => {
                                  props.setSummsBarrier(event.target.checked);
                              }}/>
                    <CheckBox id={"cbCleanse"} label={"Cleanse"} checked={props.summsCleanse}
                              onChange={(event) => {
                                  props.setSummsCleanse(event.target.checked);
                              }}/>
                    <CheckBox id={"cbSmite"} label={"Smite"} checked={props.summsSmite}
                              onChange={(event) => {
                                  props.setSummsSmite(event.target.checked);
                              }}/>
                </Box>
            </Box>
        </Fragment>
    );
}

export default LaneSummonerSelect;