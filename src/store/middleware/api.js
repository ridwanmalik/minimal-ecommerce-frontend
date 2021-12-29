import axios from "axios"
import * as actions from "../api"

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const { url, method, data, onStart, onSuccess, onError } = action.payload

  if (onStart) dispatch({ type: onStart })

  next(action)

  try {
    const response = await axios.request({
      baseURL: process.env.REACT_APP_API_URL,
      url,
      method,
      data
    })
    if (response.data.isSuccess) {
      // General
      dispatch(actions.apiCallSuccess(response.data.data.products))
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data.data.products })
    } else {
      dispatch(actions.apiCallFailed("Data Successfully Fetched But Something Went Wrong"))
      if (onError) dispatch({ type: onError, payload: "Data Successfully Fetched But Something Went Wrong" })
    }
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message))
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message })
  }
}

export default api
