import styled from "styled-components";
import { useMemo } from "react";
import { computeBadgeSummary, getBadgeSrc } from "../utils/badges";

import Rank1 from "../assets/Rank1.svg";
import Rank2 from "../assets/Rank2.svg";
import Rank3 from "../assets/Rank3.svg";

const RankingCardWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  border-radius: 16px;
  border: ${({ $highlight }) => ($highlight ? '2px solid #5E66FF' : '2px solid transparent')};

  background: ${({ $ranking }) =>
    $ranking === 1
      ? "linear-gradient(90deg, #FFF 57.48%, #FFF1BA 100%);"
      : $ranking === 2
      ? "linear-gradient(90deg, #FFF 57.48%, #EBEBEB 100%);"
      : $ranking === 3
      ? "linear-gradient(90deg, #FFF 57.48%, #F3E4DF 100%);"
      : "rgba(255, 255, 255, 0.25)"};

  box-shadow: ${({ $ranking }) =>
    $ranking === 1
      ? "0 0 40px 0 #CED0FF, -2px -2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 2px 0 #FFF1BA inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;"
      : $ranking === 2
      ? "0 0 40px 0 #CED0FF, -2px -2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 2px 0 #EBEBEB inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;"
      : $ranking === 3
      ? "0 0 40px 0 #CED0FF, -2px -2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 10px 0 rgba(255, 255, 255, 0.80), 2px 2px 2px 0 #EBEBEB inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;"
      : "none"};
`;

const RankingInfo = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  padding: 12px 0px;
`;

const UserRanking = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;
  background: #f9f8ff;

  color: var(--Gray-Gray8, #2f3237);
  text-align: center;
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;

const NameInfo = styled.div`
  width: 380px;
  padding: 12px 16px;

  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #F4B12A;"
      : $ranking === 2
      ? " #515457;"
      : $ranking === 3
      ? " #A05A42;"
      : " #2f3237"};
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

const BadgeInfo = styled.div`
  width: 244px;
  padding: 12px 16px;
`;

const BadgeWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const Badge = styled.div`
  width: 36px;
  height: 36px;
  background: #222;
`;

const DistanceInfo = styled.div`
  width: 132px;
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2px;
`;

const UserDistance = styled.div`
  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #5C410B;"
      : $ranking === 2
      ? " #0B0C0D;"
      : $ranking === 3
      ? " #4C1E0F;"
      : " #1f2125"};
  font-family: Paperlogy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

const Km = styled.div`
  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #5C410B;"
      : $ranking === 2
      ? " #0B0C0D;"
      : $ranking === 3
      ? " #4C1E0F;"
      : " #1f2125"};
  font-family: Paperlogy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`;

function RankingCard({ ranking, user, highlight, ...rest }) {
  const badgeSummary = useMemo(() => computeBadgeSummary(user), [user]);
  const rankImg =
    ranking === 1
      ? Rank1
      : ranking === 2
      ? Rank2
      : ranking === 3
      ? Rank3
      : null;
  return (
    <RankingCardWrap $ranking={ranking} $highlight={highlight} {...rest}>
      <RankingInfo $ranking={ranking}>
        {rankImg ? (
          <img
            src={rankImg}
            alt={`Rank${ranking}`}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <UserRanking>{ranking}</UserRanking>
        )}
      </RankingInfo>
      <NameInfo $ranking={ranking}>
        {user ? user.nickname || user.userName || user.name || "-" : "-"}
      </NameInfo>
      <BadgeInfo>
        <BadgeWrap>
          {badgeSummary.map((b) => (
            <img
              key={b.key}
              src={getBadgeSrc(b.key, b.level)}
              alt={`${b.category} Lv.${b.level}`}
              style={{ width: 28, height: 28 }}
            />
          ))}
        </BadgeWrap>
      </BadgeInfo>
      <DistanceInfo $ranking={ranking}>
        <UserDistance $ranking={ranking}>
          {user && !isNaN(Number(user.distanceKm))
            ? Number(user.distanceKm).toFixed(2)
            : "-"}
        </UserDistance>
        <Km $ranking={ranking}>km</Km>
      </DistanceInfo>
    </RankingCardWrap>
  );
}
export default RankingCard;
