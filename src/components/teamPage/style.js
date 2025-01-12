import styled from '@emotion/styled';
import { HiChevronRight } from 'react-icons/hi';

export const MemberSidebar = styled.div`
  width: 240px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #232323;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const WrapWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionLine = styled.hr`
  width: 100%;
  background-color: #3b3b3b;
  height: 1px;
  border: 0;
  position: sticky;
  top: 110px;
`;

export const MemberInfoTitle = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  position: sticky;
  top: 0;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    background: var(--theme-bg);
    width: 150px;
    height: 270px;
    z-index: -1;
    /* background-color: black; */
  }
`;

export const SideWrapper = styled.div`
  padding: 10px 0 0;
  margin: 10px;
  width: 170px;
  position: sticky;
  top: 10px;
`;

export const SideWrapperTwo = styled.div`
  padding: 10px 0;
  margin: 20px 10px 10px;
  width: 170px;
  position: sticky;
  top: 135px;
`;

export const SectionLineTwo = styled.hr`
  width: 100%;
  background-color: #3b3b3b;
  height: 1px;
  border: 0;
  position: sticky;
  top: 550px;
`;

export const SideWrapperThr = styled.div`
  padding: 10px 0;
  margin: 30px 10px 10px;
  width: 170px;
  position: sticky;
  bottom: 0;
`;

export const MemberInfoProfileTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 15px;
  color: white;
`;

export const MembersInfoProfileTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 15px;
  color: white;
  position: sticky;
`;

export const MemberWrap = styled.div`
  width: 100%;
  height: 350px;
  overflow-y: auto;
`;

export const YellowBox = styled.div`
  width: 175px;
  height: 45px;
  background: #feff80;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
`;

export const MemberInfoProfile = styled.div`
  align-items: center;
  display: flex;
  margin: 10px;
`;

export const MemberInfoProfileImg = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 50px;
  border: 1px solid black;
  object-fit: cover;

  cursor: pointer;
`;

export const MemberInfoProfileImgTwo = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  margin-left: 5px;
  border: 1px solid black;
  object-fit: cover;
`;

export const MemberInfoProfileInfo = styled.div`
  margin-left: 12px;
  overflow: hidden;
  width: 145px;
  color: #fff;
`;

export const MemberInfoProfileName = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
`;

export const MemberPosition = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 14px;
  letter-spacing: -0.02em;
`;

export const MemberInfoProfileNameTwo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: black;
`;

export const MemberInfoProfilePosition = styled.p`
  font-size: 13px;
  display: flex;
  margin-top: 2px;
`;

// 팀장
export const LeaderInfoProfile = styled.div``;
export const HostBox = styled.div`
  width: 60px;

  display: flex;
  justify-content: flex-end;
`;
export const MemberInfoHost = styled.img`
  width: 20px;
  height: 20px;
`;
export const LeaderBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const LeaderImgBox = styled.div``;
export const LeaderProfileInfo = styled.div`
  margin-left: 20px;

  color: white;
`;
export const LeaderName = styled.div`
  font-size: 16px;
  color: black;
`;
export const LeaderPosition = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 14px;
  letter-spacing: -0.02em;

  color: #ff80bf;
`;
export const MemberList = styled.div``;

export const MemberCancel = styled.img`
  width: 15px;
  height: 15px;

  cursor: pointer;
`;

// 대기멤버
export const WaitMember = styled.div`
  margin-top: 5px;
`;
export const WaitMemberTitle = styled.div`
  color: white;
  position: sticky;
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 15px;
`;
export const WaitMemberListBox = styled.div`
  margin-top: 20px;
  width: 175px;
  height: 220px;
  overflow-y: auto;
`;

export const WaitProfileInfo = styled.div`
  width: 110px;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

export const WaitChangeIcon = styled(HiChevronRight)`
  font-size: 25px;
  cursor: pointer;
  color: black;
`;
