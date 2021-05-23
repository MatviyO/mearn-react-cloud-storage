import {setFiles} from "../redux/action/fileAction";
import {BaseDataService} from "./BaseDataService";
const svc = new BaseDataService()

export function getFiles(dirId: string) {
    return async (dispatch: any) => {
        try {
            const result = await svc.request(`files${dirId ? `?parent=`+dirId : ''}`, 'GET')
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
            const body = JSON.stringify({
                name,
                parent: dirId,
                type: 'dir'
            })
            const result = await svc.request(`api/files`, 'POST', body)
            dispatch(setFiles(result))
            alert(JSON.stringify(result))
        } catch (e) {
            alert(console.log(e))
        }
    }
}
