import "./Energy.css"

function Energy(props){
    return(
        <div className="energy">
             {props.value + " ккал"}    
        </div>
    );
}
export default Energy