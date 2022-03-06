//引入createStore，專門用於創建redux中最核心的store對象
import { createStore } from "redux";

import Reducer from "./reducer";

export default createStore(Reducer);
