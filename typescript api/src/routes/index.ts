import { Router } from 'express';
import { getUsers,getUserById } from '../controller/idex';
import { getPosts } from '../controller/services';

const router = Router();

export const fetch = async (req: any, res: any) => {
    try {
        console.log(req.params);
        return res.status(200).send("success");
    } catch (err) {
        console.log(err);
    }
};

router.get("/dogs/:breed/:name", fetch);

router.get("/links", getUsers);
router.get("/links:id'", getUserById);


router.get("/axios", getPosts);
/*
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
        page:"problema"
    });
});
*/
export default router;