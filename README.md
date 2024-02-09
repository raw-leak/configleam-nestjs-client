
<div align="center">
  <h1> Configleam Nest.js Client </h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Last Tag](https://img.shields.io/github/v/tag/raw-leak/configleam-nestjs-client?label=Last%20Tag)
![Version](https://img.shields.io/github/v/release/raw-leak/configleam-nestjs-client)
![Contributors](https://img.shields.io/github/contributors/raw-leak/configleam-nestjs-client)

</div>

A JavaScript client library for interacting with the Configleam service, providing an easy-to-use interface for fetching configuration data.

**Note:** If you're looking for the main Configleam project, which provides the backend service, it is located [here](https://github.com/raw-leak/configleam).

## Installation

You can install the Configleam JavaScript client via npm:

```bash
npm install configleam-nestjs-client
```

## Usage
Certainly! Here's an explanation of how to use both `forRoot` and `forRootAsync` methods in the `ConfigleamModule` within your Nest.js application:

### Using `forRoot`

The `forRoot` method is used when you have static configuration options that can be provided synchronously. It's suitable when you know the configuration values at compile time and don't need to fetch them asynchronously. Here's how you can use `forRoot`:

```typescript
import { ConfigleamModule } from 'configleam-nestjs-client';

@Module({
  imports: [
    ConfigleamModule.forRoot({
      addrs: 'https://example.com/configleam', // Provide static configuration options
    }),
  ],
})
export class AppModule {}
```

### Using `forRootAsync`

The `forRootAsync` method is used when you need to provide configuration options asynchronously, such as fetching them from a database or environment variables. It's suitable when the configuration values are determined dynamically or require asynchronous resolution. Here's how you can use `forRootAsync`:

```typescript
import { ConfigleamModule, LoadEnv } from 'configleam-nestjs-client';

@Module({
  imports: [
    ConfigleamModule.forRootAsync({
      useFactory: async (loadEnv: LoadEnv) => {
        return {
          addrs: loadEnv.get('CONFIGLEAM_ADDRS'), // Asynchronously fetch configuration options
        };
      },
      inject: [LoadEnv], // Inject dependencies if needed
    }),
  ],
})
export class AppModule {}
```

By using `forRoot` or `forRootAsync`, you can effectively configure the `ConfigleamModule` within your Nest.js application based on your specific requirements, whether they are static or dynamic configuration needs.

## Configuration Options

- `addrs`: The base URL of the Configleam service.

## API

### Configleam(options: ConfigleamOptions)

Creates a new instance of the Configleam client with the specified options.

#### Parameters
- `options`: A configuration object for initializing the Configleam client.
  - `addrs`: The base URL of the Configleam service endpoint.

### readConfig(params: ReadConfigParam, options?: ReadConfigOptions): Promise<ConfigleamConfig>

Fetches configuration data from the Configleam service endpoint.

#### Parameters
- `params`: An object containing parameters for fetching configuration data.
  - `env`: The environment for which configuration data is requested.
  - `groups` (optional): An array of groups to filter the configuration data.
  - `globals` (optional): An array of global keys to include in the configuration data.
- `options` (optional): Additional options for the request, such as custom headers.
  - `headers` (optional): Additional headers to the request.

#### Returns
A Promise that resolves to the fetched configuration data. The returned data is structured as follows:
- For each requested group, the configuration data is nested under the group's name.
- Each requested global key is included as a top-level key in the configuration data.
Certainly! Here's an example request along with the corresponding response:

#### Example Request
```typescript
const params = {
  env: 'production',
  groups: ['api-one', 'api-two'],
  globals: ['global-1', 'global-2']
};

const options = {
  headers: {
    Authorization: 'Bearer <token>'
  }
};

await configleam.readConfig(params, options);
```

### Example Response
```typescript
{
  "api-one": { ... },
  "api-two": { ... },
  "global-1": { ... },
  "global-2": { ... },
}
```

This example demonstrates a request for configuration data in the production environment, filtering by `api-one` and `api-two`, and including global keys `global-1` and `global-2`. The response organizes the configuration data accordingly, providing the requested information for each group and global key.

## Contributing

Contributions are welcome! Please see the [Contribution Guidelines](CONTRIBUTING.md) for more information.

## Bug Reports and Feature Requests

Please report any issues or feature requests on the [Issue Tracker](https://github.com/raw-lean/configleam-nestjs-client/issues).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

[LinkedIn](https://www.linkedin.com/in/mykhaylo-gusak/)
[Mykhaylo Gusak] - mykhaylogusak@hotmail.com

Project Link: [https://github.com/raw-leak/configleam-nestjs-client](https://github.com/raw-leak/configleam-nestjs-client)


