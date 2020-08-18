const INITIAL_STATE = {
    date: undefined,
    note: ''
}
const appointmentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_DATE':
         return {   
             ...state,
            date: action.payload
        };
        case 'SET_NOTE':
         return {   
             ...state,
            note: action.payload
        }
    
    }

}