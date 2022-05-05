import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="" element={<MainPage />} />
      </Routes>
       </QueryClientProvider>
  );
}

export default App;
