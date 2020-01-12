# tplant

> Typescript to UML (PlantUML)

Will convert a Typescript file to UML diagram. Following all inheritances.

[![Build Status](https://travis-ci.com/Jeff-Tian/tplant.svg?branch=master)](https://travis-ci.com/Jeff-Tian/tplant)
[![codecov](https://codecov.io/gh/Jeff-Tian/tplant/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/tplant)
[![Build status](https://ci.appveyor.com/api/projects/status/ghg9xa44co8h025p?svg=true)](https://ci.appveyor.com/project/Jeff-Tian/tplant)
[![Git commit with emojis!](https://img.shields.io/badge/gitmoji-git%20commit%20with%20emojis!-brightgreen.svg)](https://gitmoji.js.org)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Jeff-Tian_tplant)](https://sonarcloud.io/dashboard?id=Jeff-Tian_tplant)

## Usage

### Install

```shell
npm install --global @jeff-tian/tplant
```

### Generate image file (svg or png)

```shell
tplant --input test/Playground/**/*.ts --output test/Playground/Playground.svg
tplant --input test/Playground/Classes/Greeter.ts --output test/Playground/Classes/Greeter.png
```

> Internet connection is required

### Generate puml file

```shell
tplant --input test/Playground/**/*.ts --output test/Playground/Playground.puml
tplant --input test/Playground/Classes/Greeter.ts --output test/Playground/Classes/Greeter.puml
```

## Options

### -i, --input <path>

    Define the path of the Typescript file

### -o, --output <path>

    Define the path of the output file. If not defined, it'll output on the STDOUT

### -p, --project <path>

    Compile a project given a valid configuration file.
    The argument can be a file path to a valid JSON configuration file, or a directory path to a directory containing a tsconfig.json file.

### -C, --compositions

    Create not heritage compositions.
    Example:

```typescript
class Wheel {
  public size: number;
}
class Car {
  public wheel: Wheel;
}
```

```plantuml
@startuml
class Wheel {
    +size: number
}
class Car {
    +wheel: Wheel
}
Car *-- Wheel
@enduml
```

### -I, --only-interfaces

    Only convert interfaces

# References

https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
