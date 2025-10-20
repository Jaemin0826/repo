import styled from "styled-components";

import Rank1 from "../assets/Rank1.svg";
import Rank2 from "../assets/Rank2.svg";
import Rank3 from "../assets/Rank3.svg";

const TopCardWrap = styled.div`
  position: relative;
  width: 280px;
  height: ${({ $ranking }) =>
    $ranking === 1
      ? "167px"
      : $ranking === 2
      ? "134px"
      : $ranking === 3
      ? "130px"
      : "123px"};
  background: ${({ $ranking }) =>
    $ranking === 1
      ? "radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(255, 241, 186, 0.40) 100%), #FFF;"
      : $ranking === 2
      ? "radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(235, 235, 235, 0.80) 100%), #FFF;"
      : $ranking === 3
      ? "radial-gradient(60.22% 100% at 50% 0%, #FFF 70%, rgba(243, 228, 223, 0.60) 100%), #FFF;"
      : "#fff"};
  color: ${({ $ranking }) =>
    $ranking === 1
      ? "#222"
      : $ranking === 2
      ? "#333"
      : $ranking === 3
      ? "#444"
      : "#000"};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ $ranking }) =>
    $ranking === 1 ? " 35px 24px 16px 24px" : "20px 24px 16px 24px"};
  align-items: center;
  gap: ${({ $ranking }) =>
    $ranking === 1
      ? "20px"
      : $ranking === 2
      ? "14px"
      : $ranking === 3
      ? "14px"
      : "14px"};

  box-shadow: ${({ $ranking }) =>
    $ranking === 1
      ? "2px 2px 2px 0 #FFF1BA inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset, 0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40) inset;"
      : $ranking === 2
      ? "0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 2px 0 #EBEBEB inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset;"
      : $ranking === 3
      ? "0 0 20px 0 rgba(206, 208, 255, 0.60), -2px -2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 5px 0 rgba(255, 255, 255, 0.40), 2px 2px 2px 0 #F3E4DF inset, -2px -2px 1.6px 0 rgba(255, 255, 255, 0.80) inset"
      : "0px 4px 16px rgba(0, 0, 0, 0.1);"};

  border: ${({ $ranking }) =>
    $ranking === 1
      ? "2px solid #FFEFB0"
      : $ranking === 2
      ? "2px solid #E0E0E0"
      : $ranking === 3
      ? "2px solid #EEDDD3"
      : "2px solid #eee"};

  z-index: 2;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const UserName = styled.p`
  font-family: Paperlogy;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.4px;
  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #F4B12A;"
      : $ranking === 2
      ? " #515457;"
      : $ranking === 3
      ? " #A05A42;"
      : " #eee"};
  font-size: ${({ $ranking }) =>
    $ranking === 1
      ? "28px"
      : $ranking === 2
      ? "20px"
      : $ranking === 3
      ? "18px"
      : "20px"};
`;

const DistanceBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

const UserDistance = styled.div`
  font-family: Paperlogy;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.48px;

  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #5C410B"
      : $ranking === 2
      ? " #0B0C0D"
      : $ranking === 3
      ? " #4C1E0F"
      : " #eee"};

  font-size: ${({ $ranking }) =>
    $ranking === 1
      ? "24px"
      : $ranking === 2
      ? "20px"
      : $ranking === 3
      ? "18px"
      : "20px"};
`;

const Km = styled.div`
  font-family: Paperlogy;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;

  color: ${({ $ranking }) =>
    $ranking === 1
      ? " #5C410B"
      : $ranking === 2
      ? " #0B0C0D"
      : $ranking === 3
      ? " #4C1E0F"
      : " #eee"};

  font-size: ${({ $ranking }) =>
    $ranking === 1
      ? "16px"
      : $ranking === 2
      ? "14px"
      : $ranking === 3
      ? "14px"
      : "14px"};
`;

const BadgeWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;

const Badge = styled.div`
  width: 36px;
  height: 36px;
  background: #222;
`;

const StyledImg = styled.img`
  width: ${({ $ranking }) =>
    $ranking === 1
      ? "60px"
      : $ranking === 2
      ? "40px"
      : $ranking === 3
      ? "36px"
      : "36px"};
  height: ${({ $ranking }) =>
    $ranking === 1
      ? "60px"
      : $ranking === 2
      ? "40px"
      : $ranking === 3
      ? "36px"
      : "36px"};
  position: absolute;
  bottom: ${({ $ranking }) =>
    $ranking === 1
      ? "140px"
      : $ranking === 2
      ? "118px"
      : $ranking === 3
      ? "112px"
      : "111px"};
`;

function TopCard({ ranking, user }) {
  const rankImg =
    ranking === 1
      ? Rank1
      : ranking === 2
      ? Rank2
      : ranking === 3
      ? Rank3
      : null;
  return (
    <TopCardWrap $ranking={ranking}>
      {rankImg && (
        <StyledImg $ranking={ranking} src={rankImg} alt={`Rank${ranking}`} />
      )}
      <InfoBox>
        <UserName $ranking={ranking}>
          {(() => {
            const name = user
              ? user.nickname || user.userName || user.name || "-"
              : "-";
            return name.length > 6 ? name.slice(0, 6) + "..." : name;
          })()}
        </UserName>
        <DistanceBox>
          <UserDistance $ranking={ranking}>
            {user && typeof user.distanceKm === "number"
              ? user.distanceKm.toFixed(2)
              : user && !isNaN(Number(user.distanceKm))
              ? Number(user.distanceKm).toFixed(2)
              : "-"}
          </UserDistance>
          <Km $ranking={ranking}>km</Km>
        </DistanceBox>
      </InfoBox>
      <BadgeWrap>
        {/* user.badges가 배열이면 배지 개수만큼 출력, 아니면 3개 빈 배지 */}
        {user && Array.isArray(user.badges)
          ? user.badges.slice(0, 3).map((b, i) => <Badge key={i} />)
          : [0, 1, 2].map((i) => <Badge key={i} />)}
      </BadgeWrap>
    </TopCardWrap>
  );
}
export default TopCard;
