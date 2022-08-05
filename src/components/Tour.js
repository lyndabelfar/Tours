import { useState } from "react"

const Tour =(props)=>{
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="tour-div">
            <img src={props.tour.image} />
            <div className="data">
                <div className="top">
                    <div className="name">{props.tour.name}</div>
                    <div className="price">{"$" +props.tour.price}</div>
                </div>
                <div className="info">{readMore?props.tour.info:`${props.tour.info.substring(0,200)}`} 
                <button className="show-btn" onClick={()=>{
                    setReadMore(!readMore)
                    }}>{readMore?'show less':'read more...'}</button></div>
            </div>
            <button className="delete-btn" onClick={()=> props.removeTour(props.tour.id)} >Not Interested</button>

                


        </div>
    )
}

export default Tour