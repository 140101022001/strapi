import instance from "./axiosCustomize";
import { getBookStart, getBookSuccess, getBookFailed } from '../redux/bookSlice'


const getAllBook = async (token: string, dispatch: any, navigate: any) => {
    dispatch(getBookStart())
    try {
        
        const res = await instance.get('books', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(getBookSuccess(res.data))
    } catch (error) {
        dispatch(getBookFailed());
        window.alert("Denied Permission!");
    }
}
export { getAllBook }