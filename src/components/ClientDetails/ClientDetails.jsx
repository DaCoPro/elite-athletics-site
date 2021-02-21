import './ClientDetails.css';
import WorkoutsTrainer from '../WorkoutsTrainer/WorkoutsTrainer';
import NutritionTrainer from '../NutritionTrainer/NutritionTrainer';
import CheckinsTrainer from '../CheckinsTrainer/CheckinsTrainer';

export default function ClientDetails({ activeNutritionPlans, activeCheckins, activeClient, activeWorkouts }) {
    

    return (
        <div>
            {activeClient ? <h1>{activeClient.name}</h1> : null}
            {activeWorkouts.length ? <WorkoutsTrainer activeWorkouts={activeWorkouts} activeClient={activeClient}/> : null}
            {activeNutritionPlans.length ? <NutritionTrainer activeNutritionPlans={activeNutritionPlans} activeClient={activeClient} />: null}
            {activeCheckins.length ? <CheckinsTrainer activeCheckins={activeCheckins} activeClient={activeClient} />  : null}
            
          
        </div>

    )
}