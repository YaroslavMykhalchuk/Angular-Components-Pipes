# MyFirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Тема: Angular. Components. Pipes 

### Завдання: 
1. Створити базовий проект Angular з назвою MyFirstProject
2. Створити компонент, який виводить «Hello, Angular» в 
браузер, застосувавши для нього стилі і картинку
3. Создать Ріре, который принимает строку, 
содержащую две одинаковые следующие друг за другом 
буквы и возвращает ее без удвоения повторяющихся букв 
(например, строка aaa zzqzqaq hsdds превратится в aa
zqzqaq hsds)
4. Создать Рipe с параметрами:
Предположим, у вас есть список товаров в вашем приложении 
Angular. Каждый товар имеет цену и валюту, в которой она 
указана. Ваша задача - создать pipe, который будет 
преобразовывать цену товара в указанную валюту на основе 
текущего курса обмена валюты:
{{ product.price | converter:'GBP’:46.51 }}
5. Создать свой собственный Ріре, который будет 
принимать номер телефона в виде строки из 10 цифр и 
заменять ее на строку вида:
(ddd) dd – dd – ddd
6. Создать Ріре, который принимает строку Вашего имени и 
заменяет ее на строку из удвоений букв, например: 
Иван – Иивваанн
