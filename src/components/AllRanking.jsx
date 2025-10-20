import styled from "styled-components";
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
  const sorted = [...(userFields || [])]
    .filter((u) => !isNaN(Number(u.distanceKm)))
    .sort((a, b) => Number(b.distanceKm) - Number(a.distanceKm));

  return (
    <AllRankingwrap>
      <HeaderWrap>
        <TextBox>
          <p>전체 랭킹</p>
          <p>랭킹은 러닝 거리를 기준으로 측정됩니다.</p>
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
            <RankingCard key={user.id} ranking={idx + 1} user={user} />
          ))}
        </RankingCardBox>
      </RankingWrap>
    </AllRankingwrap>
  );
}

export default AllRanking;
