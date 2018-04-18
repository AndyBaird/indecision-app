

const appRoot = document.getElementById("app");
let visibility = false;
let detailsButton = "Show Details";
const onDetailsClick = () => {    
    visibility = !visibility;
    renderBuildIt();

};

const renderBuildIt = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1> 
            <button onClick = {onDetailsClick}>
             {visibility ? "Hide Details" : "Show Details"}
            </button>
            // this is really clever
            {visibility && (
                <p>Details</p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderBuildIt();