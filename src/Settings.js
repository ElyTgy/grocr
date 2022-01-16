import Switch from "./CustomComponents/Switch"
import './Settings.css'

export default function Settings(props){
    return(
        <div>
            <h1 className='my-4 mx-4'>Settings</h1>
            <div className="settings mx-2 container-fluid">
                <div className="settings-settingitem">
                    <p className="settings-settingitem-text">Only Suggest meat-free items</p>
                    <Switch className="settings-settingitem-switch"/>
                </div>
                <div className="settings-settingitem">
                    <p className="settings-settingitem-text">More options to be added soon!</p>
                </div>
            </div>
        </div>)
}