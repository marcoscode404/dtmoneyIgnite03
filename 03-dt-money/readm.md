<!-- vite -->
npm vite@lasted

<!-- install node -->
- npm i

<!-- install styled-components -->
- npm i styled-components
- npm i @types/styled-components -D

<!-- biblioteca de icones  -->
- npm i phosphor-react

<!-- biblioteca de interface Radix UI -->
https://www.radix-ui.com/
- npm install @radix-ui/react-dialog
- npm install @radix-ui/react-radio-group

<!-- json server -->
## servidor para simular dados vindo do backend
## util para o desenvolvimento da interface
- npm i json-server -D
* npx json-server server.json

## roda em porta diferente 
lsof -i :3333
##para fechar a porta 
kill -9 'porta'

## roda o servido na porta 3333 e monitore as alterações dos dados com um delay de 500ml segundos para ficar mais realista
 npx json-server server.json -p 3333 -w -d 500

## react-hook form e o zod 
 npm i react-hook-form zood -(validação e esquema do formulario zod)
 npm i @hookform/resolvers

 ## axios api 
 npm i axios