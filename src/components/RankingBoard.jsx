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
  // 전체 Top 영역에서 사용할 병합 데이터
  const [userFields, setUserFields] = useState([]);
  // 섹션별 개별 컬렉션 데이터
  const [userFields1, setUserFields1] = useState([]);
  const [userFields2, setUserFields2] = useState([]);
  useEffect(() => {
    // 파이어베이스 연결 확인
    console.log("Firebase App Name:", app.name);

    // userFields + userField2 컬렉션 데이터 병합 가져오기
    const fetchAllUserFields = async () => {
      try {
        const [snap1, snap2] = await Promise.all([
          getDocs(collection(db, "userFields")),
          getDocs(collection(db, "userField2")), // 새 컬렉션
        ]);

        const mapDocs = (snap, source) =>
          snap.docs.map((doc) => ({
            id: `${source}:${doc.id}`, // 컬렉션 프리픽스로 전역 고유 id 보장
            _id: doc.id, // 원본 문서 id (디버깅/추후 용도)
            _source: source,
            ...doc.data(),
          }));

  const data1 = mapDocs(snap1, "userFields");
  const data2 = mapDocs(snap2, "userField2");
  // 섹션별 원본 데이터 저장 (각각 한 번씩만 렌더링용)
  setUserFields1(data1);
  setUserFields2(data2);
        const merged = [...data1, ...data2];

        // 중복 제거: uid/userId가 있으면 그 값을 키로, 없으면 내용 기반 시그니처 생성
        const getTimeMs = (v) => {
          if (!v) return 0;
          if (typeof v === "number") return v;
          if (typeof v === "string") {
            const t = Date.parse(v);
            return isNaN(t) ? 0 : t;
          }
          if (typeof v === "object" && typeof v.seconds === "number") {
            return v.seconds * 1000 + (v.nanoseconds ? v.nanoseconds / 1e6 : 0);
          }
          return 0;
        };

        const createKey = (u) => {
          const uid = u.uid || u.userId || u.user_id || null;
          if (uid) return `uid:${uid}|t:${getTimeMs(u.createdAt)}`;
          const name = (u.name || u.nickname || "").trim();
          const dist = Number(u.distanceKm) || 0;
          const area = Number(u.areaKm2) || 0;
          const gyro = Number(u.gyroCombined) || 0;
          const t = getTimeMs(u.createdAt);
          return `sig:${name}|d:${dist}|a:${area}|g:${gyro}|t:${t}`;
        };

        const seen = new Set();
        const deduped = [];
        for (const item of merged) {
          const key = createKey(item);
          if (seen.has(key)) continue;
          seen.add(key);
          deduped.push(item);
        }

  // Top 랭킹 계산용으로만 병합 데이터 보관
  setUserFields(deduped);
        console.log(
          `병합된 데이터: userFields(${data1.length}) + userField2(${data2.length}) = ${merged.length}, 중복 제거 후 ${deduped.length}`,
          { merged, deduped }
        );
      } catch (error) {
        console.error("userFields 데이터 불러오기 오류:", error);
      }
    };
    fetchAllUserFields();
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
      {/* userFields 컬렉션 섹션 */}
      <AllRanking userFields={userFields1} autoScrollLatest={true} />
      {/* userField2 컬렉션 섹션 */}
      <AllRanking userFields={userFields2} autoScrollLatest={false} />
    </RankingBoardWrap>
  );
}

export default RankingBoard;
