import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
const CheckInView = (
    setIsRowVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setIsContainerVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setIsCardsVisible: React.Dispatch<React.SetStateAction<boolean>>
    ) => {

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

    return { rowRef, containerRef, cardsRef };
}

export default CheckInView;