import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { UiScreen } from "../components/ui";
import { LoginScreen } from "../components/auth";
import { CalendarScreen } from "../components/calendar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <UiScreen />
      <Routes>
        <Route path="/" element={<CalendarScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}
