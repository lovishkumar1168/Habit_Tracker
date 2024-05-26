import { useSelector } from "react-redux";
import styles from "./HabitList.module.css"
import { habitSelector } from "../../redux/reducers/habitReducer";
import Habit from "../Habit/Habit";

function HabitList(){
    const {habits} = useSelector(habitSelector);
    
    return(
        <div className={styles.habitListContainer}>
            {habits.map((habit,index)=>(
                <Habit key={index} habit={habit} />
            ))}
        </div>
    )
}

export default HabitList;