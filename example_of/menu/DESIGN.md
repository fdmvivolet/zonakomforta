---
name: Zona Komforta Design System
colors:
  surface: '#fff8f5'
  surface-dim: '#dfd9d6'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2f0'
  surface-container: '#f3ecea'
  surface-container-high: '#eee7e4'
  surface-container-highest: '#e8e1df'
  on-surface: '#1d1b1a'
  on-surface-variant: '#4f453f'
  inverse-surface: '#33302e'
  inverse-on-surface: '#f6efed'
  outline: '#81756e'
  outline-variant: '#d2c4bc'
  surface-tint: '#705a4c'
  primary: '#26170c'
  on-primary: '#ffffff'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#dec1af'
  secondary: '#79573f'
  on-secondary: '#ffffff'
  secondary-container: '#ffd1b3'
  on-secondary-container: '#7a5840'
  tertiary: '#191b0c'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e3020'
  on-tertiary-container: '#979882'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#eabda0'
  on-secondary-fixed: '#2d1604'
  on-secondary-fixed-variant: '#5f402a'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fff8f5'
  on-background: '#1d1b1a'
  surface-variant: '#e8e1df'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is centered on the concept of "The Comfort Zone"—an inviting, upscale sanctuary for coffee enthusiasts. The design system bridges the gap between the artisanal warmth of a local cafe and the polished precision of a premium specialty coffee brand.

The visual style is **Corporate / Modern** with a **Tactile** edge. It utilizes generous whitespace to convey a sense of calm and luxury, while grounding the digital experience in organic, earthy tones derived from the roasting process. The interface should feel as smooth and deliberate as a poured latte, evoking feelings of reliability, warmth, and high-quality craftsmanship. High-resolution photography of product textures (crema, steamed milk, ground beans) serves as the primary decorative element.

## Colors

The palette is a monochrome exploration of coffee culture. 

- **Primary (Rich Espresso):** Reserved for high-level headings, primary buttons, and the most critical UI markers to ensure maximum contrast and authority.
- **Secondary (Roasted Coffee):** Used for sub-headings, icons, and interactive hover states.
- **Latte Art Gold (Accent):** A sophisticated highlight color for special offers, star ratings, or delicate borders.
- **Creamy Beige:** An auxiliary tone for secondary containers or tag backgrounds.
- **Background & Surface:** The canvas is a warm off-white, moving away from sterile pure whites to a more "paper-like" or "cream-like" experience. Cards and primary content areas use pure white to pop against the subtle cream background.

## Typography

This design system uses a dual-font approach to balance character with readability. **Montserrat** provides a geometric, modern foundation for headlines and branding elements, while **Open Sans** ensures that long-form menus and "Our Story" narratives remain highly legible and approachable.

Headings should utilize tighter letter-spacing and heavier weights to mimic high-end editorial layouts. Body text is intentionally spacious, with a comfortable line height to maintain the "relaxed" brand promise. Labels use uppercase styling with tracking to provide a technical, professional contrast to the fluid body text.

## Layout & Spacing

The design system employs a **Fluid Grid** model with a focus on "Generous Breathability." 

- **Desktop:** 12-column grid with 24px gutters and 64px side margins. Large sections (e.g., Hero, About) should utilize vertical spacing of 80px (xl) to create a premium, unhurried feel.
- **Tablet:** 8-column grid with 24px gutters and 32px margins.
- **Mobile:** 4-column grid with 16px gutters and 16px margins. 

Spacing follows an 8px base unit. Components should prioritize padding over borders to define their internal structure, ensuring the UI feels light and modern rather than boxed-in.

## Elevation & Depth

To maintain a "Modern but Warm" aesthetic, depth is achieved through a combination of **Tonal Layers** and **Ambient Shadows**.

1.  **Low Elevation (Cards):** Use a very soft, diffused shadow (15% opacity of the Secondary Coffee color) with a large blur radius (20px). This makes cards appear to "float" gently above the cream background.
2.  **Interactive Depth:** On hover, buttons and cards should slightly increase their shadow spread and move -2px on the Y-axis to simulate a physical lift.
3.  **Tonal Depth:** Use the Latte Art Gold or Creamy Beige for inset backgrounds of specialized modules (like a "Flavor Profile" box) to create depth without relying on shadows.
4.  **Borders:** Use thin, 1px borders in Latte Art Gold (#D4A373) at 30% opacity for a delicate, premium touch on image frames or secondary inputs.

## Shapes

The shape language is defined by **Rounded (level 2)** corners. A standard radius of 12px (0.75rem) is applied to all primary containers, buttons, and input fields. This specific radius is chosen to feel "friendly and soft" without becoming "juvenile or overly bubbly."

- **Images:** Should always feature rounded corners to match the UI.
- **Interactive Elements:** Buttons utilize the 12px radius.
- **Small Elements:** Tooltips and chips use a smaller 4px-8px radius to maintain visual proportion.

## Components

### Buttons
- **Primary:** Solid Rich Espresso (#3D2B1F) with white Montserrat text. 12px rounded corners. Heavy weight.
- **Secondary:** Outlined in Roasted Coffee (#6F4E37) with a subtle Creamy Beige background on hover.
- **Ghost:** Latte Art Gold text with no background, used for tertiary actions like "Learn More."

### Cards (Product & Story)
- White background, 12px radius, soft ambient shadow.
- Product cards feature full-width high-quality stock photography at the top.
- Typography within cards should be "Headline-sm" for product names and "Body-md" for descriptions.

### Input Fields
- Soft cream background (#F5F5DC at 50% opacity) with a subtle 1px Roasted Coffee border. 
- 12px rounded corners. Focus state changes border to solid Latte Art Gold.

### Chips & Tags
- Used for dietary labels (e.g., "Vegan," "Gluten-Free"). 
- Small caps Montserrat, Creamy Beige background, 4px radius.

### Lists & Menus
- Menu items should be separated by thin, low-opacity Latte Art Gold dividers.
- Price points should be bolded in Rich Espresso to stand out clearly.

### Additional Components
- **Flavor Profile Indicators:** Small icons or bars using the Latte Art Gold color to indicate Roast Level, Acidity, and Body.
- **Brew Guides:** A step-by-step list component with large, thin numbers in the primary Espresso color.