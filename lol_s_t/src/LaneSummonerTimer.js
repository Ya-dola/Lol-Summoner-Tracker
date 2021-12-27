import React, {Fragment} from "react";
import {Box, Image, Text} from "grommet";
import SummFlash from "./SummFlash";

function LaneSummonerTimer(props) {
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

                {/*Selected Summoner Spells*/}
                {props.summFlash ? <SummFlash/> : null}
                {/*{props.summIgnite ? <SummIgnite/> : null}*/}
                {/*{props.summTeleport ? <SummTeleport/> : null}*/}
                {/*{props.summGhost ? <SummGhost/> : null}*/}
                {/*{props.summHeal ? <SummHeal/> : null}*/}
                {/*{props.summExhaust ? <SummExhaust/> : null}*/}
                {/*{props.summBarrier ? <SummBarrier/> : null}*/}
                {/*{props.summCleanse ? <SummCleanse/> : null}*/}
                {/*{props.summSmite ? <SummSmite/> : null}*/}
            </Box>
        </Fragment>
    );
}

export default LaneSummonerTimer;