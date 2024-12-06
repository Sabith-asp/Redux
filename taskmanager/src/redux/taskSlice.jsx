import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addtask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deletetask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    taskdone: (state, action) => {
      let doneItem = state.tasks.find((item) => item.id === action.payload);
      if (doneItem) {
        doneItem.done = true;
      }
    },
  },
});

export const { addtask, deletetask, taskdone } = taskSlice.actions;

export default taskSlice.reducer;
