import {addFile, setFiles} from "../redux/action/fileAction";
import {BaseDataService} from "./BaseDataService";
const svc = new BaseDataService()

export function getFiles(dirId: string) {
    return async (dispatch: any) => {
        try {
            const result = await svc.request(`files${dirId ? `?parent=`+dirId : ''}`, 'GET')
            dispatch(setFiles(result))
        } catch (e) {
            console.log(e)
        }
    }
}


export function createDir(dirId: string, name: string) {
    return async (dispatch: any) => {
        try {
            const body = {
                name,
                parent: dirId,
                type: 'dir'
            }
            const result = await svc.request(`files`, 'POST', body)
            dispatch(addFile(result))

        } catch (e) {
           console.log(e)
        }
    }
}
