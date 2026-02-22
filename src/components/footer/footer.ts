import "../../css/footer.css";

(document.getElementById("pageFooter") as HTMLDivElement).innerHTML = `
    <div id="footerContentWrapper">

            <img alt="logo" src="images/logo2.png" id="footer_logo">
        
            <div id="contactInfoWrapper">

                <div id="cw_addresses">
                    <b class="footer_sub_title">Contact Address</b>
                    <br>
                    <i class="fa-solid fa-location-dot"></i>&ensp;INDECO House, Room 1,
                    <br>
                    &emsp; 15th Floor, South Wing ,
                    Room 1, Cairo Road,
                    <br>
                    &emsp; P.O Box 50308, Lusaka
                    Zambia
                    <br>
                    <i class="fa-solid fa-phone"></i>&ensp;+2609 5085 3597 / 98
                    
                </div>

                <div id="cw_contactLinks">
                    <b class="footer_sub_title">Contact Numbers</b>
                    <br>
                    Monita et &emsp;2609 7644 7463
                    <br>
                    <i class="fa-solid fa-phone"></i>&ensp;+2609 5085 3598 / 7
                    <br>
                    <i class="fa-solid fa-phone"></i>&ensp;+2609 6567 7031
                    <br><br>

                    <a href="mailto:monitaet@gmail.com">
                        <i class="fa-solid fa-envelope"></i>&ensp;monitaet@gmail.com
                    </a>
                    <br>
                    <a href="mailto:monitaet@zambia.co.zm">
                        <i class="fa-solid fa-envelope"></i>&ensp;monitaet@zambia.co.zm
                    </a>
                    
                </div>

            </div>

        </div>
`;