import express, { Application,Request,Response} from 'express';
import cors from 'cors';
import router from './app/routes/route.index';
const app : Application = express();


//using cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
app.use('/api/v1', router);


//testing..
app.get('/', (req : Request, res: Response) => {
  res.send('working successfully');
})


export default app;


