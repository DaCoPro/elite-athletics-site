import './CheckinsTrainer.css';

export default function CheckinsTrainer({ activeCheckins, activeClient }) {
    return (
        <div className="checkinsTrainer">
            <h1>Checkins</h1>
            <h4>{activeCheckins[0].name}</h4>
        </div>
    )
}