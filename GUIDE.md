# 🚀 Vercel Speed Insights & SSL Setup Guide

This guide explains how to correctly set up **Vercel Speed Insights** and fix common **SSL (HTTPS)** issues for a Vercel-hosted portfolio or web application.

It is written for **beginners** and assumes no prior experience with performance monitoring.

---

## 📌 What Problem Does This Guide Solve?

You may encounter the following issues:

- **“No data available”** in Vercel Speed Insights  
- **Real Experience Score (RES)** not showing  
- Browser security warning:
Your connection is not private
NET::ERR_CERT_COMMON_NAME_INVALID


These problems are **configuration-related**, not bugs.

---

## 🧠 Key Concepts (Important)

### What is Vercel Speed Insights?
Vercel Speed Insights provides **Real User Monitoring (RUM)** and measures:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

⚠️ Speed Insights **does not generate test data**.  
Only **real visitors on a live HTTPS site** are counted.

---

### Why HTTPS (SSL) Is Mandatory
If SSL is misconfigured:
- Browsers block analytics requests
- Speed Insights will not collect data
- Users see security warnings

---

## ✅ Step 1: Fix SSL (HTTPS) for Your Custom Domain

### Check SSL Status

1. Open **Vercel Dashboard**
2. Select your project
3. Navigate to **Settings → Domains**
4. Check domain status:
 - ✅ `Valid Certificate` → OK
 - ❌ `Invalid / Error` → Must be fixed

---

### Fix SSL Errors

If SSL is invalid:
- Click **Refresh Certificate**
- Or remove the domain and add it again
- Ensure both domains are covered if used:
- `aqibjawwad.com`
- `www.aqibjawwad.com`

Vercel automatically issues **Let’s Encrypt certificates**.

📘 Official Docs:  
https://vercel.com/docs/domains/custom-domains#ssl-certificates

---

## ✅ Step 2: Install Vercel Speed Insights

### For Next.js Projects

#### Install the package

```bash
npm install @vercel/speed-insights
Add Speed Insights to your app
App Router (app/ directory)
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
Pages Router (_app.tsx or _app.js)
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
Deploy again
git add .
git commit -m "Add Vercel Speed Insights"
git push
✅ Step 3: Enable Speed Insights in Vercel Dashboard
Open Vercel Dashboard

Select your project

Go to Analytics

Turn Speed Insights ON

Choose Production environment

📘 Docs:
https://vercel.com/docs/speed-insights

✅ Step 4: Wait for Real User Traffic
⚠️ This step is required.

Speed Insights collects data only from:

Real users

Production deployments

HTTPS connections

Typical requirements
50–100 real page views

24–48 hours

❌ Localhost traffic is not counted.

✅ Step 5: Verify Data Collection
Open your live site

Open Browser Developer Tools

Go to the Network tab

Look for requests to:

vitals.vercel-insights.com
Status 200 means data is being collected

❌ Common Mistakes
Mistake	Reality
Expecting instant data	Data appears after traffic
Ignoring SSL warnings	Analytics will not work
Testing on localhost	Not counted
Assuming a bug	This is expected behavior
✅ Final Checklist
 SSL certificate is valid

 @vercel/speed-insights installed

 <SpeedInsights /> added

 Project deployed to production

 Real users visited the site

 Waited at least 24 hours

📚 References
Vercel Speed Insights
https://vercel.com/docs/speed-insights

Vercel Analytics
https://vercel.com/docs/analytics

Google Web Vitals
https://web.dev/vitals/

Mozilla HTTPS Security
https://developer.mozilla.org/en-US/docs/Web/Security/HTTPS

📎 Notes
If Speed Insights still shows No data available:

Recheck SSL status

Confirm production deployment

Ensure real users are visiting

Disable ad blockers during testing