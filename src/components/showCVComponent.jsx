import PersonalInfo from "./personalInfoComponent";
import Projects from "./projectsComponent";
import Education from "./educationComponent";
import Experience from "./experienceComponent";

function CV(){
    return(
        <div>
            <div id="doc2" className="yui-t7">
                <div id="inner">
                    <PersonalInfo/>
                    <div id="bd">
                        <div id="yui-main">
                            <div className="yui-b">
                                <Projects/>
                                <Education/>
                                <Experience/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV;