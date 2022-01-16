import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React, {Component} from 'react'
import DropDown from './CustomComponents/Dropdown'

const dietLabels = ['balanced', 'high fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium', 'none'] //optional
const healhtLabels = ['alcohol-free', 'crustacean-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'keto-friendly', 'kidney-friendly', 'kosher', 'low-potassium', 'low-sugar', 'Mediterranean', 'No-oil-added', 'paleo', 'peanut-free', 'pecatarian', 'pork-free', 'red-meat-free', 'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'vegan', 'vegetarian', 'wheat-free'] //optional
const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime', 'none']


export default class CreateListForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            listName:'',
            diet: null,
            health:[],
            mealType:null,
            items:[],
            caloriesmin: 0,
            caloriesmax: 2000
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAlt = this.handleChangeAlt.bind(this);
    }
    
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }

    handleChangeAlt(name, value){
        this.setState({[name]:value})
    }

    componentDidMount(){
        ValidatorForm.addValidationRule("isUnique", value => {
            for(let name of this.props.lisNames){
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
                    <DropDown handleChange={this.handleChangeAlt} text='selet diet' name='diet' options={dietLabels}/>
                    <DropDown handleChange={this.handleChangeAlt} text='select meal' name='mealType' options={mealTypes}/>
                </ValidatorForm>
            </div>)
    }
    
}
