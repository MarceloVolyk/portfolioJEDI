import AboutMe from "./AboutMe"
import Image from "./Image"
import Impact from "./Impact"
import Name from "./Name"
import Objectives from "./Objectives"
import Skills from "./Skills"

function Background(){
    return(
        <div className="background">
            <div className="left">
                <AboutMe />
                <Objectives />
                <Skills />
            </div>
            <div className="right">
                <Image />
                <Name />
                <Impact />
            </div>
        </div>
    )
}

export default Background