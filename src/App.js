import { Routes, Route } from 'react-router-dom';
import Nav from './routes/navigation/nav.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-In.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
