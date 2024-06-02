import React from "react";
import LogoutButton from "../../../../components/buttons/LogoutButton.tsx";

interface FooterProps {

}

const Footer : React.FC<FooterProps> = ({}) => {

    return (
        <div id={"side-navigation-footer"}>
            <LogoutButton />
        </div>
    )
}

export default Footer;