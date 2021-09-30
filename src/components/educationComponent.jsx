import {Form, Input, Label} from "reactstrap";
import {useSelector} from "react-redux";


function Education(){

    const educationInfo = useSelector((state) => {
        return state
    })

    return(
        <div>
            <div className="yui-gf">
                <div className="yui-u first">
                    <h2>Education</h2>
                </div>
                {educationInfo.cvInfo ? educationInfo.cvInfo.map((e) => {
                    return(
                        <div key={e.id} className="yui-u">
                            <h2>{e.uniName}</h2>
                            <h3>{e.degreeName}</h3>
                            <h3>{e.uniStartYear} - {e.uniEndYear}</h3>
                        </div>
                    )
                }) : "Loading...."}
            </div>
        </div>
    )
}

export default Education;