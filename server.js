// 1. chamar uma instância do router
var adminRouter = express.Router()

// 2. criar rotas para ele
// página principal (http://localhost:3000/home)
adminRouter.get('/', (req, res) => {
  res.send(index.html)
})

// página de vaga (http://localhost:3000/home/vagas)
adminRouter.get('/home/vagas', (req, res) => {
  res.send(vaga.html)
})


// 3. adicionar essas rotas a aplicação principal
app.use('/home', adminRouter)