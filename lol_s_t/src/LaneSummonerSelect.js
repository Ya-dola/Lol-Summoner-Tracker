import React, {Fragment} from "react";
import {Box, CheckBox, Image, Text} from "grommet";

function LaneSummonerSelect(props) {
    return (
        <Fragment>
            {/*Role Row*/}
            <Box align="center" justify="center" direction="row" pad="small" width="large" height={"auto"}
                 margin="xxxsmall" overflow="hidden" border={"horizontal"} fill={"horizontal"} responsive>

                {/*Lane Summoner Information*/}
                <Box align="center" justify="center" width="medium" height={"auto"} direction="column"
                     gap="medium" overflow="hidden" responsive>
                    <Image src={props.laneIcon} fit="contain" width={"70px"}/>
                    <Text textAlign="start" size="large">
                        {props.lane}
                    </Text>
                </Box>

                {/*Summoner Spells Checkbox*/}
                <Box align="start" justify="center" width="medium" height="auto" direction="column" gap="small"
                     pad={"small"}
                     overflow="hidden" responsive>
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
                </Box>

                <Box align="start" justify="center" width="medium" height="auto" direction="column" gap="small"
                     pad={"small"}
                     overflow="hidden" responsive>
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