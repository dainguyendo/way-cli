# way-cli

A CLI tool to help terminal users find their way.

## Table of contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Issues](#issues)

## Installation

<a name="installation"/>

```bash
npm i way-cli -g
```

## Setup

<a name="setup"/>

`way-cli` is powered by the [Google Maps Platform](https://cloud.google.com/maps-platform/) and requires an **API key** for use.

Installation of `way-cli` does not provide an API key.

[Follow this guide to get an API key](https://developers.google.com/maps/documentation/javascript/get-api-key).

Once you have your API key, create a `.env` file at the root of the installed package with the following content:

```env
WAY_CLI_API_KEY=<API_KEY>
```

## Usage

<a name="usage"/>

Help information is available within the CLI to provide usage instructions.

```bash
way-cli --help
```

## Issues

<a name="issues"/>

If you have issues using `way-cli` please [submit an issue to the project](https://github.com/dainguyendo/way-cli/issues).
