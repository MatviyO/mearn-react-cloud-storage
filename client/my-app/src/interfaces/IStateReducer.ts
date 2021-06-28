

export  interface  IStateReducer {
    user: {
        currentUser: {
            [key: string]: any
        },
        isAuth: boolean
    };
    files: {
        files: [],
        currentDir: string;
        popupDisplay: string;
        dirStack: Array<string>
        view: string
    },
    appGlobal: {
        loader: boolean
    }

}
