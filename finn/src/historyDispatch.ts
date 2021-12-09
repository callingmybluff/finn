import React, { Dispatch } from 'react'
import { HistoryItemM } from './components/history/models'

interface IAction {
  type: 'ADD'
  payload: HistoryItemM
}

export default React.createContext(null as Dispatch<IAction> | null)
export type {
  IAction,
}