# React + TypeScript + Vite + Jest + CICD

setup the Application Reactjs Typescript with Vite, Jest, React Testing Library 

## Setup Jest
### 1. install testing dependencies:
    npm i -D jest jest-environment-jsdom ts-jest ts-node @types/jest @testing-library/jest-dom @testing-library/react
### 2. Configure jest.setup.js: 

Create folder:
* /test => jest.setup.ts, /mocks
* /mocks => fileMock.js, styleMock.js,.... is the file mock js
#### Images
![This is an alt text.](/src/assets//setupJest/setup-file.png "This is a sample image.")

### 3. Configure jest.config.js:

    import type { Config } from 'jest';

    const config: Config = {
        rootDir: './',
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
        transform: {
            '^.+\\.tsx?$': 'ts-jest',
        },
        moduleNameMapper: {
            '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
            '\\.(css|less|scss)$': '<rootDir>/test/mocks/styleMock.js',
        }
    };

    export default config;


### 4. Add testing script:
* tsconfig.json
    ```
    { 
        "compilerOptions": {
            "target": "ES2022",
            "useDefineForClassFields": true,
            "lib": ["ES2022", "DOM", "DOM.Iterable"],
            "module": "ESNext",
            "skipLibCheck": true,
            "esModuleInterop": true,

            // Bundler mode
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": true,
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "jsx": "react-jsx",
            "types": ["jest", "@testing-library/jest-dom", "node"]
        },
        "files": [],
        "references": [
            { "path": "./tsconfig.app.json" },
            { "path": "./tsconfig.node.json" }
        ],
        ...
    }
  ```
* package.json
  ```
    {
        "scripts": {
            ...
            "test": "jest --coverage",
            "test:ci": "jest --ci"
        },
    }
  ```

### 5. Write initial test:
* create file Test.tsx
    ```
    import './App.css'
    function Test() {
        return (
            <div>Test</div>
        )
    }
    export default Test 
    ```
* create file Test.test.tsx
    ```
    import { render, screen } from '@testing-library/react'
    import Test from './Test'
    describe('Test', () => {
        it('renders the component', () => {
            render(<Test />)
            expect(screen.getByText('Test')).toBeInTheDocument()
        })
    })          
    ```

#### Note: .toBeInTheDocument() is error typescript
At file _tsconfig.app.json_ add "test" in include\

```
    {
        ...
        "include": ["src", "test"]
    }
```

**Done.**