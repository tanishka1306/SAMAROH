import {createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    name: 'request',
    initialState:{
        email:'',
        name:'',
        event_type:'',
        venue:'',
        dateI:'',
        dateF:'',
        booking_date:''
    },
    reducers:
    {



    },
})
