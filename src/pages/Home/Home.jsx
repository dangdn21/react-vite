import { Link } from 'react-router-dom';
import { Row, Col } from '~/components/UI/Grid';
import QueryHandler from '~/components/ReactQuery/QueryHandler';
import CryptoStats from '~/pages/CryptoStats';
import Cryptocurrencies from '~/pages/Cryptocurrencies';
import coinRankingApi from '../../services/CoinRanking';

export default function Home() {
  const { t } = useTranslation();

  const { data, status } = coinRankingApi.coins().list(10);

  const coins = data?.data.data.coins?.slice(0, 10);

  return (
    <QueryHandler status={status}>
      <Row className="w-full px-4 pt-3">
        <Col className="w-full">
          <Row className="w-full">
            <Col className="w-full px-4">
              <h1 className="text-5xl">{t('Global Crypto Stats')}</h1>

              <CryptoStats stats={data?.data.data.stats} />
            </Col>
          </Row>

          <Row className="w-full">
            <Col className="w-full px-4">
              <Row className="justify-between">
                <Col>
                  <h1 className="mt-5 text-5xl">{t('Top 10 Cryptocurrencies in the world')}</h1>
                </Col>

                <Col className="mx-6 text-2xl text-center self-end">
                  <Link to="/Cryptocurrencies" className="cursor-pointer text-blue-500">
                    {t('Show More')}
                  </Link>
                </Col>
              </Row>

              <Cryptocurrencies coins={coins} />
            </Col>
          </Row>
        </Col>
      </Row>
    </QueryHandler>
  );
}
