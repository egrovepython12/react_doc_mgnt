import {
	LISTFILES_SUCCESS,
	LISTFILES_FAILURE
} from "../actions/action_constants";

function listFileReducer(state = [], action)
{
  console.log(action,'payload data')

  switch (action.type)
  {
    case 'LISTFILES_SUCCESS':
      state = action.payload;
      return state;

    case 'LISTFILES_FAILURE':
      state = action.payload;
      return state;

  	default:
       return state;
   }
}

export default listFileReducer
