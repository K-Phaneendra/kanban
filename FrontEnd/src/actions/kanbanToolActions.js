import { API_POST, API_GET } from './APIMethods';
import { UserType, TaskType } from './ActionType';
import { UserUrl, TaskUrl } from './ActionURL';

export const handleSnackBar = data => dispatch => {
  dispatch({
    type: 'HANDLE_SNACKBAR',
    payload: data
  });
};

export const createUser = data => {
  const url = `${UserUrl.CREATE_USER}`;
  return async dispatch => {
    try {
      const result = await API_POST(url, data);
      if (!result.error) {
        dispatch({
          type: UserType.CREATE_USER,
          payload: result.data,
          snackBarData: { open: true, msg: result.message }
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateUser = data => {
  const url = `${UserUrl.UPDATE_USER}`;
  return async dispatch => {
    try {
      const result = await API_POST(url, data);
      if (!result.error) {
        dispatch({
          type: UserType.FETCH_USERS,
          payload: result.data,
          snackBarData: { open: true, msg: result.message }
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createTask = data => {
  const url = `${TaskUrl.CREATE_TASK}`;
  return async dispatch => {
    try {
      const result = await API_POST(url, data);
      if (!result.error) {
        dispatch({
          type: TaskType.CREATE_TASK,
          payload: result.data,
          snackBarData: { open: true, msg: result.message }
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const fetchUsers = () => {
  const url = `${UserUrl.FETCH_USERS}`;
  return async dispatch => {
    try {
      const result = await API_GET(url);
      if (!result.error) {
        dispatch({
          type: UserType.FETCH_USERS,
          payload: result.data
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};
