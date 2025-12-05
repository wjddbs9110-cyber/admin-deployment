import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout01 from "@/layout/Layout01";
import Dashboard from "@/pages/dashboard/Dashboard";
import ComponentSamples from "@/pages/component-samples/ComponentSamples";
import CampaignList from "@/pages/campaign-management/CampaignList";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout01 />}>
                    <Route index element={<Navigate to="/dashboard/realtime" replace />} />
                    <Route path="dashboard/*" element={<Dashboard />} />
                    <Route path="campaign/all" element={<CampaignList />} />
                    <Route path="campaign/*" element={<Dashboard />} />
                    <Route path="creative/*" element={<Dashboard />} />
                    <Route path="targeting/*" element={<Dashboard />} />
                    <Route path="report/*" element={<Dashboard />} />
                    <Route path="billing/*" element={<Dashboard />} />
                    <Route path="system/*" element={<Dashboard />} />
                    <Route path="component-samples" element={<ComponentSamples />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;

