import React, {useEffect, useState} from "react"
import { useInView } from "react-intersection-observer";

import AnimatedCover from "../../../assets/animations/VacationAnimated_AME/vacation_edit.mp4"
import ChooseUs from "../../../assets/images/index/choose_us.svg"
import LightBulb from "../../../assets/images/index/lightbulb.svg"

import './index.css'

interface IndexProps {

}

const Index : React.FC<IndexProps> = (
    {

    }) => {

    const [isRowVisible, setIsRowVisible] = useState<boolean>(false);
    const [isContainerVisible, setIsContainerVisible] = useState<boolean>(false);
    const [isCardsVisible, setIsCardsVisible] = useState<boolean>(false);

    const [rowRef, rowInView] = useInView({
        threshold: 0.8, // Trigger when 50% of the element is visible
    });

    const [containerRef, containerInView] = useInView({
        threshold: 0.8, // Trigger when 50% of the element is visible
    });

    const [cardsRef, cardsInView] = useInView({
        threshold: 0.8, // Trigger when 50% of the element is visible
    });

    useEffect(() => {
        if (rowInView) {
            setIsRowVisible(true);
        }
    }, [rowInView]);

    useEffect(() => {
        if (containerInView) {
            setIsContainerVisible(true);
        }
    }, [containerInView]);

    useEffect(() => {
        if (cardsInView) {
            setIsCardsVisible(true);
        }
    }, [cardsInView]);

    return(
        <div id={"index-container"}>
            <div id={"row-1"} className={"row first-row stick"}>
                <video className={"animation"} autoPlay muted loop>
                    <source src={AnimatedCover} type="video/mp4"/>
                </video>
            </div>
            <div id={"row-2"} className={"row"}>
                <img className={"choose-us-graphic"} src={ChooseUs} alt={"Choose Us"}/>
            </div>
            <div id={"row-3"} className={"row"}>
                <h1 className={"title"}>A new way of doing</h1>
                <div className={"cards"}>
                    <div id={"card"} className={`${isCardsVisible ? "card-1" : ""}`} ref={cardsRef}>
                        <div className={"card-content"}>
                            <h2>Team management</h2>
                        </div>
                    </div>
                    <div id={"card"} className={`${isCardsVisible ? "card-2" : ""}`} ref={cardsRef}>
                        <div className={"card-content"}>
                            <h2>Performance analytics</h2>
                        </div>
                    </div>
                    <div id={"card"} className={`${isCardsVisible ? "card-3" : ""}`} ref={cardsRef}>
                        <div className={"card-content"}>
                            <h2>Task reminders</h2>
                        </div>
                    </div>
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
    )
}

export default Index
