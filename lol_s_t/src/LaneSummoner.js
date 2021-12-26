import React, {Fragment} from "react";
import {Box, Image, Text} from "grommet";
import SummFlash from "./SummFlash";
import TopIcon from "./pos_icons/icon-position-top.png"

function LaneSummoner() {
    return (
        <Fragment>
            <Box align="center" justify="center" direction="row" pad="small" margin="small" overflow="visible"
                 responsive width="large">
                <Box align="center" justify="center" width="medium" height="small" direction="column" gap="medium"
                     responsive wrap overflow="auto">
                    <Image src={TopIcon} fit="contain" width={"100px"}/>
                    <Text textAlign="start" size="large">
                        Top
                    </Text>
                </Box>
                <SummFlash/>
                {/*<SummFlash/>*/}
            </Box>
        </Fragment>
    );
}

export default LaneSummoner;