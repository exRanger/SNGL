import React from 'react'
import {connect} from 'react-redux'
import {profileActions} from '../../store/profile/actions'

class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            surname: ''
        }
    }
    onChangeHandler = (e) => {
            
        this.setState((prev) => ({
           ...prev,
           [e.target.name]: e.target.value
            }))
        }
        submitHandler = (e) => {
            const {name, surname} = this.state;
            const newData = {
                name,
                surname
            }
            this.props.setProfile(newData)
            e.preventDefault()
        }
        render(){
            return (
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                        name='name' 
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <input
                        onChange={this.onChangeHandler} 
                        name='surname' 
                        type="text"
                        value={this.state.surname}
                        />
                    </div>
                    <button type="onSubmit">Отправить</button>
                </form>
            )
        }
}

const mapDispatchToProps = {
     setProfile: profileActions.setProfile
}

export default connect(null, mapDispatchToProps)(Form)
