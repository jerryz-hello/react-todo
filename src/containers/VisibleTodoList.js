import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { VISIBILITY_FILTERS } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos;
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case VISIBILITY_FILTERS.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
