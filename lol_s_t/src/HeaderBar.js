import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Blank, HomeRounded, Moon, Sun} from "grommet-icons";
import {Button, Header, Text} from "grommet";

function HeaderBar(props) {
    return (
        <Fragment>
            <Header pad="small" fill="horizontal" overflow="hidden" background={{"color": "graph-2"}}>
                <Link to={"/"}>
                    <HomeRounded size="large"/>
                </Link>
                <Text textAlign="center" size="large">
                    LoL Summs Tracker
                </Text>

                {/*Dark Mode Changing Button */}
                <Button icon={props.darkMode ? <Sun size={"large"}/> : <Moon size={"large"}/>}
                        onClick={() => {
                            props.setDarkMode(!props.darkMode);
                        }}/>
            </Header>
        </Fragment>
    );
}

export default HeaderBar;