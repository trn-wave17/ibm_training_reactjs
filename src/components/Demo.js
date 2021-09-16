import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            active:false
        }
        this.formSubmitted = this.formSubmitted.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.forceUpdateState = this.forceUpdateState.bind(this);
    }



    formSubmitted(event) {
        event.preventDefault();
        if(!this.state.name){
            alert("Name can't be empty");
            return;
        }
        const employee = {...this.state};
        this.props.onAdd(employee);

        this.setState({
            name:"",
            email:"",
            active:false
        });
        
    }

    handleInputChanged(event){
        const target = event.target;
        const name = target.name;
        const value = target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]: value
        });
    }

    forceUpdateState(){
        this.forceUpdate();
    }

    componentDidCatch(){
        console.log("Error");
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    componentDidMount(){
        console.log("Component mounted onto DOM");
    }

    componentWillUnmount(){
        console.log("Component getting destroyed");
    }


    shouldComponentUpdate(){
        console.log("Should update component");
        return true;
    }

    render() {
        return (
            <>
                <form className="employee-form" onSubmit={this.formSubmitted}>
                    <div className="form-control">
                        <label>Name</label>
                        <input id="formName" type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleInputChanged}/>
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChanged}/>
                    </div>
                    <div className="form-control form-control-check">
                        <label>Active</label>
                        <input type="checkbox" value={this.state.active} name="active" checked={this.state.active} onChange={this.handleInputChanged}/>
                    </div>
                    <input className="btn btn-block" type="submit" value="Add Employee"/>
                </form>
                
                {/*<h3>{Math.random()}</h3>
                <input type="button" className='btn btn-block' value="Update" onClick={this.forceUpdateState}/>*/}
            </>
        )
    }
}
