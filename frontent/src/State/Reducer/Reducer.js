const initialState = {
    data:[]
}

  const datareducer= (state = initialState, { type, payload }) => {

  switch (type) {

  case "Get":
    return { 
      ...state, data:payload
     }

    case "Add":
        return{
            ...state,
            data:[...state.data,payload]
        }
        case "Delete":
          return{
              ...state,
             
          }
          case "Delete":
            return{
                ...state,
                data:[...state.data,payload]
            }
  default:
    return state
  }
}
export default datareducer
