import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";
import AboutPage from "./pages/AboutPage";
import QuizesPage from "./pages/QuizesPage/QuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import ProductsPage from "./pages/ProductsPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage,
            },
            {
                path: "admin",
                Component: AdminPage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'quizes',
                Component: QuizesPage
            },
            {
                path: 'quizes/create',
                Component: CreateQuizPage
            },
            {
                path: 'products',
                Component: ProductsPage
            }
        ]
    }
]);
