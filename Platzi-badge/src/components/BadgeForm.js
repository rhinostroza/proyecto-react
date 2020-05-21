import React from 'react';

class BadgeForm extends React.Component {

    state = {};

    // handleChange = e => {
    //    this.setState({
    //     [e.target.name] : e.target.value,
    //    }); //Componente de React - información que queremos guardar
    // };

    handleClick = e => {

    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.value)
    };

    render(){
        return(
            <div>
                <h1> New Attendant </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" 
                        value={this.props.formValues.firstName} />
                    </div>

                    <div className="form-group">
                        <label >Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastname"
                        value={this.props.formValues.lastname} />
                    </div>

                    <div className="form-group">
                        <label >Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" 
                        value={this.props.formValues.email}/>
                    </div>

                    <div className="form-group">
                        <label >Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobtitle"
                        value={this.props.formValues.jobtitle} />
                    </div>

                    <div className="form-group">
                        <label >twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" 
                        value={this.props.formValues.twitter}/>
                    </div>

                    <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
