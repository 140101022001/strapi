import { createSlice } from "@reduxjs/toolkit";

interface Book {
    getBook: {
        data: [
            {
                id: number,
                attributes : {
                    name: string,
                    code :string,
                    author: string,
                    price: number,
                    createdAt: string,
                    updatedAt: string,
                    publishedAt: string
                }
            }
        ],
        meta: {
            pagination: {
                page: number,
                pageSize: number,
                pageCount: number,
                total: number
            }
        }
    },
    isFetching: boolean,
    error : boolean
}

const initialState: Book = {
    getBook : {
        data: [
            {
                id: 0,
                attributes : {
                    name: '',
                    code :'',
                    author: '',
                    price: 0,
                    createdAt: '',
                    updatedAt: '',
                    publishedAt: ''
                }
            }
        ],
        meta: {
            pagination: {
                page: 0,
                pageSize: 0,
                pageCount: 0,
                total: 0
            }
        }
    },
    isFetching: false,
    error: false

}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBookStart : (state) => {
            state.isFetching = true
        },
        getBookSuccess : (state, action) => {
            state.isFetching = false,
            state.getBook = action.payload,
            state.error = false
        },
        getBookFailed : (state) => {
            state.isFetching = false,
            state.error = true
        }
    }
})

export const {
    getBookStart,
    getBookSuccess,
    getBookFailed
} = bookSlice.actions

export default bookSlice.reducer