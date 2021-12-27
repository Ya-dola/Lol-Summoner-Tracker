import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Deploy} from "grommet-icons";
import {Button} from "grommet";

function GameSetupButton() {
    return (
        <Fragment>
            <Link to={"/"}>
                <Button label={"Game Setup"} icon={<Deploy size={"large"}/>}
                        size={"large"} margin={"small"} pad={"small"} gap={"small"} reverse primary/>
            </Link>
        </Fragment>
    );
}

export default GameSetupButton;