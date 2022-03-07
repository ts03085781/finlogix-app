//預設值
const initState = {
    login: false,
    webinarList: [],
    showLoginForm: false,
    userInfo: {},
};

export default function Reducer(preState = initState, action) {
    const { type, data } = action;

    switch (type) {
        case "LOGIN_STAGE":
            return { ...preState, login: data };
        case "SET_SHOW_LOGIN_FORM":
            return { ...preState, showLoginForm: data };
        case "SET_WEBINAR_LIST":
            return { ...preState, webinarList: data };
        case "SET_USER_INFOT":
            return { ...preState, userInfo: data };
        default:
            return preState;
    }
}
