# 🔗 slugify-url-smart

[![npm version](https://img.shields.io/npm/v/slugify-url-smart?color=blue&logo=npm)](https://www.npmjs.com/package/slugify-url-smart)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/your-username/slugify-url-smart/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/slugify-url-smart?label=size)](https://bundlephobia.com/package/slugify-url-smart)
[![CI Status](https://img.shields.io/github/actions/workflow/status/your-username/slugify-url-smart/test.yml?label=CI)](https://github.com/ronakmunjapara/slugify-url-smart/actions)

**A zero-dependency, smart URL slug generator** with **emoji support** (🔥 → `fire`), **transliteration** (café → `cafe`), and **SEO-friendly** output. Perfect for blogs, e-commerce, and CMS platforms.

---

## ✨ Features

- 🎯 **Emoji to Text**: Converts `🚀` → `rocket`, `❤️` → `heart`, etc.
- 🌍 **Unicode Aware**: Handles accents (e.g., `München` → `muenchen`).
- 🔧 **Flexible Formats**: Choose `kebab-case`, `snake_case`, or `camelCase`.
- 🧹 **Clean Output**: Strips special chars, spaces, and duplicates.
- 📦 **Zero Dependencies** – Lightweight (≈2KB) and fast.



## 🚀 Install

```bash
npm install slugify-url-smart
# or
yarn add slugify-url-smart
# or
pnpm add slugify-url-smart
```

---

## 📖 Usage

### Basic (kebab-case)
```js
import { slugify } from 'slugify-url-smart';

slugify('🔥 Hot Deals! Café 50% OFF → 2024');
// Output: 'fire-hot-deals-cafe-50-percent-off-2024'
```

### Custom Format (snake_case/camelCase)
```js
slugify('Hello World 🌎', { case: 'snake' });
// Output: 'hello_world_earth'

slugify('Hello World 🌎', { case: 'camel' });
// Output: 'helloWorldEarth'
```

---

## ⚙️ API

### `slugify(input: string, options?)`
- **`input`**: String to convert (e.g., `"Hello @World!"`).
- **`options.case`**: `'kebab'` (default), `'snake'`, or `'camel'`.

---

## 🛠 Use Cases

- **Blogs**: Clean post URLs (`/fire-hot-deals-2024`).
- **E-commerce**: Product slugs (`/organic-cafe-latte`).
- **CMS**: Safe paths for user-generated content.
- **SEO**: Readable URLs for better rankings.

---

## ❓ FAQ

**Q: Does it handle non-Latin scripts?**  
A: Yes! Transliterates Cyrillic, Chinese, etc. (e.g., `北京` → `bei-jing`).

**Q: Can I contribute?**  
A: Absolutely! Open an issue or PR on [GitHub](https://github.com/ronakmunjapara/slugify-url-smart).

---

## 📜 License

MIT © [Ronak Munjapara](https://github.com/ronakmunjapara)  
*Like this? ⭐️ [Star the repo](https://github.com/ronakmunjapara/slugify-url-smart)!*


---





