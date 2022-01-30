import * as React from 'react';

export default function DropDown(props) {
  const [selectedOption, setOption] = React.useState(null);
  const [dropDownState, toggleDrowDown] = React.useState(false);
  
  function saveOption(e){
    if(e.target.outerText === 'none'){setOption(null)}
    else{setOption(e.target.outerText)}
    props.handleChange(props.name, e.target.outerText)
  }

  return (
    <div class="flex justify-center mb-3 md:mb-0">
  <div>
    <div class="dropdown relative align-middle">
      <button
        onClick={()=>toggleDrowDown(!dropDownState)}
        class="
          dropdown-toggle
          w-52
          h-8
          text-center
          px-6
          py-2.5
          bg-green-400
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-300 hover:shadow-lg
          focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-300 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          justify-center
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption ? selectedOption : `select ${props.name}`}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class={
          `dropdown-menu
          min-w-max
          absolute
          ${!dropDownState && "hidden"}
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none`
        }
        aria-labelledby="dropdownMenuButton1"
      >

        {
            props.options.map(option => {
                return(
                    <li key={option} name={option} onClick={saveOption}>
                        <a
                            class="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                            "
                            href="#"
                        > {option}
                        </a>
                    </li>
                )
            })
        }
      </ul>
    </div>
  </div>
</div>
  );
}

