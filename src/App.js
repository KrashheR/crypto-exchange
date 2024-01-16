import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ButtonsList from './components/PeriodButtons';
import LineChart from './components/LineChart';
import CoinSelector from './components/CoinSelector';
import RefreshButton from './components/RefreshButton';
import GlobalStyles from './assets/theme/globalStyles';
import { StyledAppContainer, StyledApp, StyledAppHeader } from './styled';

function App() {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [period, setPeriod] = useState();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/blockchain/list?api_key=d39d62393f871dd5c8ee0fe396200e95daeebdc3db4bc6cd4e08f2ca78e0c4c4'
      )
      .then((response) => {
        const coinList = Object.keys(response.data.Data);
        setCoins(coinList);
        setSelectedCoin(coinList[0]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlePeriodChange = useCallback((num) => {
    setPeriod(num);
  }, []);

  const handleCoinSelect = useCallback((coin) => {
    setSelectedCoin(coin);
  }, []);

  const handleRefreshData = () => {
    if (period) {
      const baseUrl = 'https://min-api.cryptocompare.com/data/exchange/histohour';
      const query = `?tsym=${selectedCoin}&limit=30&aggregate=${period}`;

      axios
        .get(baseUrl + query)
        .then((response) => {
          setChartData(response.data.Data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  };

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <StyledAppContainer>
          <StyledAppHeader>
            <ButtonsList handlePeriodChange={handlePeriodChange} selectedPeriod={period} />
            <RefreshButton handleRefreshData={handleRefreshData} />
            <CoinSelector
              coins={coins}
              selectedCoin={selectedCoin}
              handleCoinSelect={handleCoinSelect}
            />
          </StyledAppHeader>
          <LineChart data={chartData} />
        </StyledAppContainer>
      </StyledApp>
    </>
  );
}

export default App;
