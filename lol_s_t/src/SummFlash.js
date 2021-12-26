import React, {Fragment} from "react";
import {Box, Clock, Image} from "grommet";
import FlashIcon from "./summs_icons/flash.png";


class SummFlash extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            run: "backward",
            time: "T00:05:00",
            clicked: false
        };
    }

    summClicked = () => {
        this.state.clicked ?
            this.setState({clicked: false})
            : this.setState({clicked: true})
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
                               onClick={this.summClicked}/>
                    </Box>
                    {this.state.clicked ?
                        <Clock precision="seconds" run={this.state.run} time={this.state.time} size="large"
                               type="digital"/>
                        : null}
                </Box>
            </Fragment>
        );
    }

}

export default SummFlash;