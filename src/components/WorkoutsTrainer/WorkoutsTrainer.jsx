import './WorkoutsTrainer.css';

export default function WorkoutTrainer ({ activeWorkouts, activeClient}) {
    return (
        <div className="workoutsTrainer">
            <h1>Workouts</h1>
            <h4>{activeWorkouts[0].name}</h4>
        </div>
    )
}
