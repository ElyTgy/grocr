import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React, {Component} from 'react'
import DropDown from './DropDown';
import Checkbox from './Checkbox';
import Button from "./Button"
import Input from './Input';

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
        alert(name)
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
            <div class="mx-6 my-4">
                <h1 className='header-text mb-5'>Create your List!</h1>
                <form className="ml-5">
                    <div className="mb-5 flex justify-evenly items-center">
                        <Input 
                        name="listName" 
                        value={this.state.listName}
                        onChange={this.handleChange}
                        placeholder="list name"/>
                        <DropDown handleChange={this.handleChangeAlt} text='selet diet' name='diet' options={dietLabels}/>
                        <DropDown handleChange={this.handleChangeAlt} text='select meal' name='mealType' options={mealTypes}/>
                    </div>
                    <br/>
                    <div class="flex justify-center">
                        <div>
                            <div class="form-check">
                                <h4>Select different health options</h4>
                                {healthLabels.map(label=>{return <Checkbox name={label}/>})}
                            </div>
                        </div>
                    </div>
                    <Button color="green" onClick={this.handleSubmit}>Make a list!</Button>
                </form>
            </div>)
    }
    
}
