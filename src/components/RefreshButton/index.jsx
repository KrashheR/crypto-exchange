import { StyledRefreshButton } from './styled';

function RefreshButton({ handleRefreshData }) {
  return <StyledRefreshButton onClick={handleRefreshData}>Refresh</StyledRefreshButton>;
}

export default RefreshButton;
