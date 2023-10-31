import { FETCH } from "./actionTypes";

export const fetch = (data) => {

    return {

        type: FETCH,
        payload:data
        
    }

}