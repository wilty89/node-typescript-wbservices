import app from "./src/server";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})

/**
 * const start = (): void => {
  const app = new App();
  app.listen();
}

start();
 */