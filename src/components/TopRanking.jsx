import styled from "styled-components";
import { useEffect } from "react";
import Crown from "../assets/Crown.svg";
import TopCard from "./TopCard.jsx";

const TopRankingWrap = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  padding: 0px 60px 0px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  position: relative;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  & > p {
    color: #fff;
    font-family: Paperlogy;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 28px */
    letter-spacing: -0.56px;
  }
`;

const Description = styled.p`
  color: #f6f7fb;
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

const RankingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 4px;
`;

const BlurLine = styled.div`
  position: absolute;
  bottom: -19px;

  width: 934px;
  height: 38px;
  flex-shrink: 0;

  border-radius: 934px;
  background: rgba(255, 255, 255, 0.18);

  filter: blur(10px);

  z-index: 1;
`;

const BlurLine2 = styled.div`
  position: absolute;
  bottom: -6px;

  width: 934px;
  height: 12px;
  flex-shrink: 0;

  border-radius: 934px;
  background: rgba(255, 255, 255, 0.18);

  filter: blur(3.4000000953674316px);

  z-index: 1;
`;

function TopRanking({ userFields }) {
  // distanceKm 기준 내림차순 정렬 후 상위 3개 추출
  const top3 = [...(userFields || [])]
    .filter((u) => typeof u.distanceKm === "number")
    .sort((a, b) => b.distanceKm - a.distanceKm)
    .slice(0, 3);

  // 2등, 1등, 3등 순서로 배치
  const order = [1, 0, 2];
  const top3Ordered = order.map((i) => top3[i] || null);

  useEffect(() => {
    console.log("[TopRanking] userFields:", userFields);
    console.log("[TopRanking] top3:", top3);
    console.log("[TopRanking] top3Ordered:", top3Ordered);
  }, [userFields]);

  return (
    <TopRankingWrap>
      <HeaderWrap>
        <HeaderBox>
          <img
            src={`${import.meta.env.BASE_URL}Top10.svg`}
            alt="오늘의 TOP3"
            style={{ height: 52, width: "auto" }}
          />
        </HeaderBox>
      </HeaderWrap>
      <RankingWrap>
        {top3Ordered.map((user, idx) => (
          <TopCard
            key={user ? user.id : idx}
            ranking={idx === 0 ? 2 : idx === 1 ? 1 : 3}
            user={user}
          />
        ))}
      </RankingWrap>
      <BlurLine></BlurLine>
      <BlurLine2></BlurLine2>
    </TopRankingWrap>
  );
}

export default TopRanking;
