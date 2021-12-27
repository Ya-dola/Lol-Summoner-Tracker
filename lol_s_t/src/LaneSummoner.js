import React, {Fragment} from "react";
import {Box, Image, Text} from "grommet";
import SummFlash from "./SummFlash";

function LaneSummoner(props) {
    return (
        <Fragment>
            {/*Role Row*/}
            <Box align="center" justify="center" direction="row" pad="small" margin="small" overflow="hidden"
                 responsive width="large">

                {/*Selected Summoner*/}
                <Box align="center" justify="center" width="medium" height="small" direction="column" gap="medium"
                     responsive wrap overflow="hidden">
                    <Image src={props.laneIcon} fit="contain" width={"100px"}/>
                    <Text textAlign="start" size="large">
                        {props.lane}
                    </Text>
                </Box>

                {/*Selected Summoner Spells*/}
                <SummFlash/>
                <SummFlash/>
            </Box>
        </Fragment>
    );
}

export default LaneSummoner;