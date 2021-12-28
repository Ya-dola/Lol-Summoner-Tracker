import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Blank, HomeRounded, Moon, Sun} from "grommet-icons";
import {Button, Header, Text} from "grommet";

function HeaderBar(props) {
    return (
        <Fragment>
            <Header pad="small" fill="horizontal" overflow="hidden" background={"colorHeader"}>
                <Link to={"/"}>
                    <HomeRounded size="large" color={"colorHeaderText"}/>
                </Link>
                <Text textAlign="center" size="large" color={"colorHeaderText"}>
                    LoL Summs Tracker
                </Text>

                {/*Dark Mode Changing Button */}
                <Button icon={props.darkMode ?
                    <Sun size={"large"} color={"colorHeaderText"}/> :
                    <Moon size={"large"} color={"colorHeaderText"}/>}
                        onClick={() => {
                            props.setDarkMode(!props.darkMode);
                        }}/>
            </Header>
        </Fragment>
    );
}

export default HeaderBar;