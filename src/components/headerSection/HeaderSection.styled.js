import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding-left: 48px;
`;

const BrokerName = styled.h1`
  color: #013d40
  font-size: 36px
`;

const SubheaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const SubheaderLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  width: 120px;
`;

const Subheader = styled.p`
  margin: 6px 0;
`;

export{
  HeaderWrapper,
  BrokerName,
  SubheaderWrapper,
  SubheaderLabel,
  Subheader
};
