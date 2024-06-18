import React, {useEffect, useState} from "react"

import './index.css'

import AnimatedCover from "../../../assets/animations/VacationAnimated_AME/vacation_edit.mp4"
import ChooseUs from "../../../assets/images/index/choose_us.svg"
import LightBulb from "../../../assets/images/index/lightbulb.svg"
import Navigation from "../../components/navigation/navigation.tsx";
import Video from "./components/video-row/video.tsx";
import PrimaryCard from "./components/primary-card.tsx";
import CheckInView from "./scripts/checkInView.ts";

interface IndexProps {

}
const Index : React.FC<IndexProps> = ({}) => {
    const [isRowVisible, setIsRowVisible] = useState<boolean>(false);
    const [isContainerVisible, setIsContainerVisible] = useState<boolean>(false);
    const [isCardsVisible, setIsCardsVisible] = useState<boolean>(false);

    const { rowRef, containerRef, cardsRef } = CheckInView(setIsRowVisible, setIsContainerVisible, setIsCardsVisible);

    useEffect(() => {
        // You can perform side effects here based on visibility state
        console.log("Row visibility:", isRowVisible);
        console.log("Container visibility:", isContainerVisible);
        console.log("Cards visibility:", isCardsVisible);
    }, [isRowVisible, isContainerVisible, isCardsVisible]);

    return(
        <div id={"index-container"}>
            <Navigation />
            <div id={"index-body"}>
                <Video id={"row-1"} className={"row first-row stick"} videoClassName={"animation"} videoSrc={AnimatedCover} />
                <div id={"row-2"} className={"row"}>
                    <img className={"choose-us-graphic"} src={ChooseUs} alt={"Choose Us"}/>
                </div>
                <div id={"row-3"} className={"row"}>
                    <h1 className={"title"}>A new way of doing</h1>
                    <div className={"cards"}>
                        <PrimaryCard id={"primary-card"} isCardsVisible={isCardsVisible} className={"card-1"} title={"Team management"} text={""} cardRef={cardsRef} />
                        <PrimaryCard id={"primary-card"} isCardsVisible={isCardsVisible} className={"card-2"} title={"Performance analytics"} text={""} cardRef={cardsRef} />
                        <PrimaryCard id={"primary-card"} isCardsVisible={isCardsVisible} className={"card-3"} title={"Task reminders"} text={""} cardRef={cardsRef} />
                    </div>
                </div>
                <div id={"row-4"} className={`row ideas-row ${isRowVisible ? "fadeIn" : ""}`} ref={rowRef}>
                    <div className={`ideas-container ${isContainerVisible ? "visible" : "hidden"}`} ref={containerRef}>
                        <div className={"ideas-text"}>
                            <h2>Bring Ideas to Light</h2>
                            <p>TaskVault is meticulously crafted to be your guiding beacon in the realm of productivity.
                                Bid farewell to concerns about the operational overhead that typically obstructs smooth task
                                completion.
                                Let efficiency flow seamlessly, as we light the path to effortlessly accomplish your
                                tasks.</p>
                        </div>
                        <div className={"ideas-img"}>
                            <img src={LightBulb} alt={"LightBulb"}/>
                        </div>
                    </div>
                </div>
                <div id={"bottom"}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Index
