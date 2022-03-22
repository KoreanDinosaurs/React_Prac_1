// data.js

// Actions
const LOAD   = 'data/LOAD';
const initialState = {list: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]};

// Action Creators
export function loadData(data) {
  return { type: LOAD, data };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      const new_data_list = [...initialState, action.data];
      return {list: new_data_list};
    default: return state;
  }
}
