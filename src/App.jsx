import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'



export default function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

