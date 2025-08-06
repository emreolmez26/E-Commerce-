import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) { //Burdaki children, App.jsx'deki PageContainer'in içindeki Header'ı temsil ediyor
  return (
    <Container maxWidth="lg">{children}</Container>
  )
}

export default PageContainer