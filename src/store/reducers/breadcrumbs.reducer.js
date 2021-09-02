const INITIAL_STATE = {
    pages: []
}

const breadCrumbs = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_BREADCRUMBS':
            return {
                ...state,
                pages: state.pages.concat(action.payload)
            }
        case 'RESET_BREADCRUMBS':
            return {
                ...state,
                pages: []
            }
        default: return state
    }
}

export default breadCrumbs