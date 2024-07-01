import express from 'express';
import { sequelize } from './src/db/sequelize.js';
import handleRoutes from './src/routes/handleRoutes.js';
import './src/models/Brands.js';
import './src/models/Products.js';
import { handleError } from './src/handleResponses/handleError.js';

const app = express();

app.use(express.json());

app.use('/api/v1', handleRoutes);

app.use((err, req, res, next) => {
    next(handleError(err, req, res));
});

app.listen(process.env.PORT, () => {
    console.log(`Server runnin in port:${process.env.PORT}`);
});
