
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
export function getFiles(dirId: any) {
    return async (dispatch: any) => {
        try {
            const response = await fetch(`http://localhost:5000/api/files${dirId ? `?parent=`+dirId : ''}`,{
                headers: {...headers, Authorization: `Bearer ${localStorage.getItem('token')}`},
                method: 'GET'
            } )
            let result = await response.json();
            alert(JSON.stringify(result))
        } catch (e) {
            alert(console.log(e))
        }
    }


}
