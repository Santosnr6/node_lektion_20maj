import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import checkApiKey from '../middlewares/checkApiKey.js';
import todoSchema from '../models/todoModel.js';

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

router.get('/:id', (req, res) => {
    const todoId = req.params.id;
    const todo = todos.find(todo => todo.id === todoId);
    
    if(todo) {
        res.json(todo);
    } else {
        res.status(401).json({ message : "Todo not found" });
    }
});

router.post('/', (req, res) => {
    const { error } = todoSchema.validate(req.body);

    if(error) {
        return res.status(400).json({ error : error.details[0].message });
    }

    const newTodo = {
        id: `todo-${uuid().slice(0, 5)}`,
        task : req.body.task,
        done : false
    }

    todos.push(newTodo);

    const response = {
        success : true,
        status : 201,
        newTodo : newTodo,
        todos : todos,
        message : "Todo successfully created"
    }

    res.json(response);
});

router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const todo = todos.find(todo => todo.id === todoId);

    if(!todo) {
        return res.status(401).json({ error : "Todo not found" });
    }

    todo.done = !todo.done;

    const response = {
        success : true,
        todo : todo,
        message : todo.done ? "Todo marked as done" : "Todo marked as not done"
    }

    res.json(response);
});

router.delete('/:id', (req, res) => {
    const todoId = req.params.id;
    const index = todos.findIndex(todo => todo.id === todoId);

    if(index === -1) {
        return res.status(401).json({ error : "Todo not found" });
    }

    const deletedTodo = todos.splice(index, 1);

    const response = {
        succes : true,
        deletedTodo : deletedTodo,
        message : "Todo successfully deleted"
    }

    res.json(response);
})

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