import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React, {Component} from 'react'
import DropDown from './CustomComponents/Dropdown'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {CustomButton as Button} from "./CustomComponents/Button"
import AppBar from "./CustomComponents/AppBar"
import './CreateListForm.css'

const dietLabels = ['balanced', 'high fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium', 'none'] //optional
const healthLabels = ['alcohol-free', 'crustacean-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'keto-friendly', 'kidney-friendly', 'kosher', 'low-potassium', 'low-sugar', 'Mediterranean', 'No-oil-added', 'paleo', 'peanut-free', 'pecatarian', 'pork-free', 'red-meat-free', 'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'vegan', 'vegetarian', 'wheat-free'] //optional
const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime', 'none']


export default class CreateListForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            listName:'',
            diet: null,
            health:Object.assign({}, ...healthLabels.map((x)=>({[x]:false}))),
            mealType:null,
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAlt = this.handleChangeAlt.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }

    handleChangeAlt(name, value){
        this.setState({[name]:value})
    }

    //TODO: this isnt working
    handleCheckBoxChange(e){
        let name = e.target.name
        this.setState((st)=>{return {[st.health[name]] :![st.health[name]]}})
    }

    async handleSubmit(){
        await this.props.addList(this.state.listName, this.state);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule("isUnique", value => {
            for(let name of this.props.listNames){
                if(name === value){return false}
            }
            return true;
        })
    }

    render(){
        return(
            <div>
                <AppBar/>
            <div class="mx-2 container-fluid list-form">
                <h1 className='mx-4 my-4 form-title'>Create your List!</h1>
                <ValidatorForm className="validator-form">
                    <div className="sec1">
                        <TextValidator
                        className="list-name"
                        name="listName"
                        value={this.state.listName}
                        onChange={this.handleChange}
                        placeholder="list name"
                        validators={['required', 'isUnique']}
                        errorMessages={['list must have a name', 'name of the list must be unique']}
                        />
                        <DropDown className="diet-dropdown" handleChange={this.handleChangeAlt} text='selet diet' name='diet' options={dietLabels}/>
                        <DropDown className="meal-dropdown" handleChange={this.handleChangeAlt} text='select meal' name='mealType' options={mealTypes}/>
                    </div>
                    <br/>
                    <div className="mx-4 my-4 form-healthoptions">
                        <h4 className="form-healthoptions-title">Select different health options</h4>
                        {healthLabels.map(label=><FormControlLabel className="healthoptiones-options" control={<Checkbox name={label} onClick={this.handleCheckBoxChange} />} label={label}/>)}
                    </div>
                    <Button className="submitButton" color="green" onClick={this.handleSubmit}>Make a list!</Button>
                </ValidatorForm>
            </div>

            </div>)
    }
    
}
