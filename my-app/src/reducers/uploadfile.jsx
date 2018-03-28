import {
	UPLOAD_SUCCESS,
	UPLOAD_FAILURE
} from "../actions/action_constants";

function uploadFileReducer(state = [], action)
{
  console.log(action,'payload data')

  switch (action.type)
  {
    case 'UPLOAD_SUCCESS':
      state = action.payload;
      return state;

    case 'UPLOAD_FAILURE':
      state = action.payload;
      return state;

  	default:
       return state;
   }
}

export default uploadFileReducer
