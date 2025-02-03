import { BudgetCard } from '@/shared/components/BudgetCard'
import { useSelector } from 'react-redux'

export const BudgetList = () => {
  const { budgets } = useSelector((state) => state.budgets)

  return (
    <section className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
      {budgets.map((props, key) => (
        <BudgetCard key={key} budget={props} />
      ))}
    </section>
  )
}
