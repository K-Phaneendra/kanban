const API_BASE_URL = 'http://localhost:9000/';

export const UserUrl = {
  CREATE_USER: `${API_BASE_URL}users/createuser`,
  UPDATE_USER: `${API_BASE_URL}users/updateuser`,
  FETCH_USERS: `${API_BASE_URL}users/fetchusers`,
  ASSIGN_TASK: `${API_BASE_URL}users/asigntask`,
  UPDATE_ASSIGNED_TASKS: `${API_BASE_URL}users/updateassignedtasks`
};

export const TaskUrl = {
  CREATE_TASK: `${API_BASE_URL}tasks/createtask`,
  FETCH_TASKS: `${API_BASE_URL}tasks/fetchtasks`
};

export const orderUrl = {
  FETCH_ORDERS: `${API_BASE_URL}orders/fetchOrders`,
  SUBMIT_ORDER: `${API_BASE_URL}orders/submitOrder`
};
