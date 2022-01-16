import BaseToggle from "./CustomComponents/Togglers/BaseToggle";

export default function SettingsButton(props)
{
    return(
        <BaseToggle active={<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.09436" width="2" height="24" rx="1" fill="#528E3D"/>
                            <rect x="10.0944" width="2" height="24" rx="1" fill="#528E3D"/>
                            <rect x="18.0944" width="2" height="24" rx="1" fill="#528E3D"/>
                            <circle cx="3.09436" cy="18" r="2" fill="white" stroke="#528E3D" stroke-width="2"/>
                            <circle cx="11.0944" cy="7" r="2" fill="white" stroke="#528E3D" stroke-width="2"/>
                            </svg>}
                    inactive={<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" width="2" height="24" rx="1" fill="#C4C4C4"/>
                            <rect x="10" width="2" height="24" rx="1" fill="#C4C4C4"/>
                            <rect x="18" width="2" height="24" rx="1" fill="#C4C4C4"/>
                            <circle cx="3" cy="18" r="2" fill="white" stroke="#C4C4C4" stroke-width="2"/>
                            <circle cx="11" cy="7" r="2" fill="white" stroke="#C4C4C4" stroke-width="2"/></svg>} />
    )
}