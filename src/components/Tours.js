import Tour from "./Tour"

const Tours= (props)=>{
    return(
        <div className="tours-div">
            {props.tours.map((tour)=>
                <Tour tour={tour} removeTour={props.removeTour} key={props.id} />
            )}
        </div>
    )
}

export default Tours