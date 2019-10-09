## Получение API ключа

1. Создайте аккаунт [themoviedb.org](https://www.themoviedb.org/account/signup)
2. Перейдите в настройки аккаунта (Account -> Settings -> [API](https://www.themoviedb.org/settings/api)). Создайте приложение и скопируйте **API Key**.

## Переменные окружения

1. Создайте `.env` файл в директории [packages/api](packages/api) на основе `.env.example` и замените `TMDbKey` на ваш.
2. В [packages/web](packages/web) скопируйте `.env.example` и переименуйте в `.env`.

## Локальные npm пакеты

[web](packges/web) - Vue.js приложение.

[api](packages/api) - Серверная часть. REST API приложение.

## Разработка

### `yarn dev`

Запустит приложение в режиме разработки.

**Vue App:** http://localhost:8080

**REST API:** http://localhost:4000

### `yarn build`

Подготит приложение для production в папке `api/dist` и `web/dist`.
