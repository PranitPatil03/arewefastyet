/*
Copyright 2023 The Vitess Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { Routes, Route } from "react-router-dom";

// import Status from './Status/Status';
import Error from "../utils/Error/Error";
import Layout from "../pages/Layout";
import Macro from "./Macro/Macro";
import Micro from "./Micro/Micro";
import MacroQueriesCompare from "./MacroQueriesCompare/MacroQueriesCompare";
import ComparePage from "./ComparePage/ComparePage";
import PRsPage from "./PRsPage/PRsPage";
import SinglePR from "./SinglePR/SinglePR";
import HomePage from "./HomePage/HomePage";
import StatusPage from "./StatusPage/StatusPage";
import DailyPage from "./DailyPage/DailyPage";
import SearchPage from "./SearchPage/SearchPage";

const PublicRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/Daily" element={<DailyPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/macro" element={<Macro />} />
        <Route
          path="/macrobench/queries/compare"
          element={<MacroQueriesCompare />}
        />
        <Route path="/micro" element={<Micro />} />
        <Route path="/pr" element={<PRsPage />} />
        <Route path="/pr/:pull_nb" element={<SinglePR />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRoute;
