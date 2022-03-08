# Redux-Saga /  react-Query  Next js 비동기처리

##  Redux-Saga 방식 

```js

import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import  { loginAction, loginSuccessAction, logoutAction , loginFalse } from '@src/reducer/user';
import axios, { Axios, AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from 'next/router';

function loginUserAPI(data: any) {
  return axios.get("/dummy/user.json", data);
}


function* loginUser(action: any){
   
  try{
    const result = yield call(loginUserAPI, action.payload); 
     if(result.data.data.UserId === action.payload.id){
      yield put(loginSuccessAction(result.data));  
      console.log("yes")
     }else{
      yield put(loginFalse(action.payload));
      console.log("틀림")
     }
  } catch(err) {
    console.error(err); 
  }
}

function* watchLoginUser() {
  yield takeEvery(loginAction, loginUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLoginUser),
  ]);
}

```

## react-Query 방식

####login.js
```js
  import useMutationLogin, { FormParams } from '@src/hooks/useLoginMutation';

  
  const queryClient = useQueryClient();
	const mutation = useMutationLogin();

	const onSubmit: SubmitHandler<FormParams> = (info) => {
		console.log(info);
		mutation.mutate(
			info,
			{
				onSuccess: (res) => {
					queryClient.setQueryData(['user'], () => {return res});
					console.log(queryClient.getQueryData(['user']));
					dispatch(loginSuccessAction(res.data));

					router.push('/myjobs/MyJobs');
				},
				onSettled: () => {
					/* 성공 여부와 관계없이 작업이 끝나면 처리 */
					setLoading(false);
				},
			},
		);
	}

	const { status, data, error } = useQuery(['user'])
  
  ```
  
  #### useLoginMutation.ts
  ```js
  import { logInAPI } from "@pages/apis/user";
  import User from "@src/interfaces/user";
  import axios from "axios";
  import { useMutation } from "react-query";

  export interface FormParams {
    id: string;
    password: string;
  }

  interface APIReturnType {
    code: string;
    data: User;
  }

  const login = async (state: FormParams): Promise<APIReturnType> => {
    const data = await axios
      .get("/dummy/user.json", { data: state })
      .then((response) => response.data);

    return data;
  };

  const useMutationLogin = () => {
    return useMutation(login);
  };

  export default useMutationLogin;
  
```

