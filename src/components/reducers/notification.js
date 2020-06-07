import toastr from 'toastr';

toastr.options = {
    "closeButton": false,
    "preventDuplicates": true
};

export const notifications = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return toastr.success(action.message)
        case 'ERROR':
            return toastr.error(action.message)
        default:
            throw new Error('Unexpected Action')
    }
}