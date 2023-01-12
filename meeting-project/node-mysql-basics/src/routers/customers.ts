import { error } from 'console';
import { Router, Request, Response } from 'express'
import { save, find, update, deleteById } from '../controllers/customers'

const router: Router = Router()



router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('router');
    console.log(req.body);
    const insertId = await save(req.body)
    insertId ? res.send(`Customer ${insertId} inserted!`)
      : res.sendStatus(404)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const customer = await find(req.params.id)
    customer.length ? res.send(customer) :console.log('????');
    
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const customer = await find()
    customer.length ? res.send(customer) : res.sendStatus(404)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const isUpdated = await update(req.params.id, req.body)
    isUpdated
      ? res.send(`Customer ${req.params.id} updated!`)
      : res.send('Nothing updated')
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})


router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const isDeleted = await deleteById(req.params.id)
      isDeleted
        ? res.send(`Customer ${req.params.id} deleted!`)
        : res.send('Nothing deleted')
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  })
export default router
