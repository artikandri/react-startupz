import React, { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";

export const RouteHook = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteHook;
