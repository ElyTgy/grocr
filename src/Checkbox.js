export default function CheckBox(props){
    return (
    <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-400 checked:border-green-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {props.name}
      </label>
    </div>

    )
}