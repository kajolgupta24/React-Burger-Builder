import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';


describe ('Auth Reducer' , () => {
    it('should return initial state if wrong action passed' , () => {

       expect(reducer(undefined, {})).toEqual({
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
       });
    })
       it('should store token if login' , () => {

        expect(reducer({
         token: null,
         userId: null,
         error: null,
         loading: false,
         authRedirectPath: '/'
        },{
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some_token',
            userId: 'some userId'
        })).toEqual({
            token: 'some_token',
            userId: 'some userId',
            error: null,
            loading: false,
            authRedirectPath: '/'
           });
    });
});