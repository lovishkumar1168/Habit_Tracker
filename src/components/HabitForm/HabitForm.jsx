import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../../redux/reducers/habitReducer";
import { toast } from "react-toastify";

function HabitForm(){
    const [habitName,setHabitName] = useState("")
    const dispatch = useDispatch();

    /* handle submission of form and dispatching addHabit action for adding new habit*/

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addHabit(habitName));
        setHabitName("")
        toast.success("habit added successfully");
    }

    return(
        <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle" className="text-primary">Add New Habit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" className="btn btn-danger">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form className="d-flex flex-column" onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-3" placeholder="Enter habit name" style={{ padding: "20px" }} required value={habitName} onChange={(e)=>setHabitName(e.target.value)}/>
                            <button type="submit" className="btn btn-primary align-self-end">Add Habit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HabitForm;