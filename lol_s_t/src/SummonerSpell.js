import React, {Fragment} from "react";
import {Box, Clock, Image} from "grommet";
import SummMeter from "./SummMeter";

class SummonerSpell extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            clicked: false,
            run: "backward",
            time: this.props.time,
            maxBarValue: this.props.maxBarValue,
            barValue: this.props.barValue,
            barBp1: this.props.barBp1,
            barBp2: this.props.barBp2

            // DEBUG Values
            // time: "T00:00:10",
            // maxBarValue: 10,
            // barValue: 9,
            // barBp1: 120,
            // barBp2: 60
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
                <Box align="center" justify="center" width="medium" height="auto" margin="small" direction="column"
                     gap="xxsmall" overflow="hidden" responsive wrap>
                    <Box align="center" justify="center" direction="column" width="medium"
                         overflow="hidden" alignSelf="center" pad="small" responsive wrap>
                        <Image src={this.props.summIcon} fit="contain" width={"100px"}
                               onClick={this.summClicked}/>
                    </Box>
                    {this.state.clicked ?
                        <Clock precision="seconds" run={this.state.run} time={this.state.time} size="large"
                               type="digital"/>
                        : null}
                    {this.state.clicked ?
                        <SummMeter {...this.state} summClicked={this.summClicked}/>
                        : null}
                </Box>
            </Fragment>
        );
    }
}

export default SummonerSpell;