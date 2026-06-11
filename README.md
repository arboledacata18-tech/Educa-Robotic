
# Educa-Robotic

Plataforma educativa de robótica construida con Laravel 13 + React 19 + Inertia.js.

## Requisitos

- PHP 8.3+
- Composer
- Node.js 20+
- npm

## Instalación

```bash
composer install
php artisan key:generate
php artisan migrate
npm install
npm run build
```

## Ejecutar en desarrollo

```bash
composer run dev
```

Esto levanta concurrentemente el servidor HTTP (`localhost:8000`), el worker de colas, los logs y Vite con HMR.

### Alternativa: comandos por separado

```bash
# Terminal 1
php artisan serve

# Terminal 2
npm run dev
```

Abrir http://localhost:8000.

## Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `composer dev` | Entorno dev completo |
| `npm run build` | Compilar assets para producción |
| `php artisan migrate` | Ejecutar migraciones |
| `composer test` | Ejecutar tests (Pest) |
| `npm run lint` | Corregir estilo frontend |
| `npm run types:check` | Verificar tipos TypeScript |

## Stack

- **Backend**: Laravel 13, Fortify (auth), SQLite, Pest
- **Frontend**: React 19, TypeScript, Inertia.js v3, Tailwind CSS v4, shadcn/ui, Vite 8
- **Extra**: Blockly (editor visual de programación), WebAuthn/Passkeys
