import { Provider } from "react-redux";
import { store } from './context';
import { AppRouter } from "./routers/AppRouter";

export const CalendarApp = () => {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
