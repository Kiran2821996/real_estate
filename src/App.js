import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';

import  Data from "./components/main/Data"
import Favt from './components/favourites/Favt'
import Header1 from './components/header/Header1';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
     <Layout>
      <Header> <Header1 /></Header>
      <Content>
        <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/favt" element={<Favt />} />
      </Routes>
      </Content>
      <Footer>@Kiran</Footer>
    </Layout>
    
     </>
   
  )
}

export default App