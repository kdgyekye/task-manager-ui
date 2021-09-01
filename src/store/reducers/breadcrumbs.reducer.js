const INITIAL_STATE = {
    page: 'Home'
}

const breadCrumbs = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_BREADCRUMBS':
            return {page: `Home/${action.payload}`}
        default: return state
    }
}

export default breadCrumbs