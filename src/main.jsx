import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './assets/Routes/Routes.jsx';
import AuthProvider from './assets/Providers/AuthProvider.jsx';
// import pdfjs from 'pdfjs-dist/build/pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>

   <RouterProvider router={router} />
   </AuthProvider>
    
   
  </React.StrictMode>,
)
