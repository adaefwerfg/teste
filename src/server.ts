import { app } from './app';
import { env } from './env';

app
	.listen({ port: env.PORT || 4000 })
	.then(() => {
		console.log(' 🚀 Server is running!');
		console.log(`http://localhost:${env.PORT}`);
	})
	.catch(() => {
		console.log('Error!');
	});
