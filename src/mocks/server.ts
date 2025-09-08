import { Server } from 'miragejs';

//type AppRegistry = Registry<{}, Record<string, never>>;
//export type AppSchema = Schema<AppRegistry>;

export function mockApiServer(): void {
  const originalConsoleLog = console.log;
  console.log = function (...args) {
    if (
      !args.some(
        (arg) => typeof arg === 'string' && arg.includes('Mirage: Passthrough request for'),
      )
    ) {
      originalConsoleLog.apply(console, args);
    }
  };

  new Server({
    models: {},

    seeds(server): void {
      server.db.loadData({});
    },

    routes(): void {
      this.get('/api/users', () => ({
        users: [
          {
            id: 1,
            lastName: 'Doe',
            firstName: 'John',
            email: 'john@example.com',
            birthDate: '1990-01-01',
          },
          {
            id: 2,
            lastName: 'Smith',
            firstName: 'Jane',
            email: 'jane@example.com',
            birthDate: '1992-02-02',
          },
          {
            id: 3,
            lastName: 'Johnson',
            firstName: 'Alice',
            email: 'alice@example.com',
            birthDate: '1993-03-03',
          },
        ],
      }));
      this.passthrough();
      this.passthrough('http://localhost:4200/*');
    },
  });
}
