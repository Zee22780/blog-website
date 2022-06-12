import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: "tech",
    blogData: null,
},
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
    setSignedIn: (state, action) => {
      state.userData = action.payload
    },
    setSignedIn: (state, action) => {
      state.searchInput = action.payload
    },
    setSignedIn: (state, action) => {
      state.blogData = action.payload
    },
  },
})

export default userSlice;