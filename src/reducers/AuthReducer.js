import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types'

const Initial_State = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = Initial_State, action) => {
    switch (action.type) {
        case EMAIL_CHANGED :
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED :
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS :
            return { ...Initial_State, user: action.payload };
        case LOGIN_USER_FAIL :
            return { ...state, error: 'Authentication Failed', loading: false };
        case LOGIN_USER :
            return { ...state, loading: true, error: '' };            
        default :
            return state;
    }
}
