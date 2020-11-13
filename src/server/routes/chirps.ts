import * as express from "express";
import db from '../db';

const router: express.Router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(await db.chirper.allChirps());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        res.json(await db.chirper.getChirp('id'));
    }    catch (e) {
        console.log(e);
        res.sendStatus(500);
    };
});
// router.get("/", (req: express.Request, res: express.Response) => {
//     const data = GetChirps();
//     const chirps = Object.keys(data).map((key) => {
//         return {
//             id: key,
//             username: data[key].username,
//             message: data[key].message,
//         };
//     });
//     chirps.pop();
//     res.json(chirps);
// });



// router.post("/", (req: express.Request, res: express.Response) => {
//     let chirpObj: chirp = {
//         username: req.body.username,
//         message: req.body.message
//     };
//     CreateChirp(chirpObj);

//     res.sendStatus(200);
// });

// router.put("/:id", (req: express.Request, res: express.Response) => {
//     const id: string = req.params.id;
//     let chirpObj: chirp = {
//         username: req.body.username,
//         message: req.body.message
//     };
//     UpdateChirp(id, chirpObj);

//     res.sendStatus(200);
// });

// router.delete("/:id", (req: express.Request, res: express.Response) => {
//     const id: string = req.params.id;
//     console.log(id)
//     DeleteChirp(id);

//     res.send(`chirp ${req.params.id} was deleted`);
// });

// interface chirp {
//     username: string,
//     message: string
// }

export default router