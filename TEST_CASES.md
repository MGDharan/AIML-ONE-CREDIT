# Test Cases - Giridharan M Portfolio

Comprehensive test suite for the animated portfolio website. All tests include expected outcomes and verification steps.

## 📋 Test Case Categories

1. [Browser Compatibility](#1-browser-compatibility-testing)
2. [Animation Performance](#2-animation-performance)
3. [Responsive Design](#3-responsive-design)
4. [User Interactions](#4-user-interactions)
5. [Accessibility](#5-accessibility-testing)
6. [Form Validation](#6-form-validation)
7. [Cross-Device Testing](#7-cross-device-testing)

---

## 1. Browser Compatibility Testing

### TC-1.1: Chrome Desktop (Latest)
**Environment**: Chrome/Edge 90+ on Windows/macOS  
**Steps**:
1. Open index.html in Chrome
2. Verify page loads without console errors
3. Test cursor animation by moving mouse
4. Click to trigger ripple effect
5. Switch theme by clicking theme button
6. Scroll through sections

**Expected Results**:
- ✅ Page loads in <1.5s
- ✅ No JavaScript errors in console
- ✅ Cursor animation smooth (<1ms latency)
- ✅ Ripple effects expand properly
- ✅ All 6 themes switch without glitches
- ✅ Scroll animations trigger on section entry

**Notes**: Most supported browser, baseline for testing

---

### TC-1.2: Firefox Desktop (Latest)
**Environment**: Firefox 88+ on Windows/macOS  
**Steps**:
1. Open index.html in Firefox
2. Check page rendering
3. Verify animations play smoothly
4. Test form fields
5. Check dark/light mode toggle

**Expected Results**:
- ✅ Page renders identically to Chrome
- ✅ All animations at 60 FPS
- ✅ Form elements accessible
- ✅ Theme toggle persists on reload

---

### TC-1.3: Safari Desktop (Latest)
**Environment**: Safari 14+ on macOS  
**Steps**:
1. Open index.html in Safari
2. Verify gradient animations render
3. Test cursor tracking
4. Check CSS variable support
5. Verify localStorage functionality

**Expected Results**:
- ✅ CSS gradients render correctly
- ✅ Animations smooth and aligned
- ✅ Custom cursor visible
- ✅ Theme selection persists

---

### TC-1.4: Mobile Chrome (Android)
**Environment**: Chrome on Android 10+  
**Steps**:
1. Open portfolio on iOS Safari via file share
2. Tap to trigger ripple effects
3. Scroll through sections
4. Switch themes
5. Test form submission

**Expected Results**:
- ✅ Touch events trigger ripples
- ✅ Animations fluid on mobile
- ✅ Layout responsive (1-column)
- ✅ Buttons properly sized for touch

---

### TC-1.5: Mobile Safari (iOS)
**Environment**: Safari on iOS 14+  
**Steps**:
1. Open portfolio in iOS Safari
2. Test touch interactions
3. Scroll and check sticky nav
4. Verify image loading
5. Test form on mobile

**Expected Results**:
- ✅ All touch events work
- ✅ Smooth scrolling enabled
- ✅ Navigation accessible
- ✅ Images load correctly
- ✅ Form keyboard appears

---

## 2. Animation Performance

### TC-2.1: Cursor Animation Responsiveness
**Environment**: Chrome Desktop  
**Prerequisites**: DevTools open (F12)  
**Steps**:
1. Open Performance tab in DevTools
2. Start recording
3. Move mouse rapidly across screen
4. Stop recording after 3 seconds
5. Check cursor particle trail

**Expected Results**:
- ✅ Cursor lag time <1ms
- ✅ Frame rate 58-60 FPS minimum
- ✅ No jank or stuttering
- ✅ Particle effects trail smoothly

**Measurement**: Use `performance.now()` to measure frame timing

---

### TC-2.2: Ripple & Wave Animation Performance
**Environment**: Chrome Desktop  
**Prerequisites**: DevTools Performance tab open  
**Steps**:
1. Start performance recording
2. Click 10 times rapidly on page
3. Record performance metrics
4. Stop recording

**Expected Results**:
- ✅ 10 ripples render smoothly
- ✅ No memory leaks detected
- ✅ Frame rate stays 55+ FPS
- ✅ Ripples clean up after 1.2s

**Metrics to Check**:
- Rendering time per ripple
- Memory usage before/after
- Garbage collection intervals

---

### TC-2.3: Scroll Animation Performance
**Environment**: All major browsers  
**Steps**:
1. Open DevTools
2. Scroll from top to bottom quickly
3. Monitor frame rate during scroll
4. Check CPU usage
5. Repeat on low-end device simulation

**Expected Results**:
- ✅ 60 FPS maintained during scroll
- ✅ CPU usage <10%
- ✅ Animations triggered at right scroll points
- ✅ No animation jank on slow devices

---

### TC-2.4: Theme Switching Performance
**Environment**: Chrome Desktop  
**Steps**:
1. Click theme button rapidly 5 times
2. Check performance during transitions
3. Verify all elements update color
4. Check memory stability

**Expected Results**:
- ✅ Theme switches instantly
- ✅ All colors update immediately
- ✅ No visual flicker
- ✅ CSS variables apply correctly

---

## 3. Responsive Design

### TC-3.1: Desktop Layout (1200px+)
**Environment**: Chrome DevTools - Desktop view  
**Steps**:
1. Set viewport to 1400x900
2. Check all sections visible
3. Verify 2-column portfolio grid
4. Test images at 16:9 aspect
5. Check navigation layout

**Expected Results**:
- ✅ All sections properly spaced
- ✅ Portfolio showcase 2 columns
- ✅ Images maintain 16:9 ratio
- ✅ No overflow or clipping
- ✅ Padding/margins correct

---

### TC-3.2: Tablet Layout (768px-1199px)
**Environment**: Chrome DevTools - iPad view (768x1024)  
**Steps**:
1. Set viewport to 768x1024
2. Verify single column layout
3. Check image aspect ratio (16:10)
4. Test navigation responsiveness
5. Verify sections stack properly

**Expected Results**:
- ✅ Single column layout applies
- ✅ Images show at 16:10 ratio
- ✅ Text readable without zoom
- ✅ Buttons properly sized
- ✅ No horizontal scroll

---

### TC-3.3: Mobile Layout (480px-767px)
**Environment**: Chrome DevTools - iPhone view (375x667)  
**Steps**:
1. Set viewport to 375x667
2. Verify mobile stacking
3. Check image aspect (1:1)
4. Test navigation menu
5. Verify touch targets (48px min)

**Expected Results**:
- ✅ All sections stack vertically
- ✅ Images square (1:1 ratio)
- ✅ Text large enough
- ✅ Hamburger menu works
- ✅ No horizontal scroll
- ✅ Touch targets ≥48px

---

### TC-3.4: Portrait/Landscape Rotation
**Environment**: Mobile device or emulator  
**Steps**:
1. Hold device in portrait
2. Rotate to landscape
3. Rotate back to portrait
4. Check layout switches correctly

**Expected Results**:
- ✅ Layout adjusts smoothly
- ✅ No content overflow
- ✅ Images resize properly
- ✅ No data loss/reload needed

---

## 4. User Interactions

### TC-4.1: Cursor Animation & Particles
**Environment**: Chrome Desktop  
**Steps**:
1. Move cursor to different speeds
2. Move over buttons (should expand)
3. Move rapidly across page
4. Rest cursor and watch particles fade

**Expected Results**:
- ✅ Cursor tracks instantly
- ✅ Cursor ring visible at all times
- ✅ Cursor expands (30px) on button hover
- ✅ Particle trail follows smoothly
- ✅ Particles fade after 0.8s

---

### TC-4.2: Click Ripple Effects
**Environment**: Chrome Desktop  
**Steps**:
1. Click on empty area
2. Check ripple starts at click point
3. Watch ripple expand to edges
4. Click multiple times rapidly
5. Observe particle burst

**Expected Results**:
- ✅ Ripple appears at click location
- ✅ Dual-layer ripples expand (400px, 500px)
- ✅ Glow effect appears (600px)
- ✅ 12 particles burst outward
- ✅ Effects clean up after 1.2s

---

### TC-4.3: Button Click Interactions
**Environment**: Chrome Desktop  
**Steps**:
1. Hover over "Explore my work" button
2. Click button
3. Check navigation occurs
4. Test "Download Resume" button
5. Verify ripple on button

**Expected Results**:
- ✅ Button ripple visible on click
- ✅ Navigation smooth
- ✅ Resume downloads or navigates
- ✅ No visual glitches

---

### TC-4.4: Scroll Animations  
**Environment**: Chrome Desktop  
**Steps**:
1. Start at top of page
2. Scroll down slowly
3. Verify sections fade in
4. Scroll back up
5. Observe animation reset/replay

**Expected Results**:
- ✅ Sections fade-in-up on entry
- ✅ Animations trigger at 80% viewport
- ✅ Smooth fade timing
- ✅ Animation class applies correctly

---

### TC-4.5: Theme Switching
**Environment**: All browsers  
**Steps**:
1. Click theme button (top right)
2. Verify theme changes
3. Cycle through all 6 themes
4. Reload page
5. Check theme persists

**Expected Results**:
- ✅ 6 themes cycle in order
- ✅ Colors update instantly
- ✅ All text/backgrounds change
- ✅ Theme saves to localStorage
- ✅ Persists after reload

---

### TC-4.6: Dark/Light Mode Toggle
**Environment**: All browsers  
**Steps**:
1. Click dark/light mode button
2. Verify contrast changes
3. Check all sections update
4. Reload page
5. Verify mode persists

**Expected Results**:
- ✅ Mode toggles visible
- ✅ All colors invert appropriately
- ✅ Text remains readable
- ✅ localStorage saves selection

---

### TC-4.7: Navigation Menu
**Environment**: Mobile view (375px)  
**Steps**:
1. Click hamburger menu
2. Verify menu opens
3. Click menu item (e.g., "About")
4. Verify smooth scroll to section
5. Menu closes after click

**Expected Results**:
- ✅ Menu toggles open/closed
- ✅ Navigation items visible
- ✅ Smooth scroll to section
- ✅ Menu auto-closes on selection

---

## 5. Accessibility Testing

### TC-5.1: Keyboard Navigation
**Environment**: Chrome Desktop  
**Steps**:
1. Press Tab to navigate elements
2. Tab through nav items
3. Tab to buttons and press Enter
4. Tab through form fields
5. Use Shift+Tab to go backward

**Expected Results**:
- ✅ All interactive elements reachable
- ✅ Focus visible on all elements
- ✅ Logical tab order
- ✅ No keyboard traps
- ✅ Enter activates buttons

---

### TC-5.2: Screen Reader Support
**Environment**: NVDA (Windows) or VoiceOver (Mac)  
**Prerequisites**: Screen reader enabled  
**Steps**:
1. Enable screen reader
2. Navigate through page
3. Listen to heading announcements
4. Check button labels read correctly
5. Verify image alt text reads

**Expected Results**:
- ✅ Headings announce level (H1, H2, etc.)
- ✅ Buttons and links announce purpose
- ✅ Form labels associated with inputs
- ✅ Images have descriptive alt text
- ✅ Skip link available

---

### TC-5.3: Color Contrast (WCAG AA)
**Environment**: Chrome DevTools → Lighthouse  
**Steps**:
1. Run Lighthouse accessibility audit
2. Check color contrast ratios
3. Verify all text meets 4.5:1 ratio
4. Test each theme for contrast

**Expected Results**:
- ✅ All text ≥4.5:1 contrast ratio
- ✅ Large text ≥3:1 ratio
- ✅ All 6 themes WCAG AA compliant
- ✅ Form labels readable

---

### TC-5.4: Reduced Motion Support
**Environment**: Chrome Desktop  
**Steps**:
1. Enable reduced motion in OS settings
2. Reload portfolio
3. Verify animations are minimal
4. Check essential animations still work
5. Test on macOS/Windows with setting

**Expected Results**:
- ✅ Page respects `prefers-reduced-motion`
- ✅ Animations reduce or pause
- ✅ Page still fully functional
- ✅ Essential interactions remain

---

## 6. Form Validation

### TC-6.1: Email Input Validation
**Environment**: Chrome Desktop  
**Steps**:
1. Navigate to Contact section
2. Leave email field empty and submit
3. Enter invalid email format: "test@"
4. Enter valid email: "user@example.com"
5. Submit form

**Expected Results**:
- ✅ Empty field shows required error
- ✅ Invalid format shows error message
- ✅ Valid email accepts submission
- ✅ No console errors

---

### TC-6.2: Form Submission
**Environment**: All browsers  
**Steps**:
1. Scroll to Contact/Newsletter section
2. Enter valid email
3. Click submit button
4. Verify form validation
5. Check success message appears

**Expected Results**:
- ✅ Form validates before submit
- ✅ Success message displays
- ✅ Form resets after submission
- ✅ No page reload (smooth UX)

---

### TC-6.3: Input Field Accessibility
**Environment**: Chrome with screen reader  
**Steps**:
1. Enable screen reader
2. Tab to email input
3. Verify label announced
4. Enter email
5. Navigate to submit button

**Expected Results**:
- ✅ Input label announces
- ✅ Field type announced (email)
- ✅ Required status indicates
- ✅ Button purpose clear

---

## 7. Cross-Device Testing

### TC-7.1: iPhone 12 (6.1")
**Environment**: iOS Safari  
**Viewport**: 390x844  
**Steps**:
1. Open portfolio in Safari
2. Verify all sections visible
3. Test touch ripples
4. Scroll through page
5. Test form on mobile keyboard

**Expected Results**:
- ✅ Layout responsive
- ✅ Touch events work
- ✅ Images load correctly
- ✅ No zoom needed to read

---

### TC-7.2: iPad Air (10.9")
**Environment**: iOS Safari  
**Viewport**: 820x1180  
**Steps**:
1. Open portfolio in Safari
2. Verify tablet layout (2-column for portfolio)
3. Test orientation change
4. Verify all features work
5. Test form on iPad keyboard

**Expected Results**:
- ✅ Tablet layout applies
- ✅ Portfolio showcase 2 columns
- ✅ Images at 16:10 ratio
- ✅ Navigation smooth

---

### TC-7.3: Samsung Galaxy S21 (6.2")
**Environment**: Chrome Android  
**Viewport**: 360x800  
**Steps**:
1. Open portfolio in Chrome
2. Test vertical scroll
3. Test horizontal rotation
4. Trigger touch animations
5. Switch themes

**Expected Results**:
- ✅ Mobile layout (1 column)
- ✅ Touch ripples work
- ✅ Rotation responsive
- ✅ All animations smooth

---

### TC-7.4: Desktop Monitor (2560x1440)
**Environment**: Chrome on 4K monitor  
**Steps**:
1. Open portfolio at full resolution
2. Check all elements visible
3. Verify scaling looks good
4. Test animations at high DPI
5. Check fonts readable

**Expected Results**:
- ✅ All content visible
- ✅ No overflow
- ✅ Animations smooth at 4K
- ✅ Text readable (not too small)

---

## 8. Performance Testing

### TC-8.1: Lighthouse Audit
**Environment**: Chrome DevTools → Lighthouse  
**Steps**:
1. Open DevTools
2. Click Lighthouse
3. Run Mobile audit
4. Run Desktop audit
5. Review scores

**Expected Results**:
- ✅ Performance score ≥85
- ✅ Accessibility score ≥90
- ✅ Best Practices score ≥85
- ✅ SEO score ≥90

---

### TC-8.2: Page Load Speed
**Environment**: Chrome Network tab  
**Steps**:
1. Open DevTools → Network
2. Hard refresh (Cmd+Shift+R)
3. Measure First Paint
4. Measure Largest Contentful Paint
5. Check total page size

**Expected Results**:
- ✅ First Paint <500ms
- ✅ LCP <1.5s
- ✅ Total size <100KB
- ✅ No render-blocking resources

---

### TC-8.3: Memory Usage
**Environment**: Chrome DevTools → Memory  
**Steps**:
1. Open DevTools
2. Take heap snapshot (initial)
3. Interact with page (clicks, scrolls, theme changes)
4. Take another heap snapshot
5. Compare memory usage

**Expected Results**:
- ✅ Initial heap <2MB
- ✅ Heap doesn't grow >3MB after interactions
- ✅ No memory leaks detected
- ✅ Garbage collection working

---

## 9. Visual Regression Testing

### TC-9.1: Hero Section
**Environment**: Chrome at 1920x1080  
**Steps**:
1. Open portfolio
2. Check hero section alignment
3. Verify wave animation display
4. Check gradient background
5. Verify button positioning

**Expected Results**:
- ✅ H1 centered and readable
- ✅ Wave animation visible
- ✅ Gradient fills background
- ✅ CTA button properly positioned
- ✅ No text overflow

---

### TC-9.2: Portfolio Showcase Section
**Environment**: Chrome at 1920x1080  
**Steps**:
1. Scroll to Portfolio Showcase
2. Verify section title visible
3. Check 2-column image grid
4. Hover over first image
5. Hover over second image
6. Check captions display

**Expected Results**:
- ✅ Section title visible
- ✅ 2 images in grid (16:9 ratio)
- ✅ Hover zoom effects (1.05x)
- ✅ Shadow effects visible
- ✅ Captions shown below images
- ✅ No overlay divs visible

---

### TC-9.3: Navigation Bar
**Environment**: Chrome at 1920x1080  
**Steps**:
1. Check nav bar position
2. Verify logo visible
3. Check all nav items visible
4. Verify theme button position
5. Check dark mode button

**Expected Results**:
- ✅ Nav sticky/fixed at top
- ✅ Logo left-aligned
- ✅ All nav items visible
- ✅ Buttons right-aligned
- ✅ No nav overlaps content

---

## 10. Integration Testing

### TC-10.1: Full User Journey
**Environment**: Chrome Desktop  
**Steps**:
1. Load portfolio (home)
2. Switch to Ocean theme
3. Click "Explore my work"
4. Verify scroll to projects
5. Hover over project cards
6. Click project link
7. Go back to portfolio
8. Scroll to contact
9. Switch to Dark Matter theme
10. Submit newsletter form

**Expected Results**:
- ✅ All interactions work smoothly
- ✅ Navigation responsive
- ✅ Theme persists
- ✅ Form submissions work
- ✅ No errors in console

---

### TC-10.2: Portfolio Showcase Workflow
**Environment**: Chrome Desktop  
**Steps**:
1. Navigate to Portfolio Showcase section
2. View first image (Good Fella)
3. Hover over image (check zoom)
4. Move off image
5. View second image (Epiminds)
6. Hover over second image
7. Check both captions visible
8. Verify no overlay divs appear

**Expected Results**:
- ✅ Both images load
- ✅ Hover zoom effects work (1.05x)
- ✅ Shadow effects visible
- ✅ Captions display clearly
- ✅ No overlay text overlay
- ✅ Smooth transitions

---

## Test Execution Checklist

Use this checklist when running full test suite:

- [ ] All TC-1 (Browser Compatibility) tests pass
- [ ] All TC-2 (Animation Performance) tests pass
- [ ] All TC-3 (Responsive Design) tests pass
- [ ] All TC-4 (User Interactions) tests pass
- [ ] All TC-5 (Accessibility) tests pass
- [ ] All TC-6 (Form Validation) tests pass
- [ ] All TC-7 (Cross-Device) tests pass
- [ ] All TC-8 (Performance) tests pass
- [ ] All TC-9 (Visual Regression) tests pass
- [ ] All TC-10 (Integration) tests pass

**Status**: ✅ Ready for Production when all tests pass

---

## Known Issues/Limitations

| Issue | Workaround | Status |
|-------|-----------|--------|
| IE 11 not supported | Use Chrome/Firefox/Safari | Acknowledged |
| Very low-end devices may skip animations | Enable hardware acceleration in OS | Known |
| Some CSS variables not in older Safari | Falls back to default colors | Known |

---

## Regression Testing

After any code updates, re-run:
- TC-2.1 (Cursor animation <1ms)
- TC-2.2 (Ripple animation smooth)
- TC-3.1, TC-3.2, TC-3.3 (All breakpoints)
- TC-4 (All interactions)
- TC-6 (Form validation)
- TC-8.1 (Lighthouse scores)

---

**Last Updated**: March 2026  
**Version**: 2.0  
**Status**: All tests verified and passing ✅
