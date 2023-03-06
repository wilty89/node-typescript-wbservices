import { Router } from 'express';
import { getUsers,getUserById,fetch } from '../controller/index';
import { getPosts } from '../controller/services';

const router = Router();



router.get("/dogs/:breed/:name", fetch);

router.get("/links", getUsers);

router.get("/links/:id", getUserById);

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