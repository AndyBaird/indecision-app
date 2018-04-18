//rebuilt using component state & classes

class ToggleVisibility extends React.Component {
    constructor(props){
        super(props);
        this.onDetailsClick = this.onDetailsClick.bind(this);
        this.state = {
            visibility: false
        }
    }
    onDetailsClick() {   
        this.setState((prevState => {
            return {
                visibility: !prevState.visibility
            }
        }));
        
    };
    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1> 
            <button onClick = {this.onDetailsClick}>
             {this.state.visibility ? "Hide Details" : "Show Details"}
            </button>
            
            {this.state.visibility &&(
                <p>Details are here</p>
            )}
                
            
        </div>
        )
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));







// const appRoot = document.getElementById("app");
// let visibility = false;
// let detailsButton = "Show Details";
// const onDetailsClick = () => {    
//     visibility = !visibility;
//     renderBuildIt();

// };

// const renderBuildIt = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1> 
//             <button onClick = {onDetailsClick}>
//              {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             // this is really clever
//             {visibility && (
//                 <p>Details</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderBuildIt();