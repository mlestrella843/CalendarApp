import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
    title: 'Boss Birthday',
    notes: 'Pick up the cake',
    start: new Date(),
   // end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name:'Maria Luisa'
    }
};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [ tempEvent ],
        activeEvent: null
    },
    reducers: {
        increment: (state, ) => {
            state.counter += 1;
        },
        
    }
});

export const { increment } = calendarSlice.actions;
