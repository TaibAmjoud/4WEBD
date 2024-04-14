const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const proxy = require('express-http-proxy');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

app.use(express.json());
app.use(cors());

// Configurez swagger-jsdoc
const swaggerOptions = {
    definition: {
      openapi: '3.0.0', // Spécifier la version d'OpenAPI
      info: {
        title: 'API Gateway', // Titre de l'API
        version: '1.0.0', // Version de l'API
      },
    },
    apis: ['./user/userRoutes.yaml', './ticket/ticketRoutes.yaml', './event/eventRoutes.yaml'], // Chemin vers les fichiers contenant les commentaires de code
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
  // Exposer la documentation Swagger via une route
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

// Utilisez Swagger UI Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/ticket', proxy('http://localhost:4002'))
app.use('/user', proxy('http://localhost:4003'))
app.use('/', proxy('http://localhost:4001')) // Events

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Gateway is Listening on port ${port}...`));