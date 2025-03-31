import { createRoot } from "react-dom/client";
import "./index.scss";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/index.tsx";
// import TitleTur from "./widgets/TitleTur/index.tsx";
import KwizTur1Page from "./pages/KwizTur1/KwizTur1Page/index.tsx";
import TitleTur1Page from "./pages/KwizTur1/TitleTur1Page/index.tsx";
// import Result from "./widgets/Result/index.tsx";
import ResultTur1Page from "./pages/KwizTur1/ResultTur1Page/index.tsx";
import KwizTur2Page from "./pages/KwizTur2/KwizTur2Page/index.tsx";
import TitleTur2Page from "./pages/KwizTur2/TitleTur2Page/index.tsx";
import ResultTur2Page from "./pages/KwizTur2/ResultTur2Page/index.tsx";
import TitleTur3Page from "./pages/KwizTur3/TitleTur3Page/index.tsx";
import KwizTur3Page from "./pages/KwizTur3/KwizTur3Page/index.tsx";
import TitleTur4Page from "./pages/KwizTur4/TitleTur4Page/index.tsx";
import KwizTur4Page from "./pages/KwizTur4/KwizTur4Page/index.tsx";
import TitleTur5Page from "./pages/KwizTur5/TitleTur5Page/index.tsx";
import KwizTur5Page from "./pages/KwizTur5/KwizTur5Page/index.tsx";
// import Input from "./shared/ui/Input/index.tsx";
import KwizTur6Page from "./pages/KwizTur6/KwizTur6Page/index.tsx";
import TitleTur6Page from "./pages/KwizTur6/TitleTur6Page/index.tsx";
import TitleTur7Page from "./pages/KwizTur7/TitleTur7Page/index.tsx";
import KwizTur7Page from "./pages/KwizTur7/KwizTur7Page/index.tsx";
import TitleTur8Page from "./pages/KwizTur8/TitleTur8Page/index.tsx";
import KwizTur8Page from "./pages/KwizTur8/KwizTur8Page/index.tsx";
import Question8Page from "./pages/KwizTur8/Question8Page/index.tsx";
// import Blok from "./shared/ui/Blok/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/kwiz/tur/1/result" element={<ResultTur1Page/>} />
      <Route path="/kwiz/tur/2/result" element={<ResultTur2Page/>} />
      {/* <Route path="/" element={<TitleTur1Page/>} /> */}
      <Route path="/kwiz/tur/2/title" element={<TitleTur2Page/>} />
      <Route path="/kwiz/tur/3/title" element={<TitleTur3Page/>} />
      <Route path="/kwiz/tur/4/title" element={<TitleTur4Page/>} />
      <Route path="/kwiz/tur/5/title" element={<TitleTur5Page/>} />
      <Route path="/kwiz/tur/6/title" element={<TitleTur6Page/>} />
      <Route path="/kwiz/tur/7/title" element={<TitleTur7Page/>} />
      <Route path="/kwiz/tur/8/title" element={<TitleTur8Page/>} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/mainpage" element={<App />} /> */}
        <Route path="/kwiz/tur/8/question" element={<Question8Page/>} />
        <Route path="/kwiz/tur/1" element={<KwizTur1Page/>} />
        <Route path="/kwiz/tur/2" element={<KwizTur2Page/>} />
        <Route path="/kwiz/tur/3" element={<KwizTur3Page/>} />
        <Route path="/kwiz/tur/4" element={<KwizTur4Page/>} />
        <Route path="/kwiz/tur/5" element={<KwizTur5Page/>} />
        <Route path="/kwiz/tur/6" element={<KwizTur6Page/>} />
        <Route path="/kwiz/tur/7" element={<KwizTur7Page/>} />
        <Route path="/kwiz/tur/8" element={<KwizTur8Page/>} />
      </Routes>
    </Router>
  </Provider>
);
