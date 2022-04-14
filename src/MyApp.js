import React from 'react'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

const MyApp = () => {
    return (
        <div className='container mt-5'>
            <Provider store={store}>
            <AppRouter/>
            </Provider>
        </div>
    )
}

export default MyApp