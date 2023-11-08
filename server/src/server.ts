import { app } from './app'
import { env } from './env'

app.listen(env.PORT, () => {
  console.log('🚀 HTTP Server running an http://localhost:3333')
})
