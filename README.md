# AstraLab Clinical Healthcare Platform

AstraLab is a high-performance, Next.js-powered electronic health record (EHR) and clinical management system designed specifically for the unique operational requirements of Nigerian healthcare providers.

---

## 🚀 Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with AstraLab Design Tokens (Editorial/Modern Clinical UI)
- **Auth**: NextAuth.js (Credentials Provider)
- **Database**: Prisma ORM with PostgreSQL
- **Payments**: Interswitch Webpay Integration (Sandbox Mocked)
- **Icons**: Material Symbols Outlined (Variable Fonts)

---

## 🔑 Access Credentials

### Admin / Practitioner Login
**Email**: `admin@astralab.ng`  
**Password**: `password123`  
*Note: Use the registration flow to create new clinic workspaces.*

---

## 🏗 Project Structure

- `app/`: Next.js App Router (Authenticated Dashboard & Marketing)
- `components/`: Modular UI components (Layout, Providers)
- `lib/`: Core logic (Auth, Prisma, Interswitch, Utils)
- `prisma/`: Database schema and migrations
- `public/`: Assets and fonts

---

## 💳 Payment Integration (Interswitch Sandbox)

The platform features a fully orchestrated Interswitch payment flow.
1.  **Initiate**: Redirect from Invoice to `/checkout/[ref]`.
2.  **Authorize**: Secure mock payment gateway.
3.  **Receipt**: Automatic redirection to `/payment-receipt/[ref]`.

---

## 🤝 Individual Contributions

- **System Architect**: Lead migration from static designs to Next.js App Router, engineered the root layout and core design system synchronization.
- **Frontend Engineer**: Transformed high-fidelity HTML/CSS into performant React components with Tailwind CSS; implemented the refined editorial clinical UI.
- **Backend Engineer**: Developed the secure NextAuth authentication layer (JWT) and persistent Prisma-based registration and patient intake APIs.
- **Fintech Integrator**: Engineered the Interswitch sandbox payment flow and receipt generation logic for clinical billing workflows.

---

## ⚡ Development

```bash
# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

---

© 2024 **Team Forge** for the Interswitch Developer Community + Enyata Community.
