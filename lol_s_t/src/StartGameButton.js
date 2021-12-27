import {Fragment} from "react";
import {Link} from "react-router-dom";
import {Button} from "grommet";
import {Gamepad} from "grommet-icons";

function StartGameButton(props) {
    return(
      <Fragment>
          {/*Start Game Button*/}
          <Link to={"/timers"} state={{
              // Top Summoner Spells States
              summsTopFlash: props.summsTopFlash,
              summsTopIgnite: props.summsTopIgnite,
              summsTopTeleport: props.summsTopTeleport,
              summsTopGhost: props.summsTopGhost,
              summsTopHeal: props.summsTopHeal,
              summsTopExhaust: props.summsTopExhaust,
              summsTopBarrier: props.summsTopBarrier,
              summsTopCleanse: props.summsTopCleanse,
              summsTopSmite: props.summsTopSmite,

              // Jg Summoner Spells States
              summsJgFlash: props.summsJgFlash,
              summsJgIgnite: props.summsJgIgnite,
              summsJgTeleport: props.summsJgTeleport,
              summsJgGhost: props.summsJgGhost,
              summsJgHeal: props.summsJgHeal,
              summsJgExhaust: props.summsJgExhaust,
              summsJgBarrier: props.summsJgBarrier,
              summsJgCleanse: props.summsJgCleanse,
              summsJgSmite: props.summsJgSmite,

              // Mid Summoner Spells States
              summsMidFlash: props.summsMidFlash,
              summsMidIgnite: props.summsMidIgnite,
              summsMidTeleport: props.summsMidTeleport,
              summsMidGhost: props.summsMidGhost,
              summsMidHeal: props.summsMidHeal,
              summsMidExhaust: props.summsMidExhaust,
              summsMidBarrier: props.summsMidBarrier,
              summsMidCleanse: props.summsMidCleanse,
              summsMidSmite: props.summsMidSmite,

              // Bot Summoner Spells States
              summsBotFlash: props.summsBotFlash,
              summsBotIgnite: props.summsBotIgnite,
              summsBotTeleport: props.summsBotTeleport,
              summsBotGhost: props.summsBotGhost,
              summsBotHeal: props.summsBotHeal,
              summsBotExhaust: props.summsBotExhaust,
              summsBotBarrier: props.summsBotBarrier,
              summsBotCleanse: props.summsBotCleanse,
              summsBotSmite: props.summsBotSmite,

              // Supp Summoner Spells States
              summsSuppFlash: props.summsSuppFlash,
              summsSuppIgnite: props.summsSuppIgnite,
              summsSuppTeleport: props.summsSuppTeleport,
              summsSuppGhost: props.summsSuppGhost,
              summsSuppHeal: props.summsSuppHeal,
              summsSuppExhaust: props.summsSuppExhaust,
              summsSuppBarrier: props.summsSuppBarrier,
              summsSuppCleanse: props.summsSuppCleanse,
              summsSuppSmite: props.summsSuppSmite,
          }}>
              <Button label={"Start Game"} icon={<Gamepad size={"large"}/>}
                      size={"large"} margin={"small"} pad={"small"} gap={"small"} reverse primary/>
          </Link>
      </Fragment>
    );
}

export default StartGameButton;