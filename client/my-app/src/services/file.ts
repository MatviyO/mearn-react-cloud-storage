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


export function uploadFile(file: any, dirId: string) {
    console.log(file, dirId)
    return async (dispatch: any) => {
        try {
            const files = file
            const formData = new FormData()
            formData.append('file', files)
            if (dirId) formData.append('parent', dirId)
            const result = await svc.request(`files/upload`, 'POST', null, formData)
            dispatch(addFile(result))

        } catch (e) {
            console.log(e)
        }
    }
}

export async  function downloadFile(file: any) {
    const response = await svc.request(`files/download?id=${file._id}`, 'GET', null,null, 'blob')
    if (response) {
        const download = window.URL.createObjectURL(response)
        const link = document.createElement('a')
        link.href = download
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
}
