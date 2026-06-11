<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'robotics/landing')->name('home');
Route::inertia('robotics/contenido/{id}', 'robotics/detalle-tema')->name('robotics.contenido.detalle');
Route::inertia('robotics/contenido', 'robotics/contenido')->name('robotics.contenido');
Route::inertia('robotics/playground', 'robotics/playground')->name('robotics.playground');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
