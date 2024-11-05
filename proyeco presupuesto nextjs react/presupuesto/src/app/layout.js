import localFont from "next/font/local";

import './style.css'

export default function Layout({ children }) {
 return (
  <html lang='es'>
   <head>
    <title>Presupuesto React</title>
    <link
     rel='stylesheet'
     href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
    />
    <link
     href='https://fonts.googleapis.com/css?family=Staatliches'
     rel='stylesheet'
    />
    <link
     rel='stylesheet'
     href='https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css'
    />
   </head>
   <body>{children}</body>
  </html>
 )
}