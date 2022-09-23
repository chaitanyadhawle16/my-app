import axios from "axios"

export const fetchCards = () => async  (dispatch) => {
        const response = await axios.get('https://reqres.in/api/users/?page=1');
        // console.log(response.data.data);
        dispatch({
            type: 'FETCH_CARD',
            payload: response.data.data  
        });
};      
