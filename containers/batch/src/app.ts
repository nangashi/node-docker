import config from 'config';
import logger from '@/libs/logger';

// エラーハンドリング
process.on('unhandledRejection', error => {
  logger.error('Promiseでリジェクションが発生しました。', error);
});

// メイン処理
(async () => {
  logger.info(`${config.app.name}を起動しました。`);

  logger.info(`${config.app.name}が終了しました。`);
})().catch(error => {
  logger.error(`${config.app.name}が異常終了しました。`, error);
});
