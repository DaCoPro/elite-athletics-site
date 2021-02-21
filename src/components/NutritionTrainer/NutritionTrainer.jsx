import './NutritionTrainer.css';

export default function NutritionTrainer({ activeNutritionPlans, activeClient }) {
    return (
        <div className="nutritionTrainer">
            <h1>Nutrition</h1>
            <h4>{activeNutritionPlans[0].name}</h4>
        </div>

    )
}