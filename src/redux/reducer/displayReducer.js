
export const displayReducer = (state=[] , {type,payload} ) =>{
    switch (type) {
        case 'FETCH_CARD':
            return (state =[...payload]);
        default:
            return state;
    }
}