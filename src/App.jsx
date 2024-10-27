import './App.css';
import Router from "./utils/Router";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient()
const App = () => {
  console.log(`Running in ${import.meta.env.MODE} mode`);

    return (
      <QueryClientProvider client={queryClient}>
          <Router />
      </QueryClientProvider>
    );
}

export default App;
