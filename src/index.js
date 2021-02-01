import { app } from "./config/express.config";
import { PORT } from "./constants/common.constants";

import "source-map-support/register";

// Create the express server

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
