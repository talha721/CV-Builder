import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {fetchCVInfo} from "../redux/Actions/fetchCVActions";
import Print from "./printButtonComponent";

function PersonalInfo(){

    const personalInfo = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCVInfo())
    }, [])

    return(
        <div>
            {personalInfo.cvInfo ? personalInfo.cvInfo.map((p) => {
                return(
                    <div id="hd" key={p.id}>
                        <div className="yui-gc">
                            <div className="yui-u first">
                                <h1>{p.name}</h1>
                            </div>

                            <div className="yui-u">
                                <div className="contact-info">
                                    <h3>
                                        <Print/>
                                    </h3>
                                    <h3>{p.email}</h3>
                                    <h3>Phone: {p.phone}</h3>
                                    <h3>City: {p.city}</h3>
                                    <h3>Address: {p.address}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : "Loading..."}
        </div>
    )
}

export default PersonalInfo;