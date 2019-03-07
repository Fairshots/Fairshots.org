import { FAIRSHOTS_API } from "./constants";
import toggleLoading from "./toggleLoading";

export default function getAllOrgs() {
  return async dispatch => {
    dispatch(toggleLoading());
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await fetch(`${FAIRSHOTS_API}api/organization/all`, config);
      if (res.ok) {
        const allOrgs = await res.json();
        console.log(allOrgs);
        dispatch({
          type: "GET_ALLOrgs",
          payload: allOrgs
        });
        dispatch(toggleLoading());
      } else throw res;
    } catch (e) {
      console.log(e.toString());
      dispatch({
        type: "allOrgs_ERROR",
        payload: e.statusText !== undefined ? e.statusText : e.toString()
      });
      dispatch(toggleLoading());
    }
  };
}
