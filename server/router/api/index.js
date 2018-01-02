const Router = require('koa-router');
const { jwt } = require('../../services/auth');
const auth = require('../../modules/Auth/routes');
const children = require('../../modules/Children/routes');
const screens = require('../../modules/SpeechScreen/routes');
const plans = require('../../modules/IndividualPlan/routes');
const speechCards = require('../../modules/SpeechCard/routes');
const resultAnalysis = require('../../modules/ResultAnalysis/routes');
const individualCards = require('../../modules/IndividualCards/routes');

const router = new Router();

router.use(auth);
router.use(jwt());
router.use(children);
router.use(screens);
router.use(plans);
router.use(speechCards);
router.use(resultAnalysis);
router.use(individualCards);

module.exports = router.routes();
