import {useSelector} from "react-redux";


function Projects(){

    const projectInfo = useSelector((state) => {
        return state
    })

    return(
        <div>
            <div className="yui-gf">
                <div className="yui-u first">
                    <h2>Projects</h2>
                </div>
                {projectInfo.cvInfo ? projectInfo.cvInfo.map((p) => {
                    return(
                        <div className="yui-u" key={p.id}>
                            <h3><strong>Project Title: </strong>{p.projectTitle}</h3>
                            <h3><strong>Project Description: </strong>{p.projectDescription}</h3>
                            <h3><strong>Project Start Date: </strong>{p.projectStartDate}</h3>
                            <h3><strong>Project End Date: </strong>{p.projectEndDate}</h3>
                        </div>
                    )
                }) : "Loading"}
            </div>
        </div>
    )
}

export default Projects;