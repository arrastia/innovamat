<!-- HEADER -->

<p align="center">
    <a href="https://innovamat-777.web.app">
        <h1 align="center">🧮 Innovamat</h1>
    </a>
    <p align="center">
        This project was bootstrapped with <a href="https://github.com/space-rx/create-react-space">Create React Space</a>
        <br />
    </p>
</p>

## Run the app in development mode.

Clone the repository from github

```sh
git clone https://github.com/arrastia/innovamat.git
```

<br />

Install project dependencies

```sh
npm install
```

<br />

Finally, run the development mode by hitting **npm start** command

```sh
npm start
```

<br />

## Used libraries

- [axios](https://github.com/axios/axios)
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
- [react-router-dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom)
- [recoil](https://github.com/facebookexperimental/Recoil)
- [styled-components](https://github.com/styled-components/styled-components)

<br />

## Observations and API errors

> Duplicated ids

- There are some resources with **duplicated ids**.

> API errors

- The method [Ambientes]('https://innovamat-777.web.app/recursos/ambientes) returns a **404 NOT FOUND**.
- The method [Rutinas]('https://innovamat-777.web.app/recursos/rutinas) returns a **405 NOT ALLOWED**.

<br />

## Future improvements

1. It might be a good idea to redefine the styles of the **_like_** button of the card component. The button is hidden until we hover the Card component and that could be confusing for the user.

2. It would be great to add **_Skeleton_** loading views instead of a generic loading component.
