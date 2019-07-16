const env = process.env.REACT_APP_ENV || 'dev';
const commons = process.env.REACT_APP_COMMONS || 'default';

const config = {
  stage: {
    app: 'stage',
    name: 'NHLBI DataSTAGE'
  },
  default: {
    app: 'default',
    name: 'Gen3 Data Commons'
  }
};

const commonsConfig = config[commons];
const baseUrl = env === 'dev' ? `${window.location}build/index.html` : null;

module.exports = {
  commonsConfig,
  baseUrl,
};
