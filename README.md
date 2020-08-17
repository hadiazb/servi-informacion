# Contenido
- Descripción del proyecto
- Herramientas Usadas
- Versión y licencia
- API
- Procedimiento para deploy

## Descripción del proyecto
The Coronavirus App, es una aplicación que pretende realizar un dashboard de la data proveniente de una API, que contienen información sobre el progreso de la pandemia C-19 en USA, para esto en su primera versión se han empleado herramientas que permiten el plot sobre el map de USA tomado de la herramienta google maps. 

## Herramientas Usadas
Las herramientas empleadas en este proyecto son listadas a continuación:

- Editor Visual Studio Code
- HTML5
- Styled-components para los estilos 
- React, Framework de JS
- Babel para transpilar codigo JS
- Vercel para hacer deploy en producción
- React-router para  gestionar las rutas de la app
- google-map-react para usar mapas de google maps
- leaflet para maps de formato geojson
- Material-UI para componentes
- sweetalert2 interactividad en anuncios
- NPM, node, gestor de paquetes y dependencias
- Webpack para empaquetar archivos
- Google maps, con API_KEY suministrada por el cliente.
- API data suministrada por el cliente: https://www.trackcorona.live/api
- Postman, para descripción de API
- Repocitorio de GitHub con contenido Cartografico: https://github.com/unitedstates/districts/tree/gh-pages/states

## Vesión
En la actualidad se cuenta con la v1.0.0, que nos permite el uso de herramientas básicas para la visualización de usuario final, en relación a la Licencia cuenta con MIT Licence

## API
Las API y recursos se encuentran en los siguientes links

- `<link>` :<https://www.trackcorona.live/api/countries>
- `<link>` :<https://www.trackcorona.live/api/provinces>
- `<link>` :<https://www.trackcorona.live/api/cities>

## Procedimiento para correr en local

- Debes clonar el repocitorio con el siguiente código `$ git clone https://github.com/hadiazb/servi-informacion.git`
- Luego de la descarga debes instalar node y las dependencias de npm usadas`$ node install` y `$ npm install` respectivamente.
- Verificar versión con  `$ node -v` y `$ npm -v`
- Para correr este proyecto en local debes primero usar el script definido en el package.json `$ npm run build`, para empaquetar la aplicación con webpack, luego de estar empaquetada ejecutar el script `$ npm run build:dev` para correr.
- Luego de lo anterior en el puerto 8000 de tu navegador se podra visualizar la aplicación  http://localhost:8000/ seguro se abre automaticamente.


## Liga del Proyecto corriendo en producción en un servidor de Vercel.

Si no pudiste ejecutar el proyecto en local puedes contactarme con mis datsos de contacto que se encuentran al final del repo, por lo pronto puedes ver la aplicación en producción usando este link.

https://servi-informacion.vercel.app/

## Pages 

[![N|Solid](https://user-images.githubusercontent.com/57742000/90410815-7610e880-e070-11ea-9bcc-6e9d3e2685de.png)](https://user-images.githubusercontent.com/57742000/90410815-7610e880-e070-11ea-9bcc-6e9d3e2685de.png)

[![N|Solid](https://user-images.githubusercontent.com/57742000/90411220-0ea76880-e071-11ea-887a-0ade9d047689.png)](https://user-images.githubusercontent.com/57742000/90411220-0ea76880-e071-11ea-887a-0ade9d047689.png)

[![N|Solid](https://user-images.githubusercontent.com/57742000/90411556-93928200-e071-11ea-9188-08aefc207c97.png](https://user-images.githubusercontent.com/57742000/90411556-93928200-e071-11ea-9188-08aefc207c97.png)

[![N|Solid](https://user-images.githubusercontent.com/57742000/90411664-b4f36e00-e071-11ea-9eae-5444b15dc733.png)](https://user-images.githubusercontent.com/57742000/90411664-b4f36e00-e071-11ea-9eae-5444b15dc733.png)

### Contacto
- Telefono 311-268-1981
- <hugoandresdiazbernal@gmail.com>
