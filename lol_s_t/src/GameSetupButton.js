import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Deploy} from "grommet-icons";
import {Box, Button, Text} from "grommet";

function GameSetupButton() {
    return (
        <Fragment>
            <Link to={"/"}>
                <Button label={<Box><Text size={"large"} color={"colorButtonText"}>Game Setup</Text></Box>}
                        icon={<Deploy size={"large"} color={"colorButtonText"}/>}
                        size={"large"} margin={"small"} pad={"small"} gap={"small"}
                        color={"colorButton"} reverse primary/>
            </Link>
        </Fragment>
    );
}

export default GameSetupButton;