# MCPLAYERSAPI
a basic onlineplayers api for mc in ts

## Usage:

```TypeScript
// index.ts
import { checkServerStatus } from './minecraftStatusChecker';

async function main() {
  const ip = 'your_server_ip';
  const port = 25565;

  try {
    const onlinePlayers = await checkServerStatus(ip, port);
    if (onlinePlayers !== null) {
      console.log(`Online players: ${onlinePlayers}`);
    } else {
      console.log('Failed to retrieve server status.');
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();

```
