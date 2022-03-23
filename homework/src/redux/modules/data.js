// data.js

// Actions
const LOAD = 'data/LOAD';
const UPDATE = 'data/UPDATE';
const initialState = {list: [
  {day: "월요일", rank: 0},
  {day: "화요일", rank: 0},
  {day: "수요일", rank: 0},
  {day: "목요일", rank: 0},
  {day: "금요일", rank: 0},
  {day: "토요일", rank: 0},
  {day: "일요일", rank: 0},
]};

// Action Creators
export function loadData(data) {
  return { type: LOAD, data };
};

export function updateData(data_arr){
  return { type: UPDATE, data_arr};
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      console.log(state, action);
      const new_data_list = [...initialState, action.data];
      return {list: new_data_list};
    case UPDATE: 
      const update_data_list = state.list.map(v => v.day === action.data_arr[0] ? {...v, rank: parseInt(action.data_arr[1])} : v);
      console.log(update_data_list)
      return {list: update_data_list};
    default: return state;
  }
}
