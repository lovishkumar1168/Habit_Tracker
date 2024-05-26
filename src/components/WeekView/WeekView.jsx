import { useDispatch, useSelector } from "react-redux";
import { habitSelector, updateHabitStatus } from "../../redux/reducers/habitReducer";
import styles from "./WeekView.module.css"

function WeekView(){
    const {weeklyProgressHabitToShow} = useSelector(habitSelector);
    const dispatch = useDispatch();

    return(
        <div>
            <div className={styles.habitName}>
                {weeklyProgressHabitToShow.name}
            </div>
            <div className={styles.weekContainer}>
                {weeklyProgressHabitToShow.weeklyProgress.map((eachDay,index)=>(
                    <div className={styles.dayContainer} key={index}>
                        <h2 className={eachDay.date === new Date().toLocaleDateString() ? styles.today : null}>{eachDay.day}</h2>
                        <h5>{eachDay.date}</h5>
                        <div className={styles.statusContainer}>
                            <button onClick={()=>dispatch(updateHabitStatus({weeklyProgressHabitToShow,index,status : "Done"}))} className={eachDay.status==="Done"?styles.activeStatus : null}>✔️</button>
                            <button onClick={()=>dispatch(updateHabitStatus({weeklyProgressHabitToShow,index,status : "Not Done"}))} className={eachDay.status==="Not Done"?styles.activeStatus : null}>X</button>
                            <button onClick={()=>dispatch(updateHabitStatus({weeklyProgressHabitToShow,index,status : "None"}))} className={eachDay.status==="None"?styles.activeStatus : null}>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeekView;