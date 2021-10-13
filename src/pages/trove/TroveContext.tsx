import { createContext, useState } from 'react'
import { TroveProps } from './index'

const troveDefaultValues: TroveProps = {
  loan: 'my loan',
  addLoan: () => {}
}

export const TroveContext = createContext<TroveProps>(
  troveDefaultValues
)

const TroveWrapper = ({ children }: TroveProps) => {
  const [loan, addLoan] = useState<string >(troveDefaultValues.loan)
  return (
    <TroveContext.Provider
      value={{
        loan,
        addLoan
      }}
    >
      {children}
    </TroveContext.Provider>
  )
}

export default TroveWrapper
