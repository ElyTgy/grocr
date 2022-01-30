import BaseToggle from "./BaseToggle";

export default function HomeButton(props)
{
    return(
        <BaseToggle active={<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5944" cy="6.5" r="5.5" fill="white" stroke="#528E3D" stroke-width="2"/>
                            <path d="M6.09436 16H18.0944C20.8558 16 23.0944 18.2386 23.0944 21V25H1.09436V21C1.09436 18.2386 3.33294 16 6.09436 16Z" fill="white" stroke="#528E3D" stroke-width="2"/>
                            </svg>}
                    inactive={<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="6.5" r="5.5" fill="white" stroke="#C4C4C4" stroke-width="2"/>
                                <path d="M6 16H18C20.7614 16 23 18.2386 23 21V25H1V21C1 18.2386 3.23858 16 6 16Z" fill="white" stroke="#C4C4C4" stroke-width="2"/>
                                </svg>} />
    )
}