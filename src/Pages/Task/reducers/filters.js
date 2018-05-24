
const initialState = {
  page: 0,
  campaign_id: '001',
  capPerAmbassador_lte: undefined,
  capPerAmbassador_gte: undefined,
  quantity_lte: undefined,
  quantity_gte: undefined,
  points_lte: undefined,
  points_gte: undefined,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
          const { payload : { filterName, value } = {} } = action;
          return {
            ...state,
            [filterName]: value,
          }
        default:
            return state
    }
}

export default reducer;
