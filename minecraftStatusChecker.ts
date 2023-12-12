
import { MinecraftServer } from 'mcstatus';

export async function checkServerStatus(ip: string, port: number): Promise<number | null> {
  try {
    const server = new MinecraftServer(ip, port);
    const status = await server.ping();
    return status.players.online;
  } catch (error) {
    throw new Error(`Failed to retrieve server status: ${error.message}`);
  }
}
