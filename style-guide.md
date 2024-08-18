# Chart Component style-guide

The chart component should be responsive across all three major devices

- Mobile - 375px
- Tablet - 768px
- Desktop - 1440px

## Colors

```css
--soft-red: hsl(10, 79%, 65%);
--cyan: hsl(186, 34%, 60%);
--dark-brown: hsl(25, 47%, 15%);
--medium-brown: hsl(28, 10%, 53%);
--cream: hsl(27, 66%,92%);
--very-pale-orange: hsl(33, 100%, 98%); 
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 10px; 
--radius-6: 12px;
--radius-7: 16px;
--radius-8: 20px;
--radius-9: 24px;
--radius-10: 26px;
--radius-11: 28px;
--radius-12: 30px;
--radius-13: 32px;
--radius-14: 34px;
--radius-15: 36px;
--radius-16: 38px;
--radius-17: 40px;
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

```css
--ff-DM-Sans-sans-serif: var(--ff-DM-Sans), sans-serif;
--ff-DM-Sans: 'DM Sans';
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;
--font-style: normal; 
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;

/* Font sizes */
--font-size-0: clamp(0.74rem, 0.684rem + 0.282vw, 0.938rem); 
--font-size-1: clamp(0.938rem, 0.884rem + 0.268vw, 1.125rem);
--font-size-3: clamp(1.5rem, 1.357rem + 0.714vw, 2rem); 
--font-size-4: clamp(1.875rem, 1.554rem + 1.607vw, 3rem);
```

## Favicon Links

```html
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
```

## Spacing

```css
--space-1: clamp(0.25rem, 0.179rem + 0.357vw, 0.5rem); 
--space-2: clamp(0.5rem, 0.446rem + 0.271vw, 0.69rem);
--space-3: clamp(0.75rem, 0.644rem + 0.529vw, 1.12rem);
--space-4: clamp(1.25rem, 1.124rem + 0.629vw, 1.69rem); 
--space-5: clamp(1.25rem, 1.036rem + 1.071vw, 2rem); 
--space-6: clamp(1.25rem, 0.893rem + 1.786vw, 2.5rem); 
--space-7: clamp(1.38rem, 1.329rem + 0.257vw, 1.56rem); 
--space-8: clamp(1.5rem, 1.357rem + 0.714vw, 2rem); 
--space-9: clamp(1.5rem, 1.197rem + 1.514vw, 2.56rem);
--space-10: clamp(3.25rem, 2.999rem + 1.257vw, 4.13rem); 
 

```