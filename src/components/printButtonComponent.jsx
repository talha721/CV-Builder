// import {useReactToPrint} from "react-to-print";
// import Home from "./homeComponent";
// import {useRef} from "react";
import {Button} from "reactstrap";


export default function Print(){
    return(
        <div>
            <Button onClick={() => window.print()}>Print Your CV</Button>
            <br/><br/>
        </div>
    )
}