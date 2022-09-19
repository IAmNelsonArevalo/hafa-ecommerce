import { Suspense } from "react";
/** Modules */
import useRouter from "routes";

const App = () => {
  /** Router */
  const Router = useRouter();

  return (
    <Suspense fallback={<p>Loading....!</p>}>
      {Router}
    </Suspense>
  );
}

export default App;