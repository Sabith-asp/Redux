// import { produce } from "immer";

// const initialLoginState = {
//   isLogin: false,
// };

// const loginReducer = produce((draft, action) => {
//   switch (action.type) {
//     case "login":
//       draft.isLogin = true;
//     case "logout":
//        draft.isLogin = false;
//     default:
//       draft;
//   }
// }, initialLoginState);

// export default loginReducer;

import { produce } from "immer";

const initialLoginState = {
  isLogin: false,
};

const loginReducer = produce((draft, action) => {
  switch (action.type) {
    case "login":
      draft.isLogin = true; // Modify the draft directly
      break;
    case "logout":
      draft.isLogin = false; // Modify the draft directly
      break;
    default:
      break;
  }
}, initialLoginState);

export default loginReducer;
