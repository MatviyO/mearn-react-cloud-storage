

export  interface  IStateReducer {
    user: {
        currentUser: object,
        isAuth: boolean
    };
    files: {
        files: [],
        currentDir: string;
        popupDisplay: boolean
    }

}
