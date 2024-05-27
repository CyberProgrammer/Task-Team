import React, {LegacyRef} from "react";

interface PrimaryCardProps {
    id: string
    className: string
    isCardsVisible: boolean
    title: string
    text?: string
    cardRef: LegacyRef<HTMLDivElement>
}
const PrimaryCard : React.FC<PrimaryCardProps> = (
    {
        id,
        className,
        isCardsVisible,
        title,
        text,
        cardRef
    }) => {

    return (
        <div id={id} className={`${isCardsVisible ? className : ""}`} ref={cardRef}>
            <div className={"card-content"}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default PrimaryCard;