import React from "react";

import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";

export const App = () => (
  <div className='b-page'>
    <Header/>
    <Content/>
    <Footer/>
  </div>
)
