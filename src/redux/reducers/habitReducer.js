import { createSlice } from "@reduxjs/toolkit";


/* setting inital state */

const initialState = {
    habits : [],
    weeklyProgressHabitToShow : {},
}


/* array represent days */
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]


/* setting initial weekly progress array when new habit is pushed */

const settingWeeklyProgress = ()=>{
    const date = new Date();
    const week = [];
    
    for(let i=6;i>=0;i--)
    {
        const currentDate = new Date(date);
        currentDate.setDate(date.getDate() - i);
        const eachDay = {
            day : days[currentDate.getDay()],
            date : currentDate.toLocaleDateString(),
            status : "None"
        }
        week.push(eachDay);
    }
    
    return week;
}



/* create a slice */

const habitSlice = createSlice({
    name : "habits",
    initialState,
    reducers:{
        
        //Action for adding new habit

        addHabit : (state,action)=>{
            state.habits.push({name : action.payload, weeklyProgress: settingWeeklyProgress(),completedDays : 0});
        },

        // Action to set which habit's weekly progress to show

        setWeeklyHabitToShow : (state,action)=>{
            state.weeklyProgressHabitToShow = {...action.payload};
        },


        // Action to change the status of a habit for a particular day

        updateHabitStatus : (state,action)=>{
            const {weeklyProgressHabitToShow,index,status} = action.payload;
            const habitIndex = state.habits.findIndex((habit)=>habit.name === weeklyProgressHabitToShow.name);

            // Update the status of the specific day in the habit's weekly progress
            state.habits[habitIndex].weeklyProgress[index].status = status;
            state.weeklyProgressHabitToShow.weeklyProgress[index].status = status;

            // Update the completedDays count for the habit
            state.habits[habitIndex].completedDays = state.habits[habitIndex].weeklyProgress.filter((eachDay)=>eachDay.status==="Done").length;
        }
    }
})


/* extracting the habitReducer,actions and habitSelector function and exporting it*/

export const habitReducer = habitSlice.reducer;
export const {addHabit,setWeeklyHabitToShow,updateHabitStatus} = habitSlice.actions;
export const habitSelector = (state)=>state.habitReducer;