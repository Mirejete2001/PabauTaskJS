export default function Header({currentStep, stepsLength}) {
    return (
        <div>
            <h2>Choose Service</h2>
            <p>Step {currentStep}/{stepsLength}</p>
        </div>
    )
}