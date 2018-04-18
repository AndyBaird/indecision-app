console.log("App.js is running");


// const obj = {
//     name: 'name',
//     getName(){
//         return this.name;
//     }   
// };

//you lose 'this' context when used in functions or event handlers, therefore you must rebind like so
//const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name: 'Andrew'});



class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options : ['thing one', 'thing two', 'thing three']
        }
    };
    handleDeleteOptions(){
        this.setState(() =>{
            return {
                options: []
            }
        })
    }
    
    handlePick(){        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
        // this.setState(() =>{

        //     // return (
                
        //     // )
        // });
    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>            
            </div>
        );
            
    }
}

class Action extends React.Component {

    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    What Should I Do? 
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    //overriding the constructor to fix binding
    // constructor(props){
    //     //must use props as first arg
    //     super(props);
    //     //fixes binding within class for all calls
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }

    render(){
        console.log(this.props);
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {                    
                    //key is a reserved word and not accessible as a prop
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <Option />
                
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}



class AddOption extends React.Component {
    
    handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
    
        if(option){
            alert(option);
            // IndecisionApp.options.push(option);
            // e.target.elements.option.value = '';
            // ReactDOM.render(<IndecisionApp />, document.getElementById('app'));    
        }
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/> 
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));