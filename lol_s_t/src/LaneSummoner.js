import React, {Fragment} from "react";
import {Box, Image, Text} from "grommet";
import SummFlash from "./SummFlash";

function LaneSummoner(props) {
    return (
        <Fragment>
            <Box align="center" justify="center" direction="row" pad="small" margin="small" overflow="visible"
                 responsive width="large">
                <Box align="center" justify="center" width="medium" height="small" direction="column" gap="medium"
                     responsive wrap overflow="auto">
                    <Image src={props.laneIcon} fit="contain" width={"100px"}/>
                    <Text textAlign="start" size="large">
                        {props.lane}
                    </Text>
                </Box>
                <SummFlash/>
                <SummFlash/>
            </Box>
        </Fragment>
    );
}

export default LaneSummoner;