import express from 'express';

const router = express.Router();

router.get('/', getClientsController);

router.post(
    '/create',
    createApplicationValidator(),
    parseValidationResult,
    createApplicatioController
  );

  router.get(
    '/:applicationId',
    authenticateJwt,
    grantAccess('readAny', 'application'),
    getClientValidator(),
    parseValidationResult,
    getApplicationController
  );
  
  export default router;