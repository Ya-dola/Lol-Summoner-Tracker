import React, {Fragment} from "react";
import {Box, Clock, Image} from "grommet";
import FlashIcon from "./summs_icons/flash.png";


class Summoner extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            run: false
        };
    }

    startTimer = () => {
        this.setState({run: "backward"});
    }

    render() {
        return (
            <Fragment>
                <Box align="center" justify="center" width="medium" height="small" direction="column" gap="medium"
                     responsive wrap overflow="auto">
                    <Box align="center" justify="center" direction="column" width="medium" hoverIndicator
                         overflow="visible"
                         alignSelf="center" pad="small" responsive wrap>
                        <Image src={FlashIcon} fit="contain" width={"100px"}
                               onClick={this.startTimer}/>
                    </Box>
                    <Clock precision="seconds" run={this.state.run} time="PT0H5M00S" size="large" type="digital"/>
                </Box>
            </Fragment>
        );
    }

}

export default Summoner;