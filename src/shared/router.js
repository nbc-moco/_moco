import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MateList from '../pages/mate/MateList';
import Header from '../components/header/Header';
import Login from '../pages/joinLogin/Login';
import SignUp from '../pages/joinLogin/SignUp';
import MyPage from '../pages/mypage/MyPage';
import Home from './../pages/home/Home';
import MateDetail from './../pages/mate/MateDetail';
import MateWrite from '../pages/mate/MateWrite';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import Search from '../pages/search/Search';
import TeamPage from '../pages/teampage/TeamPage';
import MateEdit from '../pages/mate/MateEdit';
import TeamList from '../pages/teampage/TeamList';
import MocoChat from '../components/mocoChat/MocoChatIcon';
// * 테스트 페이지
import Test from '../pages/Test';
import Amplitude from './../amplitude';
import NotiBadge from '../components/header/notification/NotiBadge';
import { authService } from '../common/firebase';
import ScrollTop from '../common/scrollTop';

const Router = () => {
  const [uid, setUid] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      // user 판명을 듣고
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
        return;
      }
    });
  }, []);

  // path 이름은 보통 소문자로 하니, 저희도 소문자로 통일하겠습니다
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/matedetail/:id" element={<MateDetail />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/teampage/:id" element={<TeamPage />} />
        <Route path="/mate" element={<MateList />} />
        <Route path="/write" element={<MateWrite />} />
        <Route path="/edit/:id" element={<MateEdit />} />
        <Route path="/search/:word" element={<Search />} />
        <Route path="/teamlist/:nickname" element={<TeamList />} />
        {/* 테스트페이지 */}
        <Route path="/test" element={<Test />} />
        <Route path="/amplitude" element={<Amplitude />} />
        <Route path="/noti" element={<NotiBadge />} />
      </Routes>
      {uid === null ? null : <MocoChat uid={uid} />}
    </BrowserRouter>
  );
};

export default Router;
