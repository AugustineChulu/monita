import "../../css/navbar.css";

(document.getElementById("navBarWrapper") as HTMLDivElement).innerHTML = `
    <div id="navBar">
        <div id="inactive_wrapper">
            COMPANY
            <div id="inactiveSubHead">
                PROFILE
            </div>
        </div>

        <div id="active_wrapper">
            <img alt="logo" src="images/logo2.png" id="navBarLogo">
        </div>
    </div>
`;