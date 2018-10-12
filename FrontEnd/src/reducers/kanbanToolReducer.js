import { cloneDeep } from 'lodash';
import { UserType, TaskType } from '../actions/ActionType';

const initialState = {
  snackBarData: { open: false, msg: '' },
  users: [],
  tasks: []
};

export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case UserType.CREATE_USER: {
      const { users } = st;
      const usersClone = cloneDeep(users);
      usersClone.push(action.payload);
      st = {
        ...state,
        users: usersClone,
        snackBarData: action.snackBarData
      };
      break;
    }

    case 'HANDLE_SNACKBAR': {
      st = { ...state, snackBarData: action.payload };
      break;
    }

    case TaskType.CREATE_TASK: {
      st = {
        ...state,
        tasks: action.payload,
        snackBarData: action.snackBarData
      };
      break;
    }

    case UserType.FETCH_USERS: {
      if (action.snackBarData) {
        st = {
          ...state,
          users: action.payload,
          snackBarData: action.snackBarData
        };
      } else {
        st = {
          ...state,
          users: action.payload
        };
      }
      break;
    }

    default: {
      return st;
    }
  }
  return st;
}
