import { app } from './app';
import { env } from './env';

app
	.listen({ port: env.PORT })
	.then(() => {
		console.log(' 🚀 Server is running!');
		console.log(env.PORT);
	})
	.catch(() => {
		console.log('Error!');
	});
