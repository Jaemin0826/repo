import styled from "styled-components";
import { useEffect, useMemo } from "react";
import Refresh from "../assets/Refresh.svg";
import RankingCard from "./RankingCard.jsx";

const AllRankingwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 80px 60px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 14px;
`;

const RankingWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  border-radius: 24px;
  background: rgba(245, 246, 248, 0.66);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  & > p:nth-child(1) {
    color: var(--Gray-White, #fff);
    font-family: Paperlogy;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
  }

  & > p:nth-child(2) {
    color: var(--Gray-Gray1, #f6f7fb);
    font-family: Paperlogy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 20px */
    letter-spacing: -0.4px;
  }
`;

const RefreshBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 14px 20px;

  border-radius: 100px;
  border: 2px solid #969cff;
  background: #f7fbff;

  & > p {
    color: var(--Primary-Primary, #5e66ff);
    font-family: Paperlogy;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 18px */
    letter-spacing: -0.36px;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 8px 0px;

  color: var(--Gray-Gray9, #1f2125);
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`;

const RankingInfo = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;
const NameInfo = styled.div`
  width: 380px;
  padding-left: 16px;
`;
const BadgeInfo = styled.div`
  width: 244px;
  padding-left: 16px;
`;
const DistanceInfo = styled.div`
  width: 132px;
  padding-left: 16px;
`;

const RankingCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function AllRanking({ userFields }) {
  const handleRefresh = () => {
    window.location.reload();
  };
  // distanceKm 기준 내림차순 정렬 (string/number 모두 처리)
  const sorted = useMemo(() => {
    return [...(userFields || [])]
      .filter((u) => !isNaN(Number(u.distanceKm)))
      .sort((a, b) => Number(b.distanceKm) - Number(a.distanceKm));
  }, [userFields]);

  // 가장 최근 생성된 레코드 id 계산
  const latestId = useMemo(() => {
    if (!userFields || userFields.length === 0) return null;
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
    let latest = userFields[0];
    for (const u of userFields) {
      if (getTimeMs(u.createdAt) > getTimeMs(latest.createdAt)) latest = u;
    }
    return latest?.id || null;
  }, [userFields]);

  // 로드 후 최신 항목으로 한 번만 스크롤 (사용자 스크롤 방해 금지)
  useEffect(() => {
    if (!latestId) return;
    const el = document.querySelector(`[data-user-id="${latestId}"]`);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [latestId]);

  return (
    <AllRankingwrap>
      <HeaderWrap>
        <TextBox>
          <img
            src={`${import.meta.env.BASE_URL}11.svg`}
            alt="전체 랭킹 안내"
            style={{ height: 48 }}
          />
        </TextBox>
        <RefreshBtn onClick={handleRefresh}>
          <img src={Refresh} />
          <p>새로 고침</p>
        </RefreshBtn>
      </HeaderWrap>
      <RankingWrap>
        <InfoBox>
          <RankingInfo>랭킹</RankingInfo>
          <NameInfo>닉네임</NameInfo>
          <BadgeInfo>획득배지</BadgeInfo>
          <DistanceInfo>거리</DistanceInfo>
        </InfoBox>
        <RankingCardBox>
          {sorted.map((user, idx) => (
            <RankingCard
              key={user.id}
              ranking={idx + 1}
              user={user}
              highlight={user.id === latestId}
              data-user-id={user.id}
            />
          ))}
        </RankingCardBox>
      </RankingWrap>
    </AllRankingwrap>
  );
}

export default AllRanking;
