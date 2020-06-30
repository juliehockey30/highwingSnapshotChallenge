import styled from 'styled-components';

const SectionWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  padding-bottom: 64px;
`;

const GroupWrapper = styled.div`
  width: 50%;
`;


const CategoryTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const VisualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: -150px 0 0 24px;
`;

const LedgendWrapper = styled.div`
  width: 40%;
`;

const LegendColorTextWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`;

const LedgendItem = styled.p`
  margin: 0;
`;

const LegendColor = styled.p`
  background-color: ${props => props.color};
  border-radius: 50%;
  height: 10px;
  margin: 0 24px 0 0;
  width: 10px;
`;

const SelectedPercent = styled.p`
  font-size: 64px;
  left: 45px;
  margin: 0;
  position: relative;
  top: 225px;
`;

const SelectedPremium = styled.p`
  font-size: 24px;
  margin-top: -50px;
  text-align: center;
`;

const SelectedTitle = styled.p`
  font-size: 14px;
  margin: -12px 0 0 0;
  text-align: center;
`;

export{
  SectionWrapper,
  GroupWrapper,
  CategoryTitle,
  ChartWrapper,
  VisualWrapper,
  LedgendWrapper,
  LegendColorTextWrapper,
  LedgendItem,
  LegendColor,
  SelectedPercent,
  SelectedPremium,
  SelectedTitle
};
