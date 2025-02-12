## How to Run the Project

Follow the steps below to set up and run the project locally.

### 1. Install Dependencies

First, install the project dependencies using `npm`:

```bash
npm install
```

### 2. Environment Variables

Add the environment variables to the `.env` file.

```bash
PORT=3000
```


### 3. 

Run the project

```bash
npm run dev
```


POST /asset-details


### Development Details

I chose **Express** as the framework for this project because it is where I have the most experience and expertise. 

To ensure data integrity, I used **Celebrate** for input validation, which prevents incorrect or falsified data from being processed.

Additionally, I implemented **error handling** in the service responsible for creating `assetDetails`, ensuring robustness and reliability in the application.

Here is the detailed folder structure based on the provided description:


### Description of Folders and Files

- **@types/**: Contains TypeScript type definitions for environment extensions and frameworks.
  - `env.d.ts`: Defines types for environment variables.
  - `express.d.ts`: Defines custom types for Express.

- **assets/**: Stores static files or logs.
  - `errors.log`: Log file for errors.

- **dios/**: Contains DTO (Data Transfer Object) interfaces for data standardization.
  - `iCodeDTO.ts`: Interface for response codes.
  - `iExceptionDTO.ts`: Interface for exceptions.
  - `IObjectDTO.ts`: Interface for generic objects.
  - `iResponseDTO.ts`: Interface for API responses.

- **middlewares/**: Contains global middlewares.
  - `errorHandler.ts`: Middleware for centralized error handling.

- **modules/**: Organizes project modules.
  - **assetsDetails/**: Module related to asset details.
    - **dios/**: Contains DTO interfaces specific to the module.
      - `IAssetDetailDTO.ts`: Interface for asset details.
    - **services/**: Contains business logic.
      - **createAssetDetail/**: Service for creating asset details.
        - `CreateAssetDetailController.ts`: Controller for creating asset details.
        - `CreateAssetDetailService.ts`: Service for creating asset details.
    - **validators/**: Contains data validators for the module.

- **routes/**: Defines application routes.
  - `guardDetailRouter.ts`: Specific route for asset details.
  - `index.ts`: Main route configuration file.

- **shared/**: Contains shared resources.
  - **errors/**: Defines custom errors.
    - `AppError.ts`: Base class for custom errors.

- **app.ts**: Main Express application configuration.
- **server.ts**: Server initialization file.
```

