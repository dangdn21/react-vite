import type { CoinStats } from 'services/CoinRanking/types';
import { convertToElId } from 'modules/Util';
import { Col, Row } from '../UI/Grid';
import Subtitle from '../UI/Typograpy/Subtitle';
import NumberTooltip from '../UI/Tooltip/NumberTooltip';

type Dictionary = Record<string, string>;

interface CryptoStatsProperties {
  stats: CoinStats | undefined;
}

export default function ({ stats }: CryptoStatsProperties) {
  const { t } = useTranslation();

  const dictionary: Dictionary = {
    total: t('Total Cryptocurrencies'),
    totalExchanges: t('Total Exchanges'),
    totalMarketCap: t('Total Market Cap'),
    total24hVolume: t('Total 24h Volume'),
    totalMarkets: t('Total Markets'),
  };

  return (
    <Row className="pt-5 px-2 grid grid-flow-row justify-between grid-cols-2 w-full">
      {
        Object.keys(dictionary)
          .map((key) => (
            <Col className="pt-4" key={convertToElId(`${dictionary[key]}-title`)}>
              <Subtitle id={convertToElId(`${dictionary[key]}-title`)}>
                {dictionary[key]}
              </Subtitle>
              <NumberTooltip
                id={dictionary[key]}
                number={stats ? stats[key as keyof CoinStats] : 0}
              />
            </Col>
          ))
      }
    </Row>
  );
}
