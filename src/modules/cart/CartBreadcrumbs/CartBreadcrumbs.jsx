import { Link } from 'react-router-dom'
import clsx from 'clsx'

function CartBreadcrumbs ({ steps, currentStep }) {
  const adjacentSteps = [currentStep - 1, currentStep + 1]

  return (
    <div className='text-2xl font-light uppercase breadcrumbs'>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={clsx(index === currentStep ? 'font-medium' : 'text-gray-600')}>
            {
              adjacentSteps.some(stepIndex => stepIndex === index)
                ? <Link to={step.path}>{step.label}</Link>
                : <span className='cursor-not-allowed'>{step.label}</span>
            }
          </li>
        ))}

      </ul>
    </div>
  )
}

export default CartBreadcrumbs
