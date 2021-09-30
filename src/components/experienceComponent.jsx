import {Form, Input, Label} from "reactstrap";
import {useSelector} from "react-redux";


function Experience(){

    const experienceInfo = useSelector((state) => {
        return state
    })

    return(
        <div>
            <div className="yui-gf">
                <div className="yui-u first">
                    <h2>Experience</h2>
                </div>
                <div className="yui-u">
                    {experienceInfo.cvInfo ? experienceInfo.cvInfo.map((e) => {
                        return(
                            <div key={e.id}>
                                <div className="job">
                                    <h2>{e.jobTitle}</h2>
                                    <h3>{e.companyName}</h3>
                                    <h3>{e.companyLocation}</h3>
                                    <h4>Experience: ({e.yearOfExperience}) year</h4>
                                    <h4>Promotions: ({e.promotions})</h4>
                                </div>
                            </div>
                        )
                    }) : "Loading..."}
                </div>
            </div>
        </div>
    )
}

export default Experience;