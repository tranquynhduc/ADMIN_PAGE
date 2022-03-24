import { ADD_USER, UPDATE_USER, DELETE_USER } from './Action';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';

const initialState = [
    {
        id: '1',
        avatar:'https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg',
        username: 'socola',
        name: ' tran thi socola',
        age: '1997',
        gender: 'Male',
        phone: '0000000000',
        email: '123@gmail.com',
        address: 'Binh Dinh',
        password: '123456',
    },
    {
        id: '2',
        avatar:'https://freenice.net/wp-content/uploads/2021/08/anh-dai-dien-hai-huoc-cute.jpg',
        username: 'Pepsi',
        name: ' Nguyen hoang PepSi',
        age: '1996',
        gender: 'Famale',
        phone: '0000000022',
        email: '234@gmail.com',
        address: 'Quy Nhon-Binh Dinh',
        password: '123456',
    },
]

export const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        case UPDATE_USER:
            return state.map((update) => update.id === action.payload.id ? action.payload : update);
        case DELETE_USER:
            return state.filter((deletes) => deletes.id !== action.payload && deletes); 
        default:
            return state
    }
}