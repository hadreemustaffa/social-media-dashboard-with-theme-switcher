# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/social-media-dashboard-with-theme-using-grid-uf2lp1NXCD)
- Live Site URL: [Github Pages](https://hadreemustaffa.github.io/social-media-dashboard-with-theme-switcher/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Changing theme using CSS custom properties.

```html
<html lang="en" color-mode="light"></html>
```

Using similar property names so that any theme change affect only the values.

```css
:root[color-mode='light'] {
  --clr-theme-bg: hsl(0, 0%, 100%);
}
:root[color-mode='dark'] {
  --clr-theme-bg: hsl(230, 17%, 14%);
```

## Author

- Frontend Mentor - [@hadreemustaffa](https://www.frontendmentor.io/profile/hadreemustaffa)
