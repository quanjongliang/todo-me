import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Authorized, View, Welcome } from "./features";
import { LoadingScreen } from "./components";
import { useAppSelector } from "./app/hooks";
import { selectLoading } from "./features/loading/loadingSlice";

function App() {
  const loading = useAppSelector(selectLoading);
  console.log(loading);
  return (
    <div className="App">
      {loading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/authorized" element={<Authorized />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
