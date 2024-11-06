import { phoneApi } from "./phone";
import { compApi } from "./computer";
import { userApi } from "./user";
export default [phoneApi, compApi, userApi];

export const serviceReducer = {
  [compApi.reducerPath]: compApi.reducer,
  [phoneApi.reducerPath]: phoneApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
};
