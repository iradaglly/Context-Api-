import Home from "../Pages/Main/Home"
import Basket from "../Pages/Main/Basket"
import MainRoot from "../Pages/Main/MainRoot"

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />,
            }, {
                path: 'basket',
                element: <Basket />,
            }
        ]
    }

]