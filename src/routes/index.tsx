import React, { PropsWithChildren } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Layout from "@/components/Layout";
import Agents from "@/pages/Agents";
import Chats from "@/pages/Chats";
import SignIn from "@/pages/Auth/SignIn";
import Configuration from "@/pages/Configuration";
import { useUser } from "@/hooks/auth/useUser";
import NotFoundPage from "@/pages/NotFound";

function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useUser();
  if (!user) return <Navigate to="/auth/sign-in" replace />;

  return <>{children}</>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <React.Suspense fallback={"Loading..."}>
          <Layout>
            <Agents />
          </Layout>
        </React.Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/chats",
    element: (
      <ProtectedRoute>
        <React.Suspense fallback={"Loading..."}>
          <Layout>
            <Chats />
          </Layout>
        </React.Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/configuration/:id",
    element: (
      <ProtectedRoute>
        <React.Suspense fallback={"Loading..."}>
          <Layout>
            <Configuration />
          </Layout>
        </React.Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth/sign-in",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <SignIn />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={"Loading..."}>
        <Layout>
          <NotFoundPage />
        </Layout>
      </React.Suspense>
    ),
  },
  // {
  //   path: "/auth/sign-up",
  //   element: (
  //     <React.Suspense fallback={"Loading..."}>
  //       <Layout>
  //         <SignUpPage />
  //       </Layout>
  //     </React.Suspense>
  //   ),
  // },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
