# Prueba tecnica MELI

Para poder ejecutar el proyecto es necesario:

- Navegar a cada carpeta especifica (client/server)
- Instalar dependencias de cada parte del proyecto.
- Ejecutar ambos proyectos en terminales diferentes.

## Ejecutar el proyecto

> Abrir una terminal, navegar a la carpeta client, instalar dependencias y ejecutar el front
>
> > Se ejecuta en el puerto 5173

```
> cd client
> npm i
> npm run dev
```

> Abrir una terminal diferente, navegar a la carpeta server, instalar dependencias y ejecutar el back
>
> > Se ejecuta en el puerto 4500

```
> cd server
> npm i
> npm run dev
```

## Ejecutar las pruebas unitarias

Tuve un inconveniente para realizar las pruebas con Jest, especificamente con la configuración entre `Jest`, `babel` y `typescript`. Sin embargo, pude hacer un test unitario de un componente haciendo uso de `@testing-library/react` y `vitest` como alternativa a `Jest`.

La prueba unitaria se encuentra en la parte del front, por lo que se deberia realizar el siguiente proceso:

```
> cd client
> npm run test
```
