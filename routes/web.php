<?php

use Illuminate\Support\Facades\Route;

Route::any('/admin{vue}', function () {
    return view('back');
})->where(['vue' => '.*']);

Route::any('{vue}', function () {
    return view('front');
})->where(['vue' => '.*']);
