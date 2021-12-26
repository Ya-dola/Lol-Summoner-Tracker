import {Blank, HomeRounded} from "grommet-icons";
import {Header, Text} from "grommet";
import {Fragment} from "react";

function HeaderBar() {
    return (
        <Fragment>
            <Header align="center" direction="row" justify="between" gap="medium" pad="small"
                    background={{"color": "graph-2", "dark": true}} fill="horizontal" flex={false}
                    overflow="hidden">
                <HomeRounded size="large"/>
                <Text textAlign="center" size="large">
                    League of Legends Summoner Tracker
                </Text>
                <Blank/>
            </Header>
        </Fragment>
    );
}

export default HeaderBar;