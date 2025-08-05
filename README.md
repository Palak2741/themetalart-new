# The Metal Art - Professional Business Website

A comprehensive, production-ready business website for The Metal Art, specializing in advanced mechanical automation, precision metal fabrication, and structural engineering services.

## 🚀 Features

### Design & UI
- **Industrial Theme**: Dark metallic grays, steel blue accents, vibrant orange CTAs
- **Glass Morphism Effects**: Modern visual aesthetics with backdrop blur
- **Responsive Design**: Mobile-first approach with seamless transitions
- **Smooth Animations**: Parallax scrolling, hover effects, and micro-interactions
- **Professional Typography**: Inter font family with optimal spacing

### Website Structure
- **Header**: Sticky navigation with contact bar and mobile menu
- **Homepage**: Hero section, services preview, portfolio showcase, testimonials
- **About Page**: Company timeline, team profiles, certifications
- **Contact Page**: Comprehensive form with validation and auto-responses
- **Services**: Detailed pages for each service category
- **Portfolio**: Filterable project gallery with lightbox
- **Blog**: Article management system
- **Footer**: Multi-column layout with newsletter signup

### Technical Features
- **Next.js 13**: Latest framework with App Router
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Utility-first styling with custom design system
- **API Routes**: Contact forms, newsletter, content management
- **Email Integration**: Nodemailer with professional templates
- **SEO Optimized**: Meta tags, sitemap, structured data
- **Performance**: Image optimization, lazy loading, caching

### Business Features
- **Contact Management**: Forms email to sanjaymalik350@gmail.com
- **Newsletter System**: Automated welcome emails and admin notifications
- **Quote Requests**: Detailed project inquiry forms
- **Service Showcase**: Three main service categories with technical details
- **Client Testimonials**: Carousel with ratings and reviews
- **Portfolio Display**: Project filtering and detailed case studies

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Gmail account for email functionality

### Local Development
1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd themetalart
   npm install
   ```

2. **Environment Variables**
   Create `.env.local`:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

### Gmail Setup for Contact Forms
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this app password in EMAIL_PASS environment variable

## 🌐 Deployment

### Vercel Deployment (Recommended)
1. **Connect Repository**
   - Import project in Vercel dashboard
   - Connect your Git repository

2. **Environment Variables**
   Add in Vercel dashboard:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_SITE_URL=https://themetalart.com
   ```

3. **Custom Domain**
   - Add domain in Vercel settings
   - Configure DNS records as instructed
   - SSL certificate is automatically provisioned

4. **Deploy**
   ```bash
   vercel --prod
   ```

### Performance Optimizations
- **Image Optimization**: Next.js automatic optimization
- **Static Generation**: Pre-rendered pages for better performance
- **CDN**: Automatic edge caching via Vercel
- **Compression**: Gzip/Brotli compression enabled
- **Service Worker**: Caching strategy for offline capability

## 📊 SEO & Analytics

### SEO Features
- **Dynamic Meta Tags**: Optimized for each page
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Open Graph**: Social media preview optimization
- **Performance**: Core Web Vitals optimization

### Analytics Setup
1. **Google Analytics 4**
   - Replace `GA_TRACKING_ID` in layout.tsx
   - Configure conversion goals in GA dashboard

2. **Google Tag Manager**
   - Add GTM container ID
   - Set up enhanced ecommerce tracking

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test -- --coverage
```

### Test Coverage
- **Component Tests**: Header, Hero, Services, Contact forms
- **API Tests**: Contact form submission, newsletter signup
- **Integration Tests**: End-to-end user flows
- **Accessibility Tests**: WCAG 2.1 AA compliance

## 📱 Accessibility

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio maintained
- **Focus Management**: Visible focus indicators
- **Alternative Text**: Descriptive alt text for images

### Testing Tools
- **axe-core**: Automated accessibility testing
- **WAVE**: Web accessibility evaluation
- **Lighthouse**: Performance and accessibility audits

## 🔧 Content Management

### Admin Guide
1. **Contact Form Management**
   - Emails automatically sent to sanjaymalik350@gmail.com
   - Auto-reply sent to customers
   - Lead tracking through email notifications

2. **Newsletter Management**
   - Subscribers receive welcome email
   - Admin notified of new subscriptions
   - Email list building for marketing campaigns

3. **Content Updates**
   - Service information in components/ServicesPreview.tsx
   - Portfolio projects in components/PortfolioShowcase.tsx
   - Team information in app/about/page.tsx
   - Contact details in components/Header.tsx and Footer.tsx

4. **Blog Management**
   - Create new blog posts in app/blog/
   - Update featured articles
   - Manage categories and tags

## 🎨 Customization

### Design System
- **Colors**: Defined in globals.css with CSS variables
- **Typography**: Inter font with responsive scaling
- **Spacing**: 8px grid system with Tailwind utilities
- **Components**: Reusable UI components in components/ui/
- **Animations**: Custom CSS animations and Tailwind utilities

### Brand Customization
1. **Logo**: Replace logo placeholder in Header component
2. **Colors**: Update CSS variables in globals.css
3. **Content**: Modify text content in respective components
4. **Images**: Replace stock photos with company images

## 📞 Support & Maintenance

### Regular Maintenance
- **Dependencies**: Update packages monthly
- **Security**: Monitor for vulnerabilities
- **Performance**: Regular Lighthouse audits
- **Backups**: Database and content backups
- **Monitoring**: Uptime and error tracking

### Support Channels
- **Technical Issues**: Contact development team
- **Content Updates**: Follow admin guide
- **Email Issues**: Check Gmail/SMTP settings
- **Performance**: Use Vercel analytics dashboard

## 📈 Business Growth Features

### Lead Generation
- **Contact Forms**: Comprehensive project inquiry forms
- **Newsletter**: Email list building for marketing
- **Quote Requests**: Detailed service requirement capture
- **Call-to-Actions**: Strategic placement throughout site

### Conversion Optimization
- **Trust Signals**: Client testimonials and certifications
- **Social Proof**: Project showcases and case studies
- **Clear Value Props**: Service benefits and differentiators
- **Easy Contact**: Multiple contact methods available

### Analytics & Insights
- **Conversion Tracking**: Form submissions and goals
- **User Behavior**: Heatmaps and scroll tracking
- **Traffic Sources**: Marketing channel performance
- **ROI Measurement**: Lead quality and conversion rates

---

Built with ❤️ for industrial excellence. The Metal Art - Engineering the future of manufacturing.