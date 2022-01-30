import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React, {Component} from 'react'
import DropDown from './CustomComponents/Dropdown'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {CustomButton as Button} from "./CustomComponents/Button"


const dietLabels = ['pescetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'vegetarian'] //optional
const healthLabels = ['alcohol-free', 'crustacean-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'keto-friendly', 'kidney-friendly', 'kosher', 'low-potassium', 'low-sugar', 'Mediterranean', 'No-oil-added', 'paleo', 'peanut-free', 'pecatarian', 'pork-free', 'red-meat-free', 'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'vegan', 'vegetarian', 'wheat-free'] //optional
const mealTypes = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink', 'none']


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
            <div class="mx-2 container-fluid">
                <h1 className='mx-4 my-4'>Create your List!</h1>
                <ValidatorForm>
                    <TextValidator
                    name="listName"
                    value={this.state.listName}
                    onChange={this.handleChange}
                    placeholder="list name"
                    validators={['required', 'isUnique']}
                    errorMessages={['list must have a name', 'name of the list must be unique']}
                    />
                    <DropDown handleChange={this.handleChangeAlt} text='select diet' name='diet' options={dietLabels}/>
                    <DropDown handleChange={this.handleChangeAlt} text='select meal' name='mealType' options={mealTypes}/>
                    <br/>
                    <div>
                        <h4>Select different health options</h4>
                        {healthLabels.map(label=><FormControlLabel control={<Checkbox name={label} onClick={this.handleCheckBoxChange} />} label={label}/>)}
                    </div>
                    <Button color="green" onClick={this.handleSubmit}>Make a list!</Button>
                </ValidatorForm>
            </div>)
    }
    
}
