import { Redirect } from "./Redirect";

export const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h1>HCF 2024</h1>
                <h3>UC San Diego Honors Career Fair</h3>
                <h2>Qualcomm Room, Jacobs Hall</h2>
                <h2>Monday, 18th November, 1-5 pm, 2024</h2>
                
                <div className="wrapper">
                    <div className="one">
                        <Redirect url="" text= "button 1"/>
                    </div>
                    <div className="two">

                        <Redirect url="" text= "button 2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};//just add the url to the two buttons and change text to change what appears on the button