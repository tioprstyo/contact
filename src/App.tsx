import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomeScreen from "./components/screens/home/HomeScreen";
import { AppRoutes } from "./utils/AppRoutes";
import ContactList from "./components/pages/contact/ContactList";

const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomeScreen />} />
      <Route path={AppRoutes.CONTACT} element={<ContactList />} />
    </Routes>
  </MainLayout>)

}

function App() {
  return (
    <>
      {getMainLayout()}
    </>
  );
}

export default App;