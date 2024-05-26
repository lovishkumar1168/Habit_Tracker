import {useNavigate } from "react-router-dom";
import styles from "./Habit.module.css";
import { useDispatch } from "react-redux";
import { setWeeklyHabitToShow } from "../../redux/reducers/habitReducer";

function Habit({habit})
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* handle click of weekly view*/
    const handleWeekViewClick = ()=>{
        dispatch(setWeeklyHabitToShow(habit)); //dispatching setWeeklyHabitToShow action so we will track which habit selected and which habits weekly progress to show
        navigate("/week-view"); // navigate to /week-view
    }

    return(
        <div className={styles.habitContainer}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1636/1636043.png" alt="hash" />
                <h2>{habit.name}</h2>
                <p>{habit.completedDays}/7 days</p>
            </div>
           <button onClick={handleWeekViewClick}><img src="https://cdn-icons-png.flaticon.com/128/6784/6784128.png" alt="icon"/>Weekly view</button>
        </div>
    )
}

export default Habit;