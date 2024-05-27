import React from "react";

interface FooterProps {
    setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}

const Footer : React.FC<FooterProps> = ({setSelectedSection}) => {

    return (
        <div id={"side-navigation-footer"}>

        </div>
    )
}

export default Footer;