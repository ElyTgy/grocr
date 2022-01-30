import BaseToggle from "./BaseToggle";

export default function HomeButton(props)
{
    return(
        <BaseToggle active={<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10.9129" y="7.89435" width="20.5039" height="3.45549" rx="1.72775" transform="rotate(54.9052 10.9129 7.89435)" fill="white" stroke="#528E3D" stroke-width="2"/>
                            <circle cx="10.0943" cy="10" r="9" fill="white" stroke="#528E3D" stroke-width="2"/>
                            </svg>}
                    inactive={<svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10.8186" y="7.89435" width="20.5039" height="3.45549" rx="1.72775" transform="rotate(54.9052 10.8186 7.89435)" fill="white" stroke="#C4C4C4" stroke-width="2"/>
                                <circle cx="10" cy="10" r="9" fill="white" stroke="#C4C4C4" stroke-width="2"/>
                                </svg>} />
    )
}