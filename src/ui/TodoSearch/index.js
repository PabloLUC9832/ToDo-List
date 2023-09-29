import React from "react";
import './TodoSearch.css';
import {TodoContext} from "../../routes/useTodos";
function TodoSearch({searchValue,setSearchValue,loading}) {

    return(
      <input placeholder="Cortar cebolla" 
      className="TodoSearch"
      value={searchValue}
      onChange=
         {(event) =>
            {
                setSearchValue(event.target.value);
            }
         }
      disabled={loading}
      />
    );
}

export { TodoSearch };