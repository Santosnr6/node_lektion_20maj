import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import checkApiKey from '../middlewares/checkApiKey.js';

const router = Router();

// Middleware frör att kontrollera giltig API-nyckel
router.use(checkApiKey);

router.get('/', (req, res) => {
    // Bestämmer hur många som skall returneras, samt var i arrayen vi börjar leta
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;     
    const offset = req.query.offset ? parseInt(req.query.offset) : 0;    
    
    const limitedTodos = todos.slice(offset, limit + offset);

    let next = null;
    if(offset + limit < todos.length) {
        next = `limit=${limit}&offset=${offset + limit}`;
    }

    // Skapa responseobjekt
    const response = {
        success : true,
        status: 200,
        todos : limitedTodos,
        next : next
    }

    res.json(response);
});


const todos = [
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Rasta katten",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Köp mjölk",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Träna 30 minuter",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Läs en bok",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Ring mamma",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Städa köket",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Betala räkningar",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Gå ut med soporna",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Laga middag",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Köp blommor till partner",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Boka tandläkartid",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Skriv rapporten",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Gå en promenad",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Lyssna på nytt podcastavsnitt",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Planera semestern",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Köp nya skor",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Fota solnedgången",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Skicka e-post till kollegan",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Gör en god frukost",
      done: false
    },
    {
      id: `todo-${uuid().slice(0, 5)}`,
      task: "Börja lära dig ett nytt språk",
      done: false
    }
];

export default router;