import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import store from "./store/store";
import { Provider } from "react-redux";
import {QueryClientProvider, QueryClient} from "react-query"
function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;