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
                        {/* <button href=""> button 1</button> */}
                        <Redirect url="" text= "button 1"/>
                    </div>
                    <div className="two">
                        {/* <button> button 2</button> */}
                        <Redirect url="" text= "button 2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};