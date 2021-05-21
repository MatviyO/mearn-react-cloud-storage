import {setFiles} from "../redux/action/fileAction";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
export function getFiles(dirId: string) {
    return async (dispatch: any) => {
        try {
            const response = await fetch(`http://localhost:5000/api/files${dirId ? `?parent=`+dirId : ''}`,{
                headers: {...headers, Authorization: `Bearer ${localStorage.getItem('token')}`},
                method: 'GET'
            })
            let result = await response.json();
            dispatch(setFiles(result))
            alert(JSON.stringify(result))
        } catch (e) {
            alert(console.log(e))
        }
    }
}

export function createDir(dirId: string, name: string) {
    return async (dispatch: any) => {
        try {
            const response = await fetch(`http://localhost:5000/api/files`,{
                headers: {...headers, Authorization: `Bearer ${localStorage.getItem('token')}`},
                method: 'POST',
                body: JSON.stringify({
                    name,
                    parent: dirId,
                    type: 'dir'
                })
            })
            let result = await response.json();
            dispatch(setFiles(result))
            alert(JSON.stringify(result))
        } catch (e) {
            alert(console.log(e))
        }
    }
}
