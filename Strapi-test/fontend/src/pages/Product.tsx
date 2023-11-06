import { getAllBook } from '../axios/bookController'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Product = () => {
    const jwt = useSelector((state: RootState) => state.auth.login.currentUser?.jwt);
    const books = useSelector((state: RootState) => state.book.getBook.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGetAllBook = () => {
        if (jwt) {
            getAllBook(jwt, dispatch, navigate);
        } else {
            window.alert("You must be login!")
        }

    }
    return (
        <>
            <div onClick={() => handleGetAllBook()}>Product</div>
            {books && books.map((item,index) => {
                return (
                    <div key={index}>{item.attributes.name}</div>
                )
            })}
        </>
    )
}

export default Product