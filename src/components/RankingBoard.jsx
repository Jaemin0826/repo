import app, { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CoakLogo from "../assets/Coak.png";
import TopRanking from "./TopRanking.jsx";
import AllRanking from "./AllRanking.jsx";

import Star1 from "../assets/Star1.svg";
import Star2 from "../assets/Star2.svg";
import Star3 from "../assets/Star3.svg";

const RankingBoardWrap = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #696eff 0%, #c9cbff 100%), #fff;
  /* 스크롤 가능하도록 auto로 변경 */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;

  padding-top: 88px;
  padding-bottom: 71px;
  display: flex;
  justify-content: center;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const RankingTitle = styled.div`
  position: relative;
  & > p {
    color: var(--Gray-White, #fff);
    font-family: Jalnan;
    font-size: 64px;
    font-weight: 400; /* Jalnan 제공 가중치에 맞춰 faux-bold 방지 */
    letter-spacing: -1.28px;
  }

  /* 타이틀 SVG 이미지 사이즈 */
  & > img.title {
    display: block;
    height: 64px;
  }

  & > img:nth-child(1) {
    position: absolute;
    top: -16px;
    left: -36px;
    rotate: 6deg;
    animation: ${blink} 2s infinite;
    animation-delay: 0s;
  }

  & > img:nth-child(2) {
    position: absolute;
    top: -16px;
    right: -16px;
    rotate: -6deg;
    animation: ${blink} 2.5s infinite;
    animation-delay: 0.4s;
  }

  & > img:nth-child(3) {
    position: absolute;
    top: -4px;
    right: -36px;
    rotate: -14deg;
    animation: ${blink} 3.2s infinite;
    animation-delay: 0.8s;
  }
`;

const TitleLogo = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  width: 60px;
  height: 60px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function RankingBoard() {
  const [userFields, setUserFields] = useState([]);
  useEffect(() => {
    // 파이어베이스 연결 확인
    console.log("Firebase App Name:", app.name);

    // userFields 컬렉션 데이터 가져오기
    const fetchUserFields = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userFields"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserFields(data);
        console.log("userFields 컬렉션 데이터:", data);
      } catch (error) {
        console.error("userFields 데이터 불러오기 오류:", error);
      }
    };
    fetchUserFields();
  }, []);
  return (
    <RankingBoardWrap>
      <TitleBox>
        <RankingTitle>
          <img src={Star1} />
          <img src={Star2} />
          <img src={Star3} />
          <img
            src={`${import.meta.env.BASE_URL}Ranking.svg`}
            alt="Ranking"
            className="title"
          />
        </RankingTitle>
        <TitleLogo>
          <img src={CoakLogo} alt="Ranking Logo" />
        </TitleLogo>
      </TitleBox>
      <TopRanking userFields={userFields} />
      <AllRanking userFields={userFields} />
    </RankingBoardWrap>
  );
}

export default RankingBoard;
