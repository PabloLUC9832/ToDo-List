import './TodoList.css';

function TodoList(
    {children,error,onError,loading,onLoading,
     searchedTodos,onEmptyTodos,render,totalTodos,onEmptySearchResults,
     searchText}){

  return(
    <section>

      {error && onError()}
      {loading && onLoading()}

      { (!loading && !totalTodos) && onEmptyTodos() }

      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}

      { searchedTodos.map(render) }

      <ul className='TodoList'>
        {children}
      </ul>

    </section>

  );
}

export{ TodoList };