import React from "react"; 
import { Card } from "../../components/Card/Card";

const Home = () => {
    const card_labels = [
        {
            name: "Look up for word pronunciations and play it!", 
            description: "Our app provides with a friendly user interface to look up for pronunciations", 
            auth: true
        }, 
        {
            name: "Edit and provide customer pronunciations", 
            description: "Our app enable employees to override standard pronunciations and provide 'custom' pronunciations for cases where employee prefers pronunciations that differs from the standard solution", 
            auth: true
        }
    ]
    return(
        <div className="landing">
            <div>
             <h1>Hackthon - 2022</h1>
            </div>
            <div>
                <div>
                    <h3>It's Pronounced GIF</h3>
                </div>
                <div className="wrapper">
                    {card_labels.map((item, key) => {
                        return (
                            <div key={key} className="card border-secondary mb-3" style={{width:"21rem", height: "18rem"}}>
                                <Card item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;