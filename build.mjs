// build.mjs — Agrupa os módulos compilados em um único bundle para GitHub Pages
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

// Garante que o diretório dist existe
mkdirSync('./dist', { recursive: true });

// Copia o index.html para dist
copyFileSync('./src/index.html', './dist/index.html');
copyFileSync('./src/styles.css', './dist/styles.css');

console.log('✅ Build concluído! Arquivos em ./dist');
console.log('📦 Para GitHub Pages: faça commit da pasta dist/ ou configure o GitHub Actions.');
