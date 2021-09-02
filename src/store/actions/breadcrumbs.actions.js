export const updateBreadcrumbs = (pages) => (
    {
        type: 'UPDATE_BREADCRUMBS',
        payload: pages
    }
)

export const resetBreadcrumbs = () => (
    {
        type: 'RESET_BREADCRUMBS'
    }
)