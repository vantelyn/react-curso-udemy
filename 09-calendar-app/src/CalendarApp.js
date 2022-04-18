import { Provider } from "react-redux"

import { store } from "./redux/store/store"
import { AppRouter } from "./components/routers/AppRouter"

export const CalendarApp = () => {
  return (
    <div>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </div>
  )
}
